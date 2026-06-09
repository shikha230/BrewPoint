import StatusBadge from "./StatusBadge";

const OrderRow = ({ order }) => {
  return (
    <tr className="border-b last:border-none">
      <td className="py-3 text-sm text-gray-700">{order.id}</td>

      <td className="py-3">
        <p className="text-sm font-medium text-gray-800">
          {order.items}
        </p>
      </td>

      <td className="py-3 text-sm text-gray-500">
        {order.type}
      </td>

      <td className="py-3 text-sm text-gray-500">
        {order.time}
      </td>

      <td className="py-3 text-sm font-medium">
        {order.total}
      </td>

      <td className="py-3">
        <StatusBadge status={order.status} />
      </td>
    </tr>
  );
};

export default OrderRow;