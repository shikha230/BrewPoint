const UpiPayment = () => {
  return (
    <div className="bg-white border rounded-xl p-5">
      <h3 className="font-semibold mb-3">
        UPI Payment
      </h3>

      <p className="text-gray-500">
        Customer has paid via UPI.
      </p>

      <div className="mt-4 text-green-600 font-medium">
        ✓ Payment Received
      </div>
    </div>
  );
};

export default UpiPayment;