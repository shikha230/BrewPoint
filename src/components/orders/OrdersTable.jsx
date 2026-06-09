import OrderRow from "./OrderRow";

const OrdersTable = ({ data }) => {
  return (
    <div className="bg-white border rounded-2xl p-4">
      <table className="w-full">
        <thead>
          <tr className="text-left text-xs text-gray-400 border-b">
            <th className="py-2">ORDER</th>
            <th>ITEMS</th>
            <th>TYPE / TABLE</th>
            <th>TIME</th>
            <th>TOTAL</th>
            <th>STATUS</th>
          </tr>
        </thead>

        <tbody>
          {data.map((order) => (
            <OrderRow key={order.id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;