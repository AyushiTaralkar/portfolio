# Ayushi Portfolio

An editorial, responsive portfolio concept for Ayushi Taralkar using Next.js App Router, Tailwind CSS, Framer Motion, and React Three Fiber.

## Included
- Warm ivory portfolio layout with optional dark theme toggle
- Responsive sticky navigation and mobile menu
- Hero collage with CSS-built robot, floating process cards, and medicine-to-CS polaroid
- Interactive skills matrix with 3D neural network rendered by React Three Fiber
- Three featured project cards with custom dashboard, agent workflow, and clinical audit trail visuals
- About, interests, journal note, and contact footer
- Reduced-motion CSS fallback
- No fabricated profile photo: the hero and about visuals are placeholders ready for your own image

## Run locally
Requires Node.js 18.17+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Personalise before publishing
1. Replace the initials/photo placeholders in `app/page.tsx` with your real photo in `/public`.
2. Update the email address (`hello@ayushitaralkar.dev`) to the address you want recruiters to use.
3. Replace GitHub links with direct repository URLs for Artha Sage, Composio Research Agent, and Field-to-Record.
4. Add your actual resume PDF as `public/Ayushi-Taralkar-Resume.pdf` and link it from the hero if desired.
5. Verify all project claims and screenshots before deployment.

## Deploy
Push the folder to GitHub, import the repository into Vercel, and deploy as a Next.js app. The 3D brain is client-rendered; if performance is a concern, replace it with a static SVG fallback for low-power devices.
