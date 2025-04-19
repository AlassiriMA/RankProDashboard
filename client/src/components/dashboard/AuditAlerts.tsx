import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, AlertCircle, Clock } from "lucide-react";

export default function AuditAlerts() {
  const alerts = [
    {
      id: 1,
      title: "Broken Links (4)",
      description: "Links on blog pages are returning 404 errors",
      icon: <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-300" />,
      iconBg: "bg-red-100 dark:bg-red-900",
      action: "Fix Now"
    },
    {
      id: 2,
      title: "Missing Meta Descriptions (7)",
      description: "Some pages are missing meta descriptions",
      icon: <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-300" />,
      iconBg: "bg-yellow-100 dark:bg-yellow-900",
      action: "Review"
    },
    {
      id: 3,
      title: "Slow Loading Pages (3)",
      description: "Pages with load time > 3 seconds",
      icon: <Clock className="h-5 w-5 text-orange-600 dark:text-orange-300" />,
      iconBg: "bg-orange-100 dark:bg-orange-900",
      action: "Optimize"
    }
  ];

  return (
    <Card className="bg-white dark:bg-gray-800 rounded-lg shadow">
      <CardHeader className="p-5 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between space-y-0 pb-5">
        <CardTitle className="text-lg font-medium text-gray-900 dark:text-white">Audit Alerts</CardTitle>
        <Button variant="link" className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 p-0">
          View All
        </Button>
      </CardHeader>
      <CardContent className="p-2">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {alerts.map((alert) => (
            <li key={alert.id} className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full ${alert.iconBg}`}>
                    {alert.icon}
                  </span>
                </div>
                <div className="ml-3 w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{alert.title}</p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{alert.description}</p>
                  <div className="mt-2">
                    <Button variant="link" className="text-xs font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 p-0">
                      {alert.action}
                    </Button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
