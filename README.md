# Calea Bacolod Landing Page (Static)

This project is a static, single-file landing page for **Calea Pastries & Coffee** in Bacolod City.

## Overview

The main page is [`index.html`](./index.html). It includes:
- Full page HTML structure
- Embedded CSS styling (inside a `<style>` block)
- Embedded JavaScript interactions (inside a `<script>` block)
- A local favicon reference (`favicon.ico`)

No build step is required to run the page.

## Main File

- `index.html` - Primary landing page and source of layout, styles, and behavior
- `favicon.ico` - Browser tab icon used by `index.html`
- `calea-bacolod.html` - Optional/legacy reference file

## Page Sections

`index.html` includes these major sections:
- Fixed top navigation with responsive mobile menu
- Hero area
- About strip
- Story section
- Signature menu cards
- Experience/gallery grid
- Reviews
- Visit/location block with stylized map
- Footer

## Interactions

JavaScript in `index.html` provides:
- Smooth scrolling to anchor links with fixed-nav offset
- Intersection Observer based fade-up reveal animations
- Mobile navigation toggle behavior

## How To Run

1. Open `index.html` directly in a browser, or
2. Serve the folder with any local static server.

Example (if Node.js is installed):

```bash
npx serve .
```

Then open the local URL shown in your terminal.

## Customization Notes

- Update text/content directly in `index.html`.
- Update design tokens in the `:root` CSS variables.
- Update interactions in the bottom `<script>` block.
- Replace `favicon.ico` to change the tab icon.

## License

Use for personal, educational, or portfolio projects unless you add a different license.
