import {
  FiGrid,
  FiShoppingBag,
  FiCoffee,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiLogOut,
  FiUser,
  FiShoppingCart,
  FiCreditCard,
  FiClock,
  FiX,
} from "react-icons/fi";

import { NavLink, useNavigate } from "react-router-dom";
import { LuCoffee } from "react-icons/lu";
import { logout } from "../../utils/auth";

const adminMenu = [
  { name: "Dashboard", path: "/admin/dashboard", icon: <FiGrid /> },
  { name: "Orders", path: "/admin/orders", icon: <FiShoppingBag /> },
  { name: "Menu", path: "/admin/menu", icon: <FiCoffee /> },
  { name: "Staff", path: "/admin/users", icon: <FiUsers /> },
  { name: "Reports", path: "/admin/reports", icon: <FiBarChart2 /> },
  { name: "Settings", path: "/admin/settings", icon: <FiSettings /> },
];

const cashierMenu = [
  { name: "Dashboard", path: "/cashier/dashboard", icon: <FiGrid /> },
  { name: "Create Order", path: "/cashier/create-order", icon: <FiShoppingCart /> },
  { name: "Billing", path: "/cashier/payment", icon: <FiCreditCard /> },
  { name: "Order History", path: "/cashier/order-history", icon: <FiClock /> },
];

const Sidebar = ({ role = "admin", onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menuItems = role === "admin" ? adminMenu : cashierMenu;

  return (
    <div className="w-64 h-full bg-white border-r flex flex-col justify-between">

      {/* Top Section */}
      <div>
        {/* Logo row — close button only on mobile */}
        <div className="flex items-center justify-between p-4 mt-2">
          <div className="flex items-center gap-2">
            <div className="w-11 h-11 rounded-2xl bg-blue-500 flex items-center justify-center">
              <LuCoffee className="text-white" size={22} strokeWidth={2.2} />
            </div>
            <h1 className="text-[18px] font-semibold text-black">BrewPoint</h1>
          </div>

          {/* Close button — mobile only */}
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition"
            >
              <FiX size={18} />
            </button>
          )}
        </div>

        {/* Menu */}
        <div className="p-4 mt-5">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium mb-1 transition-all ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-500 hover:bg-gray-100"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <FiUser className="text-gray-400" size={14} />
            </div>
            <div>
              <h4 className="font-medium text-sm text-gray-900">
                {role === "admin" ? "Admin" : "Cashier"}
              </h4>
              <p className="text-xs text-gray-500 truncate max-w-[120px]">
                {role === "admin" ? "admin@brewpoint.com" : "cashier@brewpoint.com"}
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="text-gray-500 hover:text-red-500 transition"
          >
            <FiLogOut size={18} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;