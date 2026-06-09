import PaymentBadge from "./PaymentBadge";

const HistoryRow = ({ order }) => {
  return (
    <tr className="border-b">
      <td className="p-4">{order.invoiceNo}</td>

      <td className="p-4">{order.date}</td>

      <td className="p-4">₹{order.amount}</td>

      <td className="p-4">
        <PaymentBadge type={order.paymentType} />
      </td>

      <td className="p-4">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
          {order.status}
        </span>
      </td>

      <td className="p-4">
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-blue-500 text-white rounded">
            View
          </button>

          <button className="px-3 py-1 bg-gray-700 text-white rounded">
            Print
          </button>
        </div>
      </td>
    </tr>
  );
};

export default HistoryRow;