# Openlane TechServices

The official business portfolio website for Openlane TechServices, built with React, TanStack Start, Vite, and Tailwind CSS.

## Local development

1. Install dependencies with `bun install`.
2. Copy `.env.example` to `.env.local`.
3. Add the private contact values to `.env.local`.
4. Start the site with `bun run dev`.

## Production

Configure the same `VITE_*` variables in the hosting provider before building:

```text
VITE_WHATSAPP_NUMBER
VITE_PHONE_DISPLAY
VITE_EMAIL
VITE_User1_PHONE
VITE_User1_WHATSAPP
VITE_User2_PHONE
VITE_User2_WHATSAPP
```