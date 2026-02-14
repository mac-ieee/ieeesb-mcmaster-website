# IEEE McMaster Student Branch Website

The official website for the IEEE McMaster Student Branch, built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [pnpm](https://pnpm.io/) 9+

### Development

```sh
pnpm install
pnpm dev
```

### Build

```sh
pnpm build
```

### Start

```sh
pnpm start
```

## Project Structure

```
src/
  app/           # Next.js App Router pages and layouts
  components/    # React components
    ui/          # Reusable UI primitives (Badge, Button, Card)
    about.tsx    # About section
    chapters.tsx # Chapters section
    contact.tsx  # Contact section
    events.tsx   # Events section
    footer.tsx   # Footer
    header.tsx   # Header with navigation
    hero.tsx     # Hero section
    smooth-scroll.tsx  # Smooth scrolling & fade-in animations
    team.tsx     # Team section
  hooks/         # Custom React hooks
public/          # Static assets
```

## How to edit things

If you wish to change something in the website (like add an event or update your profile). Make sure to add your changes in the data file and run the items locally to see if its changed. If so add your changes in a new branch and make a PR so that we can review it.

## Tech Stack

- [Next.js](https://nextjs.org/) 16 with App Router
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) for code quality
