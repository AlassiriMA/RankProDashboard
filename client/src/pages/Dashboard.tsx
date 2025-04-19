import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import KpiCards from "@/components/dashboard/KpiCards";
import KeywordTrendChart from "@/components/dashboard/KeywordTrendChart";
import AuditAlerts from "@/components/dashboard/AuditAlerts";
import KeywordsTable from "@/components/dashboard/KeywordsTable";
import RecentReports from "@/components/dashboard/RecentReports";
import { useSidebarContext } from "@/contexts/SidebarContext";

export default function Dashboard() {
  const { isOpen } = useSidebarContext();
  
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Mobile sidebar backdrop */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64 transition-all duration-300 ease-in-out">
        <Topbar />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8 animate-fadeIn">
          <WelcomeSection />
          <KpiCards />
          
          {/* Main Dashboard Widgets */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <KeywordTrendChart />
            <AuditAlerts />
          </div>
          
          <KeywordsTable />
          <RecentReports />
        </main>
      </div>
    </div>
  );
}
