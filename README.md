# Alvea Clínica Dental

Landing page de captación de pacientes para una clínica dental. Sitio estático
construido con Astro, sin framework de interfaz y sin dependencias de terceros
en tiempo de ejecución.

> **Alvea es una marca ficticia.** Nombres, cifras, precios, dirección,
> teléfonos, testimonios y el perfil de la especialista son de muestra. Lee
> [Antes de publicar](#antes-de-publicar) antes de subir esto a un dominio real.

## Arrancar

```bash
npm install
npm run dev      # servidor local
npm run build    # genera dist/
npm run preview  # sirve dist/ para revisarlo
npm run promo    # imágenes para portafolio y redes, en promo/
```

Requiere Node 22.12 o superior.

## Dónde se edita cada cosa

Casi todo el contenido vive en un único archivo:

| Qué quieres cambiar | Archivo |
| --- | --- |
| Textos, precios, servicios, horarios, testimonios, datos de contacto | `src/data/clinica.ts` |
| Colores, tipografía, radios, sombras, espaciado | `src/styles/global.css` (bloque `:root`) |
| Título, descripción, datos estructurados, Open Graph | `src/layouts/Base.astro` |
| Orden de las secciones | `src/pages/index.astro` |
| Fotografías | `public/img/` |

Los componentes leen de `src/data/clinica.ts`, así que para un cambio de copy
normalmente no hace falta tocar ningún `.astro`.

### Sistema de diseño

Un solo color de acento (`--accent`) y una sola escala de radios, documentada
en la cabecera de `src/styles/global.css`:

- Interactivo (botones, chips, avatares): `--r-pill`
- Contenedor de página: `--r-shell`
- Tarjetas, tiles e imágenes: `--r-card`
- Campos de formulario y cajas anidadas: `--r-inner`

**Tema claro, y solo claro.** No hay variante oscura ni se sigue
`prefers-color-scheme`: en salud un fondo oscuro lee como algo ajeno a la
consulta. La jerarquía se construye con tres niveles de claridad dentro del
marco `--wash`:

| Token | Uso |
| --- | --- |
| `--surface` | blanco, el cuerpo de la página |
| `--band` | azul clínico claro, la banda de la especialista |
| `--pie` | gris azulado muy claro, el cierre |

Sobre contraste: `--ink-3` es el gris más claro de la escala y **no llega a
4.5:1** sobre las superficies claras, así que está reservado a elementos
decorativos. Para texto que se lee usa `--ink-2`, y para textos sustitutos de
campo `--ink-placeholder`, calibrado justo por encima del mínimo.

## El formulario de cita

Por omisión el formulario **no necesita backend**: valida en el navegador y
abre WhatsApp con los datos ya escritos en el mensaje.

Para recibir los envíos por correo o en un CRM, abre
`src/components/Cita.astro` y pon la URL de tu servicio en la constante del
`<script>`:

```js
const ENDPOINT_FORMULARIO = 'https://formspree.io/f/tu-id';
```

Con la constante llena, el formulario hace `POST` de JSON a esa dirección y
muestra el mensaje de confirmación. Funciona con Formspree, Netlify Forms,
Basin o cualquier API propia que acepte JSON.

## Analítica

Google Analytics 4 vive en un solo archivo, `src/components/Analitica.astro`,
que el layout mete en el `<head>`. Se enciende con una variable de entorno:

```
# .env
PUBLIC_GA_ID=G-XXXXXXXXXX
```

El ID sale de analytics.google.com → Administrar → Flujos de datos → el flujo
web del sitio → «ID de medición». Si la variable está vacía el componente no
pinta nada: el sitio no carga un solo byte de Google y no pone cookies. El
valor se congela en el HTML al construir, así que cambiarlo pide otro
`npm run build`.

### Qué se mide

Además de las vistas de página, los gestos que aquí valen como lead:

| Evento                    | Cuándo se dispara                          | Parámetros propios        |
| ------------------------- | ------------------------------------------ | ------------------------- |
| `clic_telefono`           | Clic en cualquier enlace `tel:`            | `seccion`                 |
| `clic_whatsapp`           | Clic en cualquier enlace de WhatsApp       | `seccion`                 |
| `clic_correo`             | Clic en cualquier enlace `mailto:`         | `seccion`                 |
| `cta_cita`                | Clic en el botón de agendar (hero, cabecera, menú móvil) | `seccion`   |
| `inicio_solicitud_cita`   | Primera interacción con el formulario      | —                         |
| `solicitud_cita`          | El formulario se envió bien                | `metodo`, `tratamiento`, `horario` |

`metodo` vale `endpoint` o `whatsapp` según por dónde salió la solicitud (ver
«El formulario de cita» más arriba): son dos experiencias distintas y no
cierran igual.

`seccion` es el `id` del bloque donde estaba el enlace, así que distingue el
teléfono de la cabecera del que está en el pie.

Dos cosas hay que hacer una vez dentro de GA4, que no se pueden configurar
desde el código:

1. Marcar `solicitud_cita` como **evento clave** (Administrar → Eventos). Es la
   conversión; sin eso GA4 lo trata como un evento cualquiera.
2. Declarar los parámetros propios (`tratamiento`, `horario`, `metodo`,
   `seccion`) como **dimensiones personalizadas**. Hasta que no estén
   declaradas los informes no permiten segmentar por ellas. `tratamiento` es el
   que dice qué demanda llega de verdad.

La diferencia entre `inicio_solicitud_cita` y `solicitud_cita` es lo que
importa: dice si la clínica pierde pacientes porque llega poca gente o porque
la gente se atora a medio formulario. Son dos problemas con soluciones
opuestas.

No se manda nunca nombre, teléfono ni correo del paciente a GA4: son datos de
salud y no tienen nada que hacer en un informe.

### Consentimiento

El componente arranca con el modo de consentimiento de Google en
`analytics_storage: granted` y toda la parte publicitaria en `denied`. Para un
sitio de captación en México con su aviso de privacidad publicado eso alcanza.
Si algún día se conecta Google Ads y hace falta `ad_storage`, entonces sí hay
que montar un banner de cookies antes de concederlo.

## Publicar

`npm run build` deja el sitio en `dist/`. Es HTML estático: súbelo a Netlify,
Vercel, Cloudflare Pages, GitHub Pages o cualquier hosting normal.

Antes de compilar, cambia el dominio en `astro.config.mjs`:

```js
site: 'https://www.tudominio.mx',
```

De ahí salen la URL canónica y las direcciones absolutas de Open Graph.

## Imágenes para portafolio y redes

```bash
npm run build   # hace falta dist/
npm run promo
```

Escribe veinte imágenes en `promo/` (carpeta ignorada por git):

| Archivo | Para qué |
| --- | --- |
| `ig-vertical.png` 1080×1350 (4:5) | Feed de Instagram y Facebook: el que más alcance tiene |
| `ig-cuadricula.png` 1080×1440 (3:4) | Cuadrícula del perfil de Instagram |
| `ig-vertical-*.png` / `ig-cuadricula-*.png` | Lo mismo, pero de servicios, especialista y cita: seis piezas para carrusel |
| `fb-cuadrado.png` 1080×1080 | Feed cuadrado |
| `fb-horizontal.png` 1200×630 | Vista previa de enlace, portada de grupo |
| `escritorio-hero.png` / `movil-hero.png` | La primera pantalla, limpia, a 2× |
| `seccion-*.png` / `seccion-*-movil.png` | Las tres secciones sueltas, en los dos anchos |
| `escritorio-completa.png` / `movil-completa.png` | Página entera de arriba abajo |

Las piezas compuestas llevan el sitio montado en un portátil y un teléfono
dibujados por CSS, sobre el azul tinta de la marca.

### Los dos tamaños de Instagram

No son lo mismo y conviene tener los dos:

- **Feed**: Instagram recorta a **4:5** como máximo. `ig-vertical.png` ya viene
  en esa proporción, así que se publica sin recorte.
- **Cuadrícula del perfil**: se ve en **3:4**. Si subes la de 4:5, la cuadrícula
  te corta arriba y abajo.

`ig-cuadricula.png` es 3:4 pero con **zona segura 4:5**: todo el contenido cabe
en el centro 4:5 y las bandas de arriba y abajo son sólo fondo, así que la misma
pieza se ve entera en la cuadrícula y no pierde nada cuando el feed la recorta.
Para ver dónde cae ese borde, `node scripts/promo.mjs --guias` (esa versión no
se sube).

Los archivos salen a 2×: Instagram los reescala y quedan más nítidos que
subiendo 1080 de ancho. Para el tamaño exacto, `"escala": 1` en el lienzo.

### Textos de las piezas

Todo se configura en `promo.config.json`. Cada sección puede llevar su propio
`titular` y `pie`; si los lleva, se le hace su pieza compuesta en los lienzos
marcados con `porSeccion` (por defecto los dos de Instagram), con la sección en
el portátil y su versión móvil en el teléfono:

```jsonc
{
  "nombre": "servicios",
  "selector": "#servicios",
  "titular": "Sabes cuánto cuesta\nantes de sentarte",  // \n parte la línea
  "pie": "Presupuesto firmado y garantía por escrito"
}
```

Conviene que el titular **complemente** lo que ya se lee en la captura en vez de
repetirlo. Y no metas ahí cifras (años de práctica, número de implantes,
pacientes): son lo primero que te piden demostrar.

> **No publiques `*-especialista.png` ni `*-cita.png` mientras el perfil de la
> especialista y los testimonios sean los de muestra.** Esas piezas enseñan un
> retrato de archivo con nombre, cédula implícita y cifras inventadas, que es
> justo lo que advierte la lista de abajo.

## Antes de publicar

- [ ] Cambiar el dominio en `astro.config.mjs`.
- [ ] Sustituir todos los datos de `src/data/clinica.ts` por los reales:
      nombre de la clínica, teléfonos, correo, dirección, horarios y precios.
- [ ] **Reemplazar la foto y el perfil de la especialista.** El retrato actual
      es una imagen de archivo y el nombre es inventado. Presentar a un modelo
      de stock como una dentista con nombre y credenciales concretas induce a
      error a los pacientes, y en México la publicidad de servicios de salud
      está regulada.
- [ ] Sustituir los testimonios y sus fotos por opiniones reales con permiso
      de quien las firma.
- [ ] Revisar las cifras (años, número de pacientes, implantes colocados) para
      que correspondan a la realidad del negocio.
- [ ] Cambiar las fotografías de `public/img/` por fotos de la clínica. Las
      actuales son de Unsplash, de uso libre, pero no son tu consultorio.
- [ ] Escribir las páginas legales enlazadas en el pie:
      `/aviso-de-privacidad`, `/terminos`, `/cookies`. Hoy son enlaces sin
      destino. El aviso de privacidad es obligatorio si el formulario recoge
      datos personales (LFPDPPP).
- [ ] Enlazar las redes sociales reales en `contacto.redes`.
- [ ] Actualizar `openingHoursSpecification` y la dirección en el bloque de
      datos estructurados de `src/layouts/Base.astro`.
- [ ] Volver a correr `npm run promo` después de sustituir los datos: las
      imágenes de `promo/` congelan lo que hubiera en la página ese día,
      teléfonos y precios incluidos.

## Detalles técnicos

- **Sin JavaScript de terceros.** Tipografía, iconos e imágenes se sirven desde
  el propio dominio. No hay peticiones externas ni CDNs.
- **Tipografía auto-alojada.** Plus Jakarta Sans en `public/fonts/`, con
  `unicode-range` separado para `latin` y `latin-ext`, y precarga de los dos
  pesos que aparecen en la primera pantalla.
- **Iconos:** Phosphor mediante `astro-icon`. Solo se incluyen en el bundle los
  glifos declarados en `astro.config.mjs`.
- **Movimiento:** revelado al entrar en pantalla con `IntersectionObserver`.
  No hay escuchas de `scroll` sobre la ventana. Todo se desactiva con
  `prefers-reduced-motion: reduce`.
- **Sin JavaScript activo** la página se ve completa, el menú del encabezado se
  sustituye por los anclajes y la barra de acción móvil queda fija a la vista.
- **Accesibilidad:** acordeón con el patrón WAI-ARIA (navegación con flechas y
  paneles cerrados marcados como `inert`), campos con etiqueta propia y error
  en línea, foco visible en todos los elementos interactivos, y un enlace para
  saltar al contenido.
