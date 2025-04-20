/**
 * Static Build Script for RankPro Dashboard
 * This script creates a clean static build of the dashboard for GitHub Pages
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const buildDir = 'gh-pages-build';
const publicDir = 'public';
const cssDir = path.join(publicDir, 'static', 'css');
const jsDir = path.join(publicDir, 'static', 'js');
const assetsDir = path.join(publicDir, 'static', 'assets');

// Ensure directories exist
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
}

// Copy file or directory
function copyFileOrDir(src, dest) {
  if (fs.statSync(src).isDirectory()) {
    ensureDir(dest);
    const files = fs.readdirSync(src);
    for (const file of files) {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);
      copyFileOrDir(srcPath, destPath);
    }
  } else {
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${src} -> ${dest}`);
  }
}

// Main build function
async function buildStatic() {
  try {
    console.log('Starting static build process...');
    
    // Create build directory
    ensureDir(buildDir);
    
    // Create necessary subdirectories
    ensureDir(path.join(buildDir, 'static'));
    ensureDir(path.join(buildDir, 'static', 'css'));
    ensureDir(path.join(buildDir, 'static', 'js'));
    ensureDir(path.join(buildDir, 'static', 'assets'));
    
    // Copy static assets
    console.log('Copying static assets...');
    if (fs.existsSync(publicDir)) {
      // Copy HTML files
      const htmlFiles = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));
      for (const file of htmlFiles) {
        const content = fs.readFileSync(path.join(publicDir, file), 'utf8');
        fs.writeFileSync(path.join(buildDir, file), content);
        console.log(`Copied HTML: ${file}`);
      }
      
      // Copy CSS files
      if (fs.existsSync(cssDir)) {
        const cssFiles = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));
        for (const file of cssFiles) {
          copyFileOrDir(
            path.join(cssDir, file), 
            path.join(buildDir, 'static', 'css', file)
          );
        }
      }
      
      // Copy JS files
      if (fs.existsSync(jsDir)) {
        const jsFiles = fs.readdirSync(jsDir).filter(f => f.endsWith('.js'));
        for (const file of jsFiles) {
          copyFileOrDir(
            path.join(jsDir, file), 
            path.join(buildDir, 'static', 'js', file)
          );
        }
      }
      
      // Copy other assets (images, etc.)
      if (fs.existsSync(assetsDir)) {
        copyFileOrDir(assetsDir, path.join(buildDir, 'static', 'assets'));
      }
      
      // Copy favicon and other root files
      const rootFiles = ['favicon.svg', 'favicon.png', 'robots.txt', 'CNAME'];
      for (const file of rootFiles) {
        if (fs.existsSync(path.join(publicDir, file))) {
          fs.copyFileSync(
            path.join(publicDir, file),
            path.join(buildDir, file)
          );
          console.log(`Copied root file: ${file}`);
        }
      }
    }
    
    // Add .nojekyll file (prevents GitHub Pages from using Jekyll)
    fs.writeFileSync(path.join(buildDir, '.nojekyll'), '');
    console.log('Created .nojekyll file');
    
    // Copy _config.yml if it exists
    if (fs.existsSync('_config.yml')) {
      fs.copyFileSync('_config.yml', path.join(buildDir, '_config.yml'));
      console.log('Copied _config.yml');
    }
    
    // Create index.html if it doesn't exist
    if (!fs.existsSync(path.join(buildDir, 'index.html'))) {
      if (fs.existsSync(path.join(buildDir, 'dashboard.html'))) {
        fs.copyFileSync(
          path.join(buildDir, 'dashboard.html'),
          path.join(buildDir, 'index.html')
        );
        console.log('Created index.html from dashboard.html');
      } else {
        console.warn('Warning: No index.html or dashboard.html found!');
      }
    }
    
    console.log(`\nBuild complete! Files are in the '${buildDir}' directory.`);
    console.log('You can now deploy this directory to GitHub Pages.');
    
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

// Run the build
buildStatic();