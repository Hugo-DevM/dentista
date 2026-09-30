/* ==========================================================================
   CONTENIDO DE LA CLÍNICA
   --------------------------------------------------------------------------
   AVISO: "Alvea" es una marca ficticia creada como demostración. Todos los
   datos de este archivo (nombres, cifras, precios, dirección, teléfonos,
   testimonios y credenciales) son de muestra y deben reemplazarse por los
   datos reales del negocio antes de publicar.

   Este es el único archivo que hay que tocar para cambiar textos, precios,
   servicios, horarios y datos de contacto. Los componentes leen de aquí.
   ========================================================================== */

export const marca = {
  nombre: 'Alvea',
  nombreCompleto: 'Alvea Clínica Dental',
  descriptor: 'Clínica dental',
  dominio: 'alvea.mx',
  claim: 'Odontología de precisión en Polanco, Ciudad de México.',
} as const;

export const contacto = {
  telefono: '+52 55 4189 2073',
  telefonoHref: '+525541892073',
  whatsapp: '525541892073',
  correo: 'hola@alvea.mx',
  calle: 'Av. Horacio 1844, piso 2',
  colonia: 'Polanco V Sección, Miguel Hidalgo',
  cp: '11550 Ciudad de México',
  mapa: 'https://maps.google.com/?q=Av.+Horacio+1844,+Polanco,+CDMX',
  horarios: [
    { dias: 'Lunes a viernes', horas: '9:00 a 20:00' },
    { dias: 'Sábado', horas: '9:00 a 15:00' },
    { dias: 'Urgencias', horas: 'Mismo día, con cita telefónica' },
  ],
  redes: [
    { nombre: 'Instagram', icono: 'ph:instagram-logo', url: 'https://instagram.com/' },
    { nombre: 'Facebook', icono: 'ph:facebook-logo', url: 'https://facebook.com/' },
  ],
} as const;

/* Etiqueta única para la acción principal. No usar sinónimos en otras
   secciones: una sola intención, una sola etiqueta en toda la página. */
export const CTA_PRINCIPAL = 'Agendar valoración';

export const navegacion = [
  { etiqueta: 'Servicios', href: '#servicios' },
  { etiqueta: 'La clínica', href: '#clinica' },
  { etiqueta: 'Especialista', href: '#especialista' },
  { etiqueta: 'Pacientes', href: '#pacientes' },
  { etiqueta: 'Contacto', href: '#cita' },
] as const;

export const hero = {
  titulo: 'Tratamientos dentales',
  tituloAcento: 'sin sorpresas',
  entrada:
    'Diagnóstico con escáner 3D, plan por escrito y precio cerrado antes de empezar. Polanco, CDMX.',
} as const;

/* Franja de hechos bajo el hero. Iconos de Phosphor. */
export const hechos = [
  { icono: 'ph:calendar-check', titulo: 'Valoración sin costo', detalle: 'Radiografía y plan incluidos' },
  { icono: 'ph:scan', titulo: 'Escáner intraoral 3D', detalle: 'Sin moldes de pasta' },
  { icono: 'ph:shield-check', titulo: 'Sedación consciente', detalle: 'Para tratamientos largos' },
  { icono: 'ph:first-aid-kit', titulo: 'Urgencias el mismo día', detalle: 'Si llamas antes de las 17:00' },
] as const;

export const servicios = [
  {
    id: 'restauradora',
    nombre: 'Odontología restauradora',
    desde: 'Desde $1,850 MXN',
    texto:
      'Resinas, incrustaciones de cerámica y endodoncia con microscopio. Reparamos la pieza antes de llegar a la extracción, y te decimos con honestidad cuándo ya no vale la pena intentarlo.',
    puntos: ['Resina estética en una sesión', 'Endodoncia con microscopio', 'Incrustaciones de cerámica'],
    imagen: '/img/servicio-restauradora.jpg',
    alt: 'Odontólogo revisando una serie de radiografías dentales en un negatoscopio',
  },
  {
    id: 'implantes',
    nombre: 'Implantología',
    desde: 'Desde $18,400 MXN',
    texto:
      'Planeamos cada implante sobre una tomografía antes de entrar a quirófano. Eso reduce el tiempo en el sillón y evita los ajustes de último momento que alargan el tratamiento.',
    puntos: ['Planeación sobre tomografía', 'Guía quirúrgica impresa', 'Corona definitiva en cerámica'],
    imagen: '/img/servicio-implantes.jpg',
    alt: 'Especialista analizando una tomografía dental tridimensional en un monitor',
  },
  {
    id: 'ortodoncia',
    nombre: 'Ortodoncia invisible',
    desde: 'Desde $32,000 MXN',
    texto:
      'Alineadores transparentes con revisión cada seis semanas. En la primera cita ves la simulación del resultado y el número exacto de alineadores que vas a necesitar.',
    puntos: ['Simulación antes de empezar', 'Revisión cada 6 semanas', 'Retenedores incluidos'],
    imagen: '/img/servicio-ortodoncia.jpg',
    alt: 'Paciente colocándose un alineador dental transparente',
  },
  {
    id: 'estetica',
    nombre: 'Blanqueamiento y estética',
    desde: 'Desde $4,200 MXN',
    texto:
      'Blanqueamiento en consultorio, carillas y diseño de sonrisa. Antes de cualquier tratamiento estético revisamos encías y mordida, porque un buen resultado no se sostiene sobre una boca enferma.',
    puntos: ['Blanqueamiento en una sesión', 'Carillas de cerámica', 'Diseño digital de sonrisa'],
    imagen: '/img/servicio-blanqueamiento.jpg',
    alt: 'Consultorio dental con sillón y equipo de iluminación listo para una consulta',
  },
] as const;

