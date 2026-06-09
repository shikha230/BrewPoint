const StatusBadge = ({ status }) => {
  const styles = {
    Completed: "bg-blue-100 text-blue-600",
    Pending: "bg-yellow-100 text-yellow-600",
    Cancelled: "bg-gray-200 text-gray-600",
  };

  return (
    <span
      className={`text-xs px-3 py-1 rounded-full font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;