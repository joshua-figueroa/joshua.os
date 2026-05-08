# joshua.os

A personal portfolio reimagined as an iPadOS / iOS 26 home screen. Lock screen, widgets, app icons, dock — every section of the site lives behind a tappable app, complete with iOS-style zoom transitions, Liquid Glass surfaces, and an iMessage-styled contact flow.

> Live at **[joshua.os](https://joshuafigueroa.dev)** · Built by [Joshua Figueroa](https://github.com/joshua-figueroa)

---

## Highlights

-   **Lock screen → home screen** unlock with a swipe-up gesture (skipped on revisit via `sessionStorage`)
-   **Responsive form factors** — iPad layout on desktop/tablet, iPhone layout on mobile (with a fake Dynamic Island)
-   **iOS 26 Liquid Glass** wallpaper, status bar, dock and widgets
-   **Apps open with Framer Motion `layoutId` zoom** from icon → full screen, drag-down to dismiss
-   **Live widgets** — Clock, Status, Now Building (RevDash teaser), Home (Lock + Fullscreen tiles)
-   **iMessage-style Contact app** with typing indicator, gray/blue bubbles, pill compose bar, and EmailJS submission
-   **App Store-style Projects app** with a notification badge and project detail sheets
-   **Settings-style Tech Stack app** with grouped tool sections
-   **Notes-style About app**
-   **External apps** — GitHub, LinkedIn, Safari (→ google.joshuafigueroa.dev), and a route-based RevDash mini-site at `/revdash`
-   **PWA-ready** — `apple-mobile-web-app-capable` + manifest `display: fullscreen` so adding to Home Screen on iOS yields a true full-screen experience
-   **Fullscreen toggle** that detects iPhone Safari (where the Fullscreen API is blocked) and shows an Add-to-Home-Screen sheet instead

---

## Tech stack

-   **React 18** + **TypeScript** + **Vite**
-   **TailwindCSS** with custom design tokens (CSS variables) and iOS utilities (`.glass`, `.squircle`)
-   **Framer Motion** for the zoom transitions, lock-screen drag, and bubble animations
-   **Embla Carousel** for the RevDash screenshot peek-carousel
-   **react-icons** (Heroicons 2 + Ionicons 5) for status bar / app glyphs
-   **EmailJS** for the Contact form

---

## Project structure

```
src/
├── pages/
│   ├── HomeOS.tsx           # Lock + home + app overlay orchestrator
│   ├── RevDashHome.tsx      # /revdash landing
│   ├── RevDashSupport.tsx
│   └── RevDashPrivacy.tsx
├── components/ios/
│   ├── LockScreen.tsx
│   ├── HomeScreen.tsx       # Wallpaper + StatusBar + Widgets + Grid + Dock
│   ├── StatusBar.tsx        # Live time, dynamic island, signal/wifi/battery
│   ├── Wallpaper.tsx        # Animated navy/copper liquid orbs
│   ├── AppIcon.tsx          # Squircle icon w/ layoutId + badge support
│   ├── AppFrame.tsx         # Full-screen container w/ drag-to-close
│   ├── AppIcons.tsx         # react-icons map per app id
│   ├── Dock.tsx
│   ├── Widget.tsx           # Glass card shell (square via padding-bottom)
│   ├── AddToHomeSheet.tsx   # iPhone-Safari fullscreen workaround
│   ├── widgets/
│   │   ├── ClockWidget.tsx
│   │   ├── AvailabilityWidget.tsx
│   │   ├── NowBuildingWidget.tsx
│   │   └── ControlsWidget.tsx     # Lock + Fullscreen tiles, iOS Home-app layout
│   └── apps/
│       ├── AboutApp.tsx     # Notes-style
│       ├── ProjectsApp.tsx  # App Store grid + detail sheet
│       ├── TechApp.tsx      # Settings-style grouped list
│       └── ContactApp.tsx   # iMessage-styled
├── constants/
│   ├── ios.ts               # App registry: id, name, kind, gradient, url
│   ├── projects.ts
│   ├── techs.ts
│   └── service.ts
├── hooks/
│   ├── useTime.ts
│   ├── useDeviceType.ts     # 'pad' | 'phone'
│   └── useFullscreen.ts     # standard + webkit + iPhone-Safari detection
└── assets/
```

---

## Local development

```bash
yarn install
yarn dev
```

Visit `http://localhost:5173`.
