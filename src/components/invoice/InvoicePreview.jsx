import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import useCart from "../../hooks/useCart";

import InvoiceHeader from "./InvoiceHeader";
import InvoiceItems from "./InvoiceItems";
import PrintInvoice from "./PrintInvoice";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const InvoicePreview = () => {
    const navigate = useNavigate();
    const invoiceRef = useRef(null);

    const {
        subtotal,
        gst,
        discount,
        total,
        clearCart,
    } = useCart();

    const handleNewOrder = () => {
        clearCart();
        navigate("/cashier/create-order");
    };

    const handleDownloadPDF = async () => {
        const element = invoiceRef.current;

        if (!element) return;

        const canvas = await html2canvas(element, {
            scale: 2,
        });

        const imgData = canvas.toDataURL(
            "image/png"
        );

        const pdf = new jsPDF(
            "p",
            "mm",
            "a4"
        );

        const pdfWidth =
            pdf.internal.pageSize.getWidth();

        const pdfHeight =
            (canvas.height * pdfWidth) /
            canvas.width;

        pdf.addImage(
            imgData,
            "PNG",
            0,
            0,
            pdfWidth,
            pdfHeight
        );

        pdf.save(
            `Invoice-${Date.now()}.pdf`
        );
    };

    return (
        <div
            id="invoice-content"
            ref={invoiceRef}
            className="max-w-2xl mx-auto bg-white border rounded-xl p-8"
        >
            <InvoiceHeader />

            <InvoiceItems />

            <div className="border-t mt-6 pt-6 space-y-2">
                <div className="flex justify-between">
                    <span>Subtotal</span>

                    <span>
                        ₹{subtotal.toFixed(2)}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span>GST</span>

                    <span>
                        ₹{gst.toFixed(2)}
                    </span>
                </div>

                <div className="flex justify-between text-red-500">
                    <span>Discount</span>

                    <span>
                        ₹{Number(discount).toFixed(2)}
                    </span>
                </div>

                <div className="flex justify-between text-xl font-bold pt-3">
                    <span>Total</span>

                    <span>
                        ₹{total.toFixed(2)}
                    </span>
                </div>

                <div className="mt-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        Paid
                    </span>
                </div>
            </div>

            <div className="flex gap-3 mt-8">
               <PrintInvoice invoiceRef={invoiceRef} />

                <button
                    onClick={handleDownloadPDF}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                    Download PDF
                </button>

                <button
                    onClick={handleNewOrder}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                >
                    New Order
                </button>
            </div>
        </div>
    );
};

export default InvoicePreview;