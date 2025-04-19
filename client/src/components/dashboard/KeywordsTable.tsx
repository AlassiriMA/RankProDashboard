import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function KeywordsTable() {
  const keywords = [
    {
      id: 1,
      keyword: "seo tools comparison",
      position: 3,
      previous: 5,
      change: 2,
      trend: "up",
      volume: 2400,
      difficulty: 65
    },
    {
      id: 2,
      keyword: "best keyword research tool",
      position: 8,
      previous: 6,
      change: 2,
      trend: "down",
      volume: 5800,
      difficulty: 78
    },
    {
      id: 3,
      keyword: "how to improve site seo",
      position: 4,
      previous: 9,
      change: 5,
      trend: "up",
      volume: 3200,
      difficulty: 45
    },
    {
      id: 4,
      keyword: "backlink analysis",
      position: 12,
      previous: 12,
      change: 0,
      trend: "neutral",
      volume: 1900,
      difficulty: 38
    }
  ];

  return (
    <Card className="mt-6 bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
      <CardHeader className="p-5 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between space-y-0 pb-5">
        <CardTitle className="text-lg font-medium text-gray-900 dark:text-white">Top Keywords</CardTitle>
        <Button variant="link" className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 p-0">
          View All Keywords
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Keyword
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Position
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Previous
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Search Volume
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Difficulty
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {keywords.map((keyword) => (
                <tr key={keyword.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {keyword.keyword}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    <span className={`flex items-center ${
                      keyword.trend === 'up'
                        ? 'text-green-600 dark:text-green-400'
                        : keyword.trend === 'down'
                          ? 'text-red-600 dark:text-red-400'
                          : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      <span className="font-medium">{keyword.position}</span>
                      {keyword.trend === 'up' && (
                        <ArrowUp className="h-4 w-4 ml-1" />
                      )}
                      {keyword.trend === 'down' && (
                        <ArrowDown className="h-4 w-4 ml-1" />
                      )}
                      {keyword.trend === 'neutral' && (
                        <span className="inline-block w-4 h-4 ml-1">―</span>
                      )}
                      <span className="text-xs ml-1">{keyword.change}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {keyword.previous}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {keyword.volume.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className={`h-2.5 rounded-full ${
                          keyword.difficulty > 70 
                            ? 'bg-red-600' 
                            : keyword.difficulty > 50 
                              ? 'bg-blue-600' 
                              : 'bg-green-500'
                        }`} 
                        style={{ width: `${keyword.difficulty}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{keyword.difficulty}/100</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
