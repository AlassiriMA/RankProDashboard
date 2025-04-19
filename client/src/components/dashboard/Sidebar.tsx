import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSidebarContext } from "@/contexts/SidebarContext";
import { 
  LayoutDashboard, 
  Shield, 
  TrendingUp, 
  Link, 
  BarChart2, 
  Settings, 
  Plus 
} from "lucide-react";

export default function Sidebar() {
  const { isOpen, closeSidebar } = useSidebarContext();
  
  return (
    <>
      {/* Mobile sidebar backdrop */}
      <div 
        className={`fixed inset-0 bg-gray-900/50 z-20 lg:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out z-30`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-5 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center mr-3">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">RankPro</h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 pt-5 pb-4 overflow-y-auto scrollbar-hide">
            <ul className="space-y-1 px-3">
              <li>
                <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                  <LayoutDashboard className="h-5 w-5 mr-3" />
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                  <Shield className="h-5 w-5 mr-3" />
                  Site Audits
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                  <TrendingUp className="h-5 w-5 mr-3" />
                  Keyword Rankings
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                  <Link className="h-5 w-5 mr-3" />
                  Backlinks
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                  <BarChart2 className="h-5 w-5 mr-3" />
                  Reports
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                  <Settings className="h-5 w-5 mr-3" />
                  Settings
                </a>
              </li>
            </ul>
          </nav>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <Select defaultValue="mywebsite.com">
                <SelectTrigger className="text-sm rounded-md bg-gray-100 dark:bg-gray-700 border-none py-1.5 pl-3 pr-2 text-gray-900 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 w-44">
                  <SelectValue placeholder="Select website" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mywebsite.com">mywebsite.com</SelectItem>
                  <SelectItem value="clientsite.net">clientsite.net</SelectItem>
                  <SelectItem value="shopexample.com">shopexample.com</SelectItem>
                </SelectContent>
              </Select>
              <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <Plus className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
