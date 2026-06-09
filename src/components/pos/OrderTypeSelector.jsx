const OrderTypeSelector = ({
  orderType,
  setOrderType,
}) => {
  return (
    <div className="bg-white border rounded-xl p-4">
      <h3 className="font-semibold mb-4">
        Order Type
      </h3>

      <div className="flex gap-3">
        <button
          onClick={() =>
            setOrderType("dine-in")
          }
          className={`flex-1 py-2 rounded-lg border ${
            orderType === "dine-in"
              ? "bg-blue-600 text-white"
              : ""
          }`}
        >
          Dine In
        </button>

        <button
          onClick={() =>
            setOrderType("takeaway")
          }
          className={`flex-1 py-2 rounded-lg border ${
            orderType === "takeaway"
              ? "bg-blue-600 text-white"
              : ""
          }`}
        >
          Takeaway
        </button>
      </div>
    </div>
  );
};

export default OrderTypeSelector;