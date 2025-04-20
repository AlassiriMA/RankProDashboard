// This script adds interactive functionality to the SEO Dashboard
document.addEventListener('DOMContentLoaded', function() {
  // Theme handling
  setupThemeSwitching();
  
  // Mobile menu toggle
  setupMobileMenu();
  
  // Any mock data we need to simulate
  const mockData = {
    keywordTrends: generateMockTrendData(),
  };
  
  // Initialize mock chart
  initializeMockChart(mockData.keywordTrends);
});

// Sets up theme switching functionality
function setupThemeSwitching() {
  const themeToggle = document.getElementById('theme-toggle');
  
  if (themeToggle) {
    // Set initial theme based on user preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    } else if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
    
    // Handle toggle click
    themeToggle.addEventListener('click', function() {
      document.documentElement.classList.toggle('dark');
      
      // Save preference
      if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  }
}

// Sets up mobile menu functionality
function setupMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', function() {
      sidebar.classList.toggle('sidebar-open');
    });
  }
}

// Generates random data for keyword trends
function generateMockTrendData() {
  const keywords = ['seo tools', 'keyword research', 'backlink analyzer', 'rank tracker'];
  const data = [];
  
  for (let i = 0; i < 30; i++) {
    const day = {};
    day.date = new Date(2023, 0, i + 1);
    
    keywords.forEach(keyword => {
      // Generate a random position between 1-20 with some consistency
      const basePosition = Math.floor(Math.random() * 10) + 1;
      const dailyVariation = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
      day[keyword] = Math.max(1, basePosition + dailyVariation);
    });
    
    data.push(day);
  }
  
  return data;
}

// Simulates initializing a chart (in a real app, this would use Chart.js)
function initializeMockChart(data) {
  const chartContainer = document.querySelector('.chart-container');
  
  if (chartContainer) {
    // This is a placeholder for actual chart rendering
    chartContainer.innerHTML = `
      <div class="chart-placeholder">
        <svg width="100%" height="200" viewBox="0 0 800 200">
          <!-- Mock chart lines -->
          <path d="M0,150 Q200,100 400,120 T800,50" stroke="#3b82f6" fill="none" stroke-width="3" />
          <path d="M0,180 Q200,160 400,140 T800,100" stroke="#8b5cf6" fill="none" stroke-width="3" />
          <path d="M0,120 Q200,130 400,110 T800,150" stroke="#10b981" fill="none" stroke-width="3" />
          
          <!-- X-axis -->
          <line x1="0" y1="190" x2="800" y2="190" stroke="#9ca3af" stroke-width="1" />
          
          <!-- Y-axis -->
          <line x1="0" y1="10" x2="0" y2="190" stroke="#9ca3af" stroke-width="1" />
        </svg>
        <div class="chart-legend flex justify-center mt-4">
          <div class="flex items-center mr-4">
            <span class="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
            <span class="text-xs text-gray-500 dark:text-gray-400">seo tools</span>
          </div>
          <div class="flex items-center mr-4">
            <span class="inline-block w-3 h-3 rounded-full bg-purple-500 mr-1"></span>
            <span class="text-xs text-gray-500 dark:text-gray-400">keyword research</span>
          </div>
          <div class="flex items-center">
            <span class="inline-block w-3 h-3 rounded-full bg-green-500 mr-1"></span>
            <span class="text-xs text-gray-500 dark:text-gray-400">backlink analyzer</span>
          </div>
        </div>
      </div>
    `;
  }
}