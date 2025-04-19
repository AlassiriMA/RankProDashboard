export default function WelcomeSection() {
  return (
    <div className="mb-6 animate-fadeIn">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200">
          Welcome back, <span className="text-blue-600 dark:text-blue-400">MAK</span>!
        </h1>
        <div className="mt-3 sm:mt-0">
          <div className="inline-flex items-center rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 transition-all duration-200 hover:shadow">
            <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse-subtle"></span>
            <span>Last scan: Today, 09:45 AM</span>
          </div>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">
        Here's what's happening with <span className="font-medium">mywebsite.com</span>
      </p>
    </div>
  );
}
