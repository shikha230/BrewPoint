const InvoiceHeader = () => {
  return (
    <div className="border-b pb-4 mb-6">
      <h1 className="text-3xl font-bold">
        BrewPoint
      </h1>

      <p className="text-gray-500 mt-2">
        Invoice #1001
      </p>

      <p className="text-gray-500">
        {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default InvoiceHeader;