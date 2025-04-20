# RankPro SEO Dashboard

A modern, professional SEO SaaS dashboard UI with mock data, light/dark mode, and responsive design.

![RankPro Dashboard Screenshot](public/static/assets/screenshot.png)

## Overview

This project is a frontend UI demonstration of an SEO analytics dashboard called "RankPro". It showcases a modern design with the following features:

- Responsive layout that works on mobile, tablet, and desktop
- Light and dark mode support
- Mock data visualization for SEO metrics
- Interactive components following best dashboard UX practices

## Technology Stack

- React.js
- Tailwind CSS
- ShadcN UI components
- Chart.js for data visualization
- Vite for development

## Local Development

To run this project locally:

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser and navigate to the URL shown in your terminal (typically http://localhost:5000)

## Deployment

This project includes two deployment options:

### Option 1: GitHub Pages (Static Build)

This project is set up to deploy to GitHub Pages with a custom domain. The static version lives at [dashboard.alassiri.nl](https://dashboard.alassiri.nl).

To deploy:

1. Fork this repository
2. Enable GitHub Pages in your repository settings
3. The included GitHub Actions workflow will automatically build and deploy the site

The deployment uses the static build script that creates a version without React dependencies, making it perfect for GitHub Pages hosting.

### Option 2: Direct React Build

For a full React deployment:

1. Build the project:
   ```
   npm run build
   ```
2. Deploy the contents of the `dist` directory to your web hosting provider

## GitHub Pages Compatibility

The project includes a custom build script (`build-static.js`) that creates a GitHub Pages compatible version of the dashboard without Replit dependencies. This static version uses:

- Pure HTML, CSS, and vanilla JavaScript
- No React dependencies
- Prefabricated static assets

## License

This project is available as a portfolio demonstration.

## Contact

For questions or feedback, please reach out to the repository owner.