import { Card } from "@/components/ui/card";
import { TrendingUp, Shield, Link, FileText } from "lucide-react";

export default function KpiCards() {
  const cards = [
    {
      title: "Site Health",
      icon: <Shield className="h-6 w-6 text-blue-600 dark:text-blue-300" />,
      iconBg: "bg-blue-100 dark:bg-blue-900",
      value: "87/100",
      detail: "14 issues found",
      change: "+3%",
      trend: "up"
    },
    {
      title: "Top Keywords",
      icon: <TrendingUp className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />,
      iconBg: "bg-indigo-100 dark:bg-indigo-900",
      value: "103",
      detail: "28 in top 10",
      change: "+12%",
      trend: "up"
    },
    {
      title: "Backlinks",
      icon: <Link className="h-6 w-6 text-purple-600 dark:text-purple-300" />,
      iconBg: "bg-purple-100 dark:bg-purple-900",
      value: "1,429",
      detail: "89 new this month",
      change: "+7%",
      trend: "up"
    },
    {
      title: "Pages Indexed",
      icon: <FileText className="h-6 w-6 text-green-600 dark:text-green-300" />,
      iconBg: "bg-green-100 dark:bg-green-900",
      value: "256",
      detail: "Same as last week",
      change: "0%",
      trend: "neutral"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {cards.map((card, index) => (
        <Card key={index} className="bg-white dark:bg-gray-800 shadow p-5">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{card.title}</h3>
            <span className={`flex items-center text-sm font-medium ${
              card.trend === 'up' 
                ? 'text-green-600 dark:text-green-400' 
                : card.trend === 'down' 
                  ? 'text-red-600 dark:text-red-400' 
                  : 'text-yellow-600 dark:text-yellow-400'
            }`}>
              {card.trend === 'up' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
              )}
              {card.trend === 'down' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                </svg>
              )}
              {card.trend === 'neutral' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l1 1a1 1 0 010 1.414L10.414 7H14a1 1 0 110 2h-3.586l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3A1 1 0 0110 3z" clipRule="evenodd" />
                </svg>
              )}
              {card.change}
            </span>
          </div>
          <div className="flex items-center">
            <div className={`flex items-center justify-center h-12 w-12 rounded-md ${card.iconBg} mr-4`}>
              {card.icon}
            </div>
            <div>
              <div className="text-2xl font-semibold text-gray-900 dark:text-white">{card.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{card.detail}</div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
