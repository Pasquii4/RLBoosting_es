# Rocket League Coaching Website

A premium dark mode Rocket League coaching website built with Next.js, React Three Fiber, GSAP ScrollTrigger, and Tailwind CSS.

## Features

- **Immersive 3D Landing Page**: Full-screen R3F canvas with Fennec car model and GSAP ScrollTrigger-controlled camera animation
- **Performance Tracker**: Dashboard with bento grid layout displaying coach stats and student progress
- **Community Hub**: Discord-focused page with benefits list and social proof elements
- **Premium Dark Aesthetic**: #000000 background, #FFFFFF text, thin borders, high contrast design

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **3D Graphics**: React Three Fiber + Drei
- **Animations**: GSAP ScrollTrigger + Framer Motion
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Inter, Space Grotesk

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
rocket/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home (immersive landing)
│   ├── tracker/           # Performance tracker
│   └── community/         # Community page
├── components/            # React components
│   ├── Navigation.tsx
│   ├── Scene.tsx          # R3F 3D scene
│   ├── FennecCar.tsx      # 3D car model
│   ├── BentoGrid.tsx
│   ├── CoachStats.tsx
│   └── ...
├── data/                  # Mock data
│   └── mock-stats.json
└── public/
    └── models/
        └── fennec.glb     # 3D car model
```

## Key Pages

- **Home (`/`)**: Immersive 3D landing with scroll-locked GSAP animation
- **Tracker (`/tracker`)**: Dashboard with coach and student stats
- **Community (`/community`)**: Discord CTA and benefits showcase

## Build

```bash
npm run build
npm start
```

## Type Checking

```bash
npm run type-check
```
