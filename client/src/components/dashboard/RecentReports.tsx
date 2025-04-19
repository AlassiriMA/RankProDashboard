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
    <Card className="mt-6 bg-white dark:bg-gray-800 shadow rounded-lg">
      <CardHeader className="p-5 flex items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-medium text-gray-900 dark:text-white">Recent Reports</CardTitle>
        <Button variant="link" className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 p-0">
          Generate New Report
        </Button>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reports.map((report) => (
            <div 
              key={report.id} 
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  {report.icon}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">{report.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Generated {report.date}</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">{report.description}</p>
              <div className="mt-3">
                <Button variant="link" className="text-xs font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 p-0">
                  View Report
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
