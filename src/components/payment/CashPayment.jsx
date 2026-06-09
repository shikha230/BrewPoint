import useCart from "../../hooks/useCart";

const CashPayment = ({
  amountReceived,
  setAmountReceived,
}) => {
  const { total } = useCart();

  const change =
    Number(amountReceived || 0) - total;

  return (
    <div className="bg-white border rounded-xl p-5">
      <h3 className="font-semibold mb-4">
        Cash Payment
      </h3>

      <input
        type="number"
        placeholder="Enter Amount"
        value={amountReceived}
        onChange={(e) =>
          setAmountReceived(e.target.value)
        }
        className="w-full border rounded-lg px-4 py-3"
      />

      <div className="mt-4">
        <p className="text-gray-500">
          Change
        </p>

        <h3 className="text-2xl font-bold text-green-600">
          ₹
          {change > 0
            ? change.toFixed(2)
            : "0.00"}
        </h3>
      </div>
    </div>
  );
};

export default CashPayment;