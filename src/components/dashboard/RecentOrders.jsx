const orders = [
  { id: "#1042", item: "Caramel Latte, Blueberry Muffin", time: "10:45 AM", total: "$12.50", status: "Completed" },
  { id: "#1041", item: "Espresso x 2, Croissant", time: "10:31 AM", total: "$9.00", status: "Completed" },
  { id: "#1040", item: "Iced Americano, Banana Bread", time: "10:18 AM", total: "$10.75", status: "Pending" },
  { id: "#1039", item: "Flat White, Chocolate Cake", time: "09:55 AM", total: "$14.00", status: "Completed" },
  { id: "#1038", item: "Green Tea Latte", time: "09:40 AM", total: "$6.50", status: "Cancelled" },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Completed": return "bg-blue-100 text-blue-600";
    case "Pending": return "bg-yellow-100 text-yellow-600";
    case "Cancelled": return "bg-red-100 text-red-600";
    default: return "";
  }
};

const RecentOrders = () => {
  return (
    <div className="bg-white rounded-xl border p-5">
      <div className="flex justify-between mb-5">
        <h3 className="font-semibold text-gray-800">Recent Orders</h3>
        <button className="text-blue-600 text-sm">View All</button>
      </div>

      {/* Desktop: normal table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-xs border-b">
              <th className="text-left pb-3">ORDER</th>
              <th className="text-left pb-3">TIME</th>
              <th className="text-left pb-3">TOTAL</th>
              <th className="text-left pb-3">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b last:border-none">
                <td className="py-4">
                  <div className="font-semibold text-sm">{order.id}</div>
                  <div className="text-xs text-gray-500">{order.item}</div>
                </td>
                <td className="text-sm text-gray-600">{order.time}</td>
                <td className="font-semibold">{order.total}</td>
                <td>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: card list */}
      <div className="sm:hidden space-y-3">
        {orders.map((order) => (
          <div key={order.id} className="border rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-sm">{order.id}</span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                {order.status}
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-2">{order.item}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">{order.time}</span>
              <span className="text-sm font-semibold text-gray-800">{order.total}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default RecentOrders;