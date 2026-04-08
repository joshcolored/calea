# Calea Bacolod Landing Page

A React + Vite + Tailwind CSS single-page showcase inspired by Calea Pastries & Coffee in Bacolod City.

## Description

This project presents Calea's story, signature menu, guest experience, reviews, and location details in a responsive, animated layout with a mobile hamburger menu and smooth scrolling.

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3

## Features

- Responsive desktop/tablet/mobile layout
- Mobile hamburger navigation
- Smooth anchor scroll with fixed-nav offset
- Scroll reveal (fade-up) animation using Intersection Observer
- Stylized custom map section with Lacson Street and 15th Street details

## Project Structure

```text
.
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── calea-bacolod.html (legacy static file kept as reference)
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Deploy (GitHub Pages Option)

You can deploy the built `dist/` output to GitHub Pages using your preferred workflow (GitHub Actions or manual `dist` publish).

## License

For personal and portfolio use unless you add your own license.
