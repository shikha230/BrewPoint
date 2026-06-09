import {
  FiShoppingBag,
  FiDollarSign,
  FiPlusCircle,
  FiFileText,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import StatsCard from "../../components/dashboard/StatsCard";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <StatsCard
          title="Today's Orders"
          value="45"
          subtitle="Orders processed today"
          icon={<FiShoppingBag />}
        />

        <StatsCard
          title="Today's Revenue"
          value="₹18,500"
          subtitle="Revenue generated today"
          icon={<FiDollarSign />}
        />

        <StatsCard
          title="Create New Order"
          value="+"
          subtitle="Start a new order"
          icon={<FiPlusCircle />}
        />

        <StatsCard
          title="Recent Bills"
          value="12"
          subtitle="Bills generated today"
          icon={<FiFileText />}
        />
      </div>

      {/* Quick Action */}
      <div className="bg-white rounded-xl border p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              Quick Actions
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Create a new order for customers
            </p>
          </div>

          <button
            onClick={() =>
              navigate("/cashier/create-order")
            }
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
          >
            Create New Order
          </button>
        </div>
      </div>

      {/* Recent Bills */}
      <div className="bg-white rounded-xl border p-6">
        <h3 className="text-lg font-semibold mb-4">
          Recent Bills
        </h3>

        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="py-3">Invoice No</th>
              <th className="py-3">Customer</th>
              <th className="py-3">Amount</th>
              <th className="py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-3">#1001</td>
              <td className="py-3">Walk In</td>
              <td className="py-3">₹475</td>
              <td className="py-3 text-green-600">
                Paid
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3">#1002</td>
              <td className="py-3">Walk In</td>
              <td className="py-3">₹620</td>
              <td className="py-3 text-green-600">
                Paid
              </td>
            </tr>

            <tr>
              <td className="py-3">#1003</td>
              <td className="py-3">Walk In</td>
              <td className="py-3">₹350</td>
              <td className="py-3 text-green-600">
                Paid
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;