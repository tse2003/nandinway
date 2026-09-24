# NANDINWAY front-end

A Mongolian-language, responsive Next.js App Router website based on the supplied Nandinway reference design.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

```sh
npm run lint
npm run build
npm start
```

## Features

- Responsive navigation and accessible mobile menu.
- Reference banner, service cards, company introduction, destinations, travel advice and contact sections.
- Booking request form with service checkboxes, city selection, dates, passenger count and telephone validation.
- Prepared request summary with a `mailto:` handoff. The form does **not** create bookings, send email automatically or store customer information. Users must send the message from their email application. A phone alternative is provided.
- Mongolian metadata, keyboard focus styles and reduced-motion support.

## Content and assets

The hero, logo and destination thumbnails in `public/images` are cropped from the user-provided reference. They are local assets, with no dependency on third-party image hosting. The hero's artwork includes baked-in text; its accessible description is supplied in HTML. Replace it with original, high-resolution artwork for future copy changes or sharper mobile crops.

Phone, email, address and business claims were transcribed from the supplied design and should be confirmed before production publication. IATA certification artwork is not reproduced as an independently verified accreditation.

Main files: `app/page.tsx`, `app/globals.css`, `app/components/booking-form.tsx`, `app/components/header.tsx`.

## Backend integration

To accept requests directly, replace the form's summary/email handoff with a server endpoint that validates and persists requests, sends a notification, handles errors and applies spam protection. Do not display a successful booking message until the backend confirms acceptance.
