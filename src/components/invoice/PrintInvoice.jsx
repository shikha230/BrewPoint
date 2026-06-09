import { useReactToPrint } from "react-to-print";

const PrintInvoice = ({ invoiceRef }) => {
  const handlePrint = useReactToPrint({
    contentRef: invoiceRef,
    documentTitle: "BrewPoint Invoice",
  });

  return (
    <button
      onClick={handlePrint}
      className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg"
    >
      Print
    </button>
  );
};

export default PrintInvoice;