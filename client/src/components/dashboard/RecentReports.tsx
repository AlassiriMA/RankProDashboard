import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart2, TrendingUp, Activity } from "lucide-react";

export default function RecentReports() {
  const reports = [
    {
      id: 1,
      title: "Content Performance",
      description: "Analysis of top performing content and keyword opportunities",
      date: "2 days ago",
      icon: <BarChart2 className="h-8 w-8 text-blue-500" />
    },
    {
      id: 2,
      title: "Competitor Analysis",
      description: "Comparison with top 3 competitors in your industry",
      date: "1 week ago",
      icon: <TrendingUp className="h-8 w-8 text-indigo-500" />
    },
    {
      id: 3,
      title: "Technical SEO Audit",
      description: "Complete analysis of technical SEO issues and recommendations",
      date: "2 weeks ago",
      icon: <Activity className="h-8 w-8 text-green-500" />
    }
  ];

  return (
    <Card className="mt-6 bg-white dark:bg-gray-800 shadow rounded-lg transition-all duration-200">
      <CardHeader className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0 pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="text-lg font-medium text-gray-900 dark:text-white">Recent Reports</CardTitle>
        <Button variant="link" className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 p-0 transition-colors duration-200">
          Generate New Report
        </Button>
      </CardHeader>
      <CardContent className="p-4 sm:p-5 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reports.map((report, index) => (
            <div 
              key={report.id} 
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 hover:shadow-md animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3 transition-transform duration-200 hover:scale-110">
                  {report.icon}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white transition-colors duration-200">{report.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Generated {report.date}</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">{report.description}</p>
              <div className="mt-3">
                <Button 
                  variant="link" 
                  className="text-xs font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 p-0 transition-colors duration-200 flex items-center group"
                >
                  <span>View Report</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-3 w-3 ml-1 transition-transform duration-200 transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
