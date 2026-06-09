const PaymentMethods = ({
  paymentMethod,
  setPaymentMethod,
}) => {
  return (
    <div className="bg-white border rounded-xl p-5">
      <h3 className="font-semibold mb-4">
        Payment Method
      </h3>

      <div className="space-y-3">
        <label className="flex items-center gap-3">
          <input
            type="radio"
            value="cash"
            checked={paymentMethod === "cash"}
            onChange={(e) =>
              setPaymentMethod(e.target.value)
            }
          />
          Cash
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            value="upi"
            checked={paymentMethod === "upi"}
            onChange={(e) =>
              setPaymentMethod(e.target.value)
            }
          />
          UPI
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            value="card"
            checked={paymentMethod === "card"}
            onChange={(e) =>
              setPaymentMethod(e.target.value)
            }
          />
          Card
        </label>
      </div>
    </div>
  );
};

export default PaymentMethods;