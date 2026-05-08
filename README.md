# Markdown Previewer

A lightweight React app for writing Markdown and previewing the rendered HTML in real time.

## Features

- Live Markdown editor and preview panes
- Automatic HTML sanitization with DOMPurify
- GitHub-style line breaks through `marked`
- Character counter for the current Markdown content
- Copy-to-clipboard and reset actions
- Responsive layout for desktop and mobile screens

## Tech Stack

- React
- Vite
- marked
- DOMPurify
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Available Scripts

```bash
npm run dev
```

Runs the app in development mode.

```bash
npm run build
```

Builds the app for production.

```bash
npm run preview
```

Serves the production build locally.

```bash
npm run lint
```

Runs ESLint checks.

## Project Structure

```text
src/
  App.jsx
  App.css
  main.jsx
  index.css
  components/
    MarkdownEditor.jsx
    MarkdownPreview.jsx
```
