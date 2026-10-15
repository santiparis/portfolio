# Santiago Paris Puebla | Portfolio

Personal portfolio for Santiago Paris Puebla, built as a single-page web application. It presents his professional profile, experience, education, projects, and contact information, with content available in English and Spanish.

## Contents

- **Profile:** introduction and technologies.
- **Experience:** professional background and development work.
- **Education:** academic history and courses.
- **Projects:** descriptions and links to selected projects.
- **Contact:** social links, WhatsApp, and an option to copy the email address.

The interface includes mobile-responsive navigation, a language switcher, a profile photo, and in-page navigation between sections.

## Technologies

- React 19 and JavaScript (ES modules).
- Vite 8 for development and builds.
- React Router for application routing.
- React Icons and `hamburger-react` for icons and the mobile menu.
- CSS for styling and responsive layouts.
- ESLint for static analysis.

## Requirements

- Node.js 20.19 or later, or 22.12 or later.
- npm.

## Installation and development

Clone the repository and navigate to its directory:

```bash
git clone https://github.com/<usuario>/<repositorio>.git
cd <repositorio>
npm ci
npm run dev
```

The development server runs at `http://localhost:3001`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts Vite in development mode. |
| `npm run build` | Creates the production build in `dist/`. |
| `npm run preview` | Serves the `dist/` build locally. |
| `npm run lint` | Runs ESLint on the project. |

## Project structure

```text
public/                 Static assets, profile photo, and favicon
src/
	components/navbar/    Main navigation
	layouts/              Shared page layout
	pages/home/           Portfolio sections and content
	App.jsx               Application routes
	LanguageContext.jsx   Selected-language context
	main.jsx              React entry point
index.html              Vite HTML document
vite.config.js          Vite configuration
```

Text, experience and education details, projects, and technologies are defined in `src/pages/home/Home.jsx`. The page styles are in `src/pages/home/Home.css`; navigation is implemented in `src/components/navbar/`.

## Build

```bash
npm run build
npm run preview
```

Vite generates static files in `dist/`, the directory to publish to a static hosting provider.

## Deploying to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the project whenever changes are pushed to the `main` branch. It can also be started manually from the repository's **Actions** tab.

On GitHub, open **Settings → Pages** and select **GitHub Actions** as the publishing source. The workflow publishes the generated contents of `dist/`.

Vite automatically reads the repository name from GitHub Actions to set the base path for project sites. The router and public asset paths are adjusted accordingly. For automatic deployment to work, the repository must use the `main` branch, or the branch configured in the workflow must be updated.
