// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.alvea.mx',
  integrations: [
    icon({
      include: {
        // Phosphor. Solo los glifos que realmente se usan entran al bundle.
        ph: [
          'tooth', 'calendar-check', 'check', 'plus', 'minus',
          'arrow-right', 'arrow-up-right', 'map-pin', 'phone',
          'whatsapp-logo', 'star', 'caret-left', 'caret-right',
          'envelope-simple', 'clock', 'shield-check', 'list', 'x',
          'circle-notch', 'warning-circle', 'check-circle', 'scan',
          'first-aid-kit', 'instagram-logo', 'facebook-logo',
        ],
      },
    }),
  ],
});
