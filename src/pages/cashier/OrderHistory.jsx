import HistoryFilters from "../../components/orderHistory/HistoryFilters";
import HistoryPagination from "../../components/orderHistory/HistoryPagination";
import HistoryTable from "../../components/orderHistory/HistoryTable";

import { orderHistoryData } from "../../data/orderHistoryData";

const OrderHistory = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Order History
        </h1>

        <p className="text-gray-500">
          View all completed orders and invoices.
        </p>
      </div>

      <HistoryFilters />

      <HistoryTable data={orderHistoryData} />

      <HistoryPagination />
    </div>
  );
};

export default OrderHistory;