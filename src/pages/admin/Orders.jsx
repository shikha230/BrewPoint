import OrdersTable from "../../components/orders/OrdersTable";
import OrderFilters from "../../components/orders/OrderFilters";
import Pagination from "../../components/orders/Pagination";
import { ordersData } from "../../data/ordersData";

const Orders = () => {
  return (
    <div>

      {/* Filters */}
      <OrderFilters />

      {/* Table */}
      <OrdersTable data={ordersData} />

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default Orders;