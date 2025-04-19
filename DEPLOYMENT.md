# Deploying to GitHub Pages

Follow these steps to deploy the RankPro SEO dashboard to GitHub Pages:

## 1. Set up a GitHub repository

If you don't already have a repository, create one on GitHub and push the code.

## 2. Build the Vite application

Run the build command to create a production build in the "dist" folder:

```bash
npm run build
```

## 3. Configure deployment settings

Create or modify `vite.config.ts` to include the base URL for your GitHub Pages site:

```ts
// Add this to your vite.config.ts
export default defineConfig({
  // ... other settings
  base: '/', // Change to '/repo-name/' if not using a custom domain
})
```

## 4. Configure GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

Create a GitHub Actions workflow file at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Set up Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

### Option 2: Manual Deployment

1. Add the `.nojekyll` file to the `dist` folder after build
2. Deploy the contents of the `dist` folder to the `gh-pages` branch

## 5. Set up custom domain (Optional)

1. Purchase your domain (dashboard.alassiri.nl)
2. In your GitHub repository settings, navigate to Pages
3. Enter your custom domain: dashboard.alassiri.nl
4. Configure your DNS with your domain provider:
   - Type: CNAME
   - Host: dashboard
   - Value: yourusername.github.io
   - TTL: Auto/3600

5. Create a `CNAME` file in the `public` folder with your domain:
   ```
   dashboard.alassiri.nl
   ```

## 6. Verify deployment

Once deployment is complete, visit your GitHub Pages URL or custom domain to verify everything is working correctly.