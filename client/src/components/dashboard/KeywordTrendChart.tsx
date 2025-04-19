import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/hooks/use-theme";

// Type for Chart.js
declare global {
  interface Window {
    Chart: any;
  }
}

export default function KeywordTrendChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const [chartInstance, setChartInstance] = useState<any>(null);
  const { theme } = useTheme();
  const [period, setPeriod] = useState<'7d' | '30d' | '90d'>('7d');

  // Chart data for different periods
  const chartData = {
    '7d': {
      labels: ['May 1', 'May 8', 'May 15', 'May 22', 'May 29', 'Jun 5', 'Jun 12'],
      data: [12, 10, 8, 9, 6, 5, 3]
    },
    '30d': {
      labels: ['Apr 15', 'Apr 22', 'Apr 29', 'May 6', 'May 13', 'May 20', 'May 27', 'Jun 3', 'Jun 10'],
      data: [15, 14, 13, 11, 10, 9, 7, 6, 4]
    },
    '90d': {
      labels: ['Mar', 'Apr', 'May', 'Jun'],
      data: [18, 15, 10, 5]
    }
  };

  useEffect(() => {
    // Dynamic import of Chart.js
    const loadChart = async () => {
      if (!chartRef.current) return;
      
      const ctx = chartRef.current.getContext('2d');
      if (!ctx) return;
      
      // Import chart.js dynamically
      if (!window.Chart) {
        const ChartJS = await import('chart.js/auto');
        window.Chart = ChartJS;
      }
      
      // Clean up any existing chart
      if (chartInstance) {
        chartInstance.destroy();
      }

      // Create gradient
      const gradientFill = ctx.createLinearGradient(0, 0, 0, 300);
      gradientFill.addColorStop(0, 'rgba(59, 130, 246, 0.2)');
      gradientFill.addColorStop(1, 'rgba(59, 130, 246, 0)');

      // Create chart
      const newChartInstance = new window.Chart(ctx, {
        type: 'line',
        data: {
          labels: chartData[period].labels,
          datasets: [{
            label: 'Average Position',
            data: chartData[period].data,
            borderColor: '#3b82f6',
            backgroundColor: gradientFill,
            tension: 0.4,
            borderWidth: 2,
            pointBackgroundColor: '#3b82f6',
            pointRadius: 4,
            pointHoverRadius: 6,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              reverse: true,
              min: 1,
              max: 20,
              ticks: {
                stepSize: 2,
                color: theme === 'dark' ? '#9ca3af' : '#6b7280'
              },
              grid: {
                color: theme === 'dark' ? 'rgba(75, 85, 99, 0.2)' : 'rgba(209, 213, 219, 0.2)'
              }
            },
            x: {
              grid: {
                display: false
              },
              ticks: {
                color: theme === 'dark' ? '#9ca3af' : '#6b7280'
              }
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: theme === 'dark' ? '#374151' : '#ffffff',
              titleColor: theme === 'dark' ? '#f9fafb' : '#111827',
              bodyColor: theme === 'dark' ? '#d1d5db' : '#4b5563',
              borderColor: theme === 'dark' ? '#4b5563' : '#e5e7eb',
              borderWidth: 1,
              padding: 12,
              displayColors: false,
              callbacks: {
                title: function(tooltipItems: any) {
                  return `Position: ${tooltipItems[0].formattedValue}`;
                },
                label: function(context: any) {
                  return `Date: ${context.label}`;
                }
              }
            }
          }
        }
      });
      
      setChartInstance(newChartInstance);
    };

    loadChart();
    
    // Cleanup on unmount
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [period, theme]);

  return (
    <Card className="lg:col-span-2 bg-white dark:bg-gray-800 shadow">
      <CardHeader className="p-5 border-b border-gray-200 dark:border-gray-700 flex flex-wrap items-center justify-between space-y-0 pb-5">
        <CardTitle className="text-lg font-medium text-gray-900 dark:text-white">Keyword Rank Trend</CardTitle>
        <div className="flex space-x-2 mt-2 sm:mt-0">
          <Button 
            variant={period === '7d' ? 'secondary' : 'ghost'} 
            className={period === '7d' ? "px-3 py-1.5 text-xs font-medium rounded-md bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300" : "px-3 py-1.5 text-xs font-medium rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"}
            onClick={() => setPeriod('7d')}
            size="sm"
          >
            7 Days
          </Button>
          <Button 
            variant={period === '30d' ? 'secondary' : 'ghost'} 
            className={period === '30d' ? "px-3 py-1.5 text-xs font-medium rounded-md bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300" : "px-3 py-1.5 text-xs font-medium rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"}
            onClick={() => setPeriod('30d')}
            size="sm"
          >
            30 Days
          </Button>
          <Button 
            variant={period === '90d' ? 'secondary' : 'ghost'} 
            className={period === '90d' ? "px-3 py-1.5 text-xs font-medium rounded-md bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300" : "px-3 py-1.5 text-xs font-medium rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"}
            onClick={() => setPeriod('90d')}
            size="sm"
          >
            90 Days
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-5">
        <div className="chart-container h-[300px] relative">
          <canvas ref={chartRef}></canvas>
        </div>
      </CardContent>
    </Card>
  );
}
