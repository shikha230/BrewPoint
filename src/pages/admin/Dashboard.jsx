import {
  FiDollarSign,
  FiShoppingBag,
  FiUsers,
} from "react-icons/fi";
import { LuCoffee } from "react-icons/lu";

import StatsCard from "../../components/dashboard/StatsCard";
import RecentOrders from "../../components/dashboard/RecentOrders";
import TopSellingItems from "../../components/dashboard/TopSellingItems";
import QuickActions from "../../components/dashboard/QuickActions";


const Dashboard = () => {
  return (
    <div>
      {/* Stats Section */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <StatsCard
          title="Today's Orders"
          value="84"
          subtitle="Last updated just now"
          change="+12%"
          changeColor="blue"
          icon={<FiShoppingBag size={20} />}
        />

        <StatsCard
          title="Total Revenue"
          value="$1,248"
          subtitle="vs $1,085 yesterday"
          change="+15%"
          changeColor="blue"
          icon={<FiDollarSign size={20} />}
        />

        <StatsCard
          title="Today's Sales"
          value="127 Items"
          subtitle="Across all menu items"
          change="+8%"
          changeColor="blue"
          icon={<LuCoffee  size={20} />}
        />

        <StatsCard
          title="Active Staff"
          value="5"
          subtitle="3 cashiers • 2 kitchen"
          change="On shift"
          changeColor="blue"
          icon={<FiUsers size={20} />}
        />
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-12 gap-6">
        {/* Recent Orders */}
        <div className="col-span-9">
          <RecentOrders />
        </div>

        {/* Right Side Widgets */}
        <div className="col-span-3 space-y-6">
          <TopSellingItems />
          <QuickActions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;