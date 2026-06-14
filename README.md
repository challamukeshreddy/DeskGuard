# DeskGuard

Smart Library Seat Booking & Anti-Hoarding System.

DeskGuard is a hackathon MVP built to impress judges quickly. It focuses on polished UI, clear user flow, and demonstration-ready interactions rather than production infrastructure.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui-style local components
- Framer Motion
- Recharts
- Lucide icons

## Demo Pages

- `/` - premium landing page with problem, solution, features, stats, and CTA flow
- `/map` - interactive 50-desk library map with green/free, red/occupied, yellow/away, and grey/abandoned states
- `/student` - mock student dashboard with current seat, session timer, away timer, notifications, and booking history
- `/librarian` - staff dashboard with desk metrics, alerts, review queue, and analytics charts
- `/qr` - sample QR code generation and simulated check-in workflow
- `/login` - mock student and librarian account selection

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Deployment

The easiest deployment target is Vercel:

1. Push this repository to GitHub.
2. Import it in Vercel.
3. Keep the defaults for a Next.js project.
4. Deploy.

Any Node hosting provider that supports Next.js can also run it with:

```bash
npm install
npm run build
npm run start
```

## Prototype Notes

- All data is mocked in `src/data/mock.ts`.
- Timers and status changes are simulated in the browser.
- QR codes are visual demo placeholders, not cryptographic or production QR payloads.
- No database, authentication provider, or hardware integration is required for this MVP.
