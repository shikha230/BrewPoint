import { useState } from "react";

import CategoryList from "../../components/pos/CategoryList";
import ProductGrid from "../../components/pos/ProductGrid";
import Cart from "../../components/pos/Cart";
import OrderTypeSelector from "../../components/pos/OrderTypeSelector";
import TableSelector from "../../components/pos/TableSelector";
import DiscountBox from "../../components/pos/DiscountBox";

const CreateOrder = () => {
  const [orderType, setOrderType] = useState("dine-in");
  const [selectedTable, setSelectedTable] = useState("");

  return (
    <div className="grid grid-cols-12 gap-4 h-[calc(100vh-120px)]">
      {/* Left Section */}
      <div className="col-span-8 flex flex-col gap-4">
        {/* Order Type */}
        <OrderTypeSelector
          orderType={orderType}
          setOrderType={setOrderType}
        />

        {/* Table Selection */}
        {orderType === "dine-in" && (
          <TableSelector
            selectedTable={selectedTable}
            setSelectedTable={setSelectedTable}
          />
        )}

        {/* Categories */}
        <CategoryList />

        {/* Products */}
        <ProductGrid />
      </div>

      {/* Right Section */}
      <div className="col-span-4 flex flex-col gap-4">
        {/* Discount */}
        <DiscountBox />

        {/* Cart */}
        <Cart />
      </div>
    </div>
  );
};

export default CreateOrder;