import { FiCalendar, FiPlus, FiMenu } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ onMenuClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getTitle = () => {
    if (location.pathname.includes("/admin/orders")) return "Orders";
    if (location.pathname.includes("/admin/menu")) return "Menu Management";
    if (location.pathname.includes("/admin/reports")) return "Reports";
    if (location.pathname.includes("/admin/settings")) return "Settings";
    if (location.pathname.includes("/admin/users")) return "Staff Management";
    if (location.pathname.includes("/cashier/create-order")) return "Create Order";
    if (location.pathname.includes("/cashier/payment")) return "Billing";
    if (location.pathname.includes("/cashier/order-history")) return "Order History";
    return "Dashboard";
  };

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleNewOrder = () => {
    if (location.pathname.includes("/cashier")) {
      navigate("/cashier/create-order");
    } else {
      navigate("/admin/orders");
    }
  };

  return (
    <div className="bg-white border-b px-4 sm:px-6 py-4 flex items-center justify-between gap-3">

      {/* LEFT */}
      <div className="flex items-center gap-3 min-w-0">
        {/* Hamburger — mobile only */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 flex-shrink-0"
        >
          <FiMenu size={20} />
        </button>

        <div className="min-w-0">
          <h2 className="text-xl font-semibold text-gray-800 truncate">
            {getTitle()}
          </h2>
          {/* Date — hidden on small screens */}
          <p className="text-sm text-gray-500 hidden sm:block">
            {today}
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        {/* Today button — hidden on mobile */}
        <button className="hidden sm:flex items-center gap-2 border px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
          <FiCalendar />
          Today
        </button>

        {/* New Order — icon only on mobile, full on desktop */}
        <button
          onClick={handleNewOrder}
          className="flex items-center gap-2 bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
        >
          <FiPlus />
          <span className="hidden sm:inline">New Order</span>
        </button>
      </div>

    </div>
  );
};

export default Header;