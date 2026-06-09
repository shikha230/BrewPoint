import StatCard from "../../components/reports/StatCard";
import TopItems from "../../components/reports/TopItems";
import MonthlySales from "../../components/reports/MonthlySales";

import {
  dailySales,
  topItems,
  monthlySales,
} from "../../data/reportsData";

// PDF + Excel
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const Reports = () => {
  // ---------------- PDF EXPORT ----------------
  const exportPDF = () => {
    const doc = new jsPDF();

    doc.text("Cafe Sales Report", 14, 10);

    autoTable(doc, {
      head: [["Month", "Revenue"]],
      body: monthlySales.map((item) => [
        item.month,
        `₹${item.revenue}`,
      ]),
    });

    doc.save("cafe-report.pdf");
  };

  // ---------------- EXCEL EXPORT ----------------
  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      monthlySales
    );

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Reports"
    );

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const data = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });

    saveAs(data, "cafe-report.xlsx");
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">
            Reports Dashboard
          </h1>

          <p className="text-gray-500">
            Business analytics overview
          </p>
        </div>

        {/* Export Buttons */}
        <div className="flex gap-3">
          <button
            onClick={exportPDF}
            className="bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Export PDF
          </button>

          <button
            onClick={exportExcel}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Export Excel
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-5 mb-6">
        <StatCard
          title="Today's Orders"
          value={dailySales.orders}
        />

        <StatCard
          title="Today's Revenue"
          value={`₹${dailySales.revenue}`}
        />
      </div>

      {/* Content */}
      <div className="grid grid-cols-3 gap-5">
        <TopItems items={topItems} />

        <div className="col-span-2">
          <MonthlySales data={monthlySales} />
        </div>
      </div>
    </div>
  );
};

export default Reports;