export const clinica = {
  titulo: 'Una clínica ordenada alrededor de tu tiempo',
  texto:
    'Abrimos en 2007 con una idea simple: que nadie salga del consultorio sin entender qué le hicieron y cuánto costó. Hoy somos nueve especialistas trabajando en el mismo piso, así que tu tratamiento no se reparte entre tres direcciones distintas.',
  puntos: [
    'Nueve especialistas en la misma sede',
    'Expediente digital que puedes descargar',
    'Presupuesto cerrado firmado antes de iniciar',
  ],
  /* "sufijo" se compone en tamaño pequeño, así que solo debe llevar palabras.
     Los símbolos que forman parte de la cifra (+, %) van dentro de "valor". */
  metricas: [
    { valor: '18', sufijo: 'años', texto: 'Atendiendo familias en Polanco desde 2007.' },
    { valor: '4,300+', sufijo: '', texto: 'Pacientes con expediente activo en la clínica.' },
  ],
  imagen: '/img/clinica-interior.jpg',
  alt: 'Interior de un consultorio dental con sillón, lámpara e instrumental ordenado',
} as const;

export const especialista = {
  etiqueta: 'Especialista titular',
  nombre: 'Dra. Renata Iturbe',
  apellido: 'Solís',
  rol: 'Cirujana dentista. Implantología y rehabilitación oral.',
  cita:
    'Ningún tratamiento empieza sin que el paciente sepa qué vamos a hacer, cuánto dura y cuánto cuesta.',
  firma: 'Dra. Renata Iturbe Solís',
  firmaRol: 'Directora clínica',
  datos: [
    { valor: '18 años', texto: 'de práctica clínica' },
    { valor: '900+', texto: 'implantes colocados' },
    { valor: '2007', texto: 'año de fundación' },
  ],
  imagen: '/img/especialista.jpg',
  alt: 'Retrato de la doctora Renata Iturbe, con bata blanca, al aire libre',
} as const;

export const testimonios = [
  {
    texto:
      'Llegué con un diente fracturado un viernes por la tarde y me atendieron ese mismo día. Me explicaron las dos opciones con precios antes de tocarme.',
    nombre: 'Mariana Cifuentes',
    servicio: 'Endodoncia',
    foto: '/img/p-mariana.jpg',
  },
  {
    texto:
      'Llevaba años evitando al dentista. La sedación consciente me permitió hacer tres tratamientos en una sola sesión sin pasarla mal.',
    nombre: 'Joaquín Bermúdez',
    servicio: 'Rehabilitación oral',
    foto: '/img/p-joaquin.jpg',
  },
  {
    texto:
      'El presupuesto del primer día fue exactamente lo que pagué catorce meses después. Eso, con ortodoncia, no es nada común.',
    nombre: 'Ximena Portillo',
    servicio: 'Ortodoncia invisible',
    foto: '/img/p-ximena.jpg',
  },
  {
    texto:
      'Me colocaron dos implantes con guía quirúrgica. Salí caminando y al día siguiente estaba trabajando normal.',
    nombre: 'Andrés Valdovinos',
    servicio: 'Implantes dentales',
    foto: '/img/p-andres.jpg',
  },
] as const;

export const cita = {
  titulo: 'Agenda tu valoración',
  texto:
    'Deja tus datos y te confirmamos horario por WhatsApp el mismo día hábil. La valoración incluye radiografía y plan de tratamiento por escrito.',
  imagen: '/img/sede.jpg',
  alt: 'Recepción amplia y luminosa de la clínica con ventanales de piso a techo',
} as const;

export const horariosPreferidos = [
  'Mañana, 9:00 a 12:00',
  'Mediodía, 12:00 a 15:00',
  'Tarde, 15:00 a 18:00',
  'Última hora, 18:00 a 20:00',
] as const;

export const pieEnlaces = [
  {
    titulo: 'Clínica',
    enlaces: [
      { etiqueta: 'Servicios', href: '#servicios' },
      { etiqueta: 'La clínica', href: '#clinica' },
      { etiqueta: 'Especialista', href: '#especialista' },
      { etiqueta: 'Pacientes', href: '#pacientes' },
    ],
  },
  {
    titulo: 'Tratamientos',
    enlaces: [
      { etiqueta: 'Odontología restauradora', href: '#servicios' },
      { etiqueta: 'Implantología', href: '#servicios' },
      { etiqueta: 'Ortodoncia invisible', href: '#servicios' },
      { etiqueta: 'Blanqueamiento', href: '#servicios' },
    ],
  },
  {
    titulo: 'Legal',
    enlaces: [
      { etiqueta: 'Aviso de privacidad', href: '/aviso-de-privacidad' },
      { etiqueta: 'Términos de servicio', href: '/terminos' },
      { etiqueta: 'Política de cookies', href: '/cookies' },
    ],
  },
] as const;
