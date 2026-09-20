# Restaurant Website Template

A single-page marketing website template built with **Angular** and **Angular Material**, meant to be re-skinned quickly for different restaurants. Content ships in Spanish, uses plain image placeholders until real photography is available, and avoids anything that reads as generic filler: no fabricated reviews, no invented statistics, no stock photography.

## Pages and sections

- **Inicio (Hero)** - business name, tagline, opening-hours badge, two CTAs (Reservar mesa / Ver la carta).
- **Highlights strip** - four factual trust points.
- **Carta** - filterable menu grid, one card per dish.
- **¿Quiénes somos?** - short, concrete history text.
- **Galería** - filterable photo grid (Comida / Local).
- **Localización** - embedded Google map, address, phone, quick hours, directions button.
- **Reserva y Contacto** - booking form (Reactive Forms + Angular Material) plus address, phone, email, full opening hours and social links.
- **Footer** - nav links, contact recap, social links, and links to the legal pages.
- **Política de privacidad** and **Términos y condiciones** - real routed pages with generic template legal text (`/privacidad`, `/terminos`). Both carry a visible note that they are a starting point, not a reviewed legal document.
- **Floating chat button** - quick WhatsApp contact link.

There is no testimonials/reviews section: a template has no real customer quotes to show, and fabricated ones are worse than none.

## Re-skinning for a new client

Everything content-related lives in **one file**:

```
src/app/core/site-config.ts
```

Edit the business name, tagline, description, menu items, opening hours, contact info and reservation settings there. Every component reads through `SiteConfigService`, so nothing else needs to change.

**Colors** live in `src/styles.scss`, in the `mat.theme()` call:

```scss
@include mat.theme((
  color: (
    primary: mat.$azure-palette,
    tertiary: mat.$blue-palette,
  ),
  ...
));
```

See the [Angular Material theming guide](https://material.angular.dev/guide/theming) for the full palette list. The same file also squares off Material's default pill-shaped buttons via the `--mdc-*-container-shape` custom properties.

**Images**: every photo slot in `site-config.ts` (`business.heroImage`, `about.image`, `offerings.items[].image`, `gallery.images[].src`, `location.image`) is optional. Leave it unset and the section renders a neutral placeholder box (`app-placeholder-image`) instead - no code changes needed. Set it to a real URL once the client supplies photography and the placeholder is replaced automatically.

**Map**: the Localización section embeds a Google Maps iframe generated from `contact.address` - no API key required.

**Favicon**: `public/favicon.ico` is a plain flat-color monogram, not a stock icon. Replace it with the client's own mark.

**Legal pages**: `src/app/pages/privacy-policy` and `src/app/pages/terms` hold generic Spanish template text referencing `contact.address/email/phone` from the config. Review and adapt the wording with a lawyer before publishing a real site - the visible notice on both pages says as much.

**Reservations section** is optional per business: set `reservation.enabled = false` in `site-config.ts` to hide it (the "Reservar mesa" nav CTA hides automatically too). This section also carries the contact details and opening hours, so hiding it removes those too.

## Project structure

```
src/app/
  core/            site-config (data), site-config.service, scroll.service
  shared/          section-heading, placeholder-image, whatsapp-fab
  layout/          navbar, footer
  sections/        hero, highlights, offerings, about, gallery, location, reservation
  pages/           home, privacy-policy, terms
  app.routes.ts    route table (/, /privacidad, /terminos)
```

## Development server

```bash
npm start
```

Open `http://localhost:4200/`. The app reloads automatically on file changes.

## Building

```bash
npm run build
```

Output goes to `dist/`.

## Running unit tests

```bash
npm test
```
