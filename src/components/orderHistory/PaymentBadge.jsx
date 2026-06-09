const PaymentBadge = ({ type }) => {
  const styles = {
    Cash: "bg-green-100 text-green-700",
    UPI: "bg-blue-100 text-blue-700",
    Card: "bg-purple-100 text-purple-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${styles[type]}`}
    >
      {type}
    </span>
  );
};

export default PaymentBadge;