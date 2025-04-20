/**
 * RankPro SEO Dashboard script
 * Simple static script for the SEO dashboard without Replit dependencies
 */
 
document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle functionality
  initThemeToggle();
  
  // Mobile sidebar toggle
  initMobileSidebar();
});

/**
 * Initialize theme toggle functionality
 */
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;
  
  // Check for user preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  
  // Set initial theme
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
  
  // Toggle theme on click
  themeToggle.addEventListener('click', function() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

/**
 * Initialize mobile sidebar toggle functionality
 */
function initMobileSidebar() {
  const sidebarToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  
  if (!sidebarToggle || !sidebar) return;
  
  sidebarToggle.addEventListener('click', function() {
    sidebar.classList.toggle('show-mobile');
  });
  
  // Close sidebar when clicking outside
  document.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
      sidebar.classList.remove('show-mobile');
    }
  });
}