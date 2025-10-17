# TalentFlow

**TalentFlow** is a modern, comprehensive hiring platform designed to simplify recruitment workflows. Developed with **React.js**, **Vite**, and **Tailwind CSS**, the application features a responsive UI, support for light/dark themes, and extensive analytics capabilities. Backend interactions are simulated via Mock Service Worker (MSW) for seamless development and testing.

---

## Table of Contents

- [Features](#features)  
- [Technology Stack](#technology-stack)  
- [Project Structure](#project-structure)  
- [Setup Instructions](#setup-instructions)  
- [Architecture Overview](#architecture-overview)  
- [Technical Decisions](#technical-decisions)  
- [Known Issues](#known-issues)  
- [Planned Enhancements](#planned-enhancements)  
- [Contributing Guidelines](#contributing-guidelines)  
- [License](#license)  

---

## Features

- **Dashboard** providing an overview of jobs and recruitment metrics.  
- **Job Management** to create, view, and edit job listings.  
- **Candidate Tracking** across multiple hiring stages.  
- **Assessments** with tools for building and taking candidate tests.  
- **Analytics** featuring charts on pipeline, velocity, scores, and top jobs, with CSV export.  
- **Theme Toggle** between light and dark modes with preference saved in `localStorage`.  
- **Global Search** across jobs, candidates, and assessments.  
- **Mobile-Responsive** interface using Tailwind CSS.  
- **Mock APIs** powered by MSW for efficient frontend development.

---

## Technology Stack

- React.js (v18+) with TypeScript  
- Vite build tool  
- React Router v6+  
- Tailwind CSS (using OKLCH color space and dark mode)  
- Shadcn/UI components  
- Lucide React icons  
- Recharts for data visualization  
- Mock Service Worker (MSW) for API mocking  
- Custom React Context for theme management  
- Utilities: `clsx`, `tailwind-merge`  
- ESLint and Prettier for linting and formatting  

---

## Project Structure

```

ENTNT-main/
├── node_modules/
├── public/
│   ├── logo.svg
│   └── mockServiceWorker.js
└── src/
├── assets/
├── components/
│   ├── assessments/
│   ├── candidates/
│   ├── jobs/
│   ├── layout/
│   └── ui/
├── hooks/
├── lib/
├── pages/
│   ├── asssessments/
│   │   ├── builder/
│   │   └── take/
│   ├── candidates/
│   │   └── details/
│   └── jobs/
│       └── details/
└── styles/

````

---

##Setup Instructions

### Prerequisites

- Node.js v18+  
- npm v9+  

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd ENTNT-main
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables by creating a `.env` file in the root directory:

   ```
   VITE_API_URL=http://localhost:5173
   ```

4. Initialize Mock Service Worker:

   ```bash
   npx msw init public/ --save
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Access the app at [http://localhost:5173](http://localhost:5173).

### Available Scripts

* `npm run dev` — Start development server
* `npm run build` — Build production version
* `npm run preview` — Preview production build locally
* `npm run lint` — Run ESLint
* `npm run format` — Run Prettier

---

## Architecture Overview

* React + TypeScript with component-based structure.
* Client-side routing with React Router covering `/`, `/jobs`, `/candidates`, `/assessments`, and `/analytics`.
* Custom `ThemeProvider` React context controls light/dark mode persisted in `localStorage`.
* UI built with Shadcn/UI and styled by Tailwind CSS with OKLCH colors.
* Interactive charts powered by Recharts.
* Mock Service Worker (MSW) simulates backend API with realistic delays and error handling.
* Local computations for analytics metrics.

---

## Technical Decisions

* Vite preferred over CRA for improved performance and simplicity.
* Tailwind CSS with OKLCH color system chosen for better accessibility.
* Custom theming without dependency on Next.js or other frameworks.
* MSW enables fast frontend development independent of backend readiness.
* Recharts provides theme-aware and performant charts.
* Client-side CSV export implemented using the Blob API.
* Shadcn/UI selected for accessible and customizable components.

---

## Known Issues

* Tailwind CSS resolution errors may occur; resolving requires clearing cache and reinstalling dependencies.
* Kanban drag-and-drop UI exists but lacks full state synchronization with mock data.
* Analytics rely on static mock data; real backend integration pending.

---

## Planned Enhancements

* Backend integration (e.g., Node.js with Express) for persistent storage.
* Dynamic linking between jobs, candidates, and assessments for real-time analytics.
* Toast notifications using libraries like `react-toastify`.
* Accessibility improvements including ARIA and Lighthouse optimizations.
* Server-side pagination for large datasets.

---

## Contributing Guidelines

Contributions are welcome! Please follow these steps:

1. Fork the repository.

2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Commit your changes with clear messages:

   ```bash
   git commit -m "Add feature: description"
   ```

4. Push your branch:

   ```bash
   git push origin feature/your-feature
   ```

5. Open a Pull Request for review.

