import { useState } from "react";

import PaymentSummary from "../../components/payment/PaymentSummary";
import PaymentMethods from "../../components/payment/PaymentMethods";
import CashPayment from "../../components/payment/CashPayment";
import UpiPayment from "../../components/payment/UpiPayment";
import CardPayment from "../../components/payment/CardPayment";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] =
    useState("cash");

  const [amountReceived, setAmountReceived] =
    useState("");

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Left */}
      <div className="col-span-5">
        <PaymentSummary />
      </div>

      {/* Right */}
      <div className="col-span-7 space-y-6">
        <PaymentMethods
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />

        {paymentMethod === "cash" && (
          <CashPayment
            amountReceived={amountReceived}
            setAmountReceived={
              setAmountReceived
            }
          />
        )}

        {paymentMethod === "upi" && (
          <UpiPayment />
        )}

        {paymentMethod === "card" && (
          <CardPayment />
        )}

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
          Complete Order
        </button>
      </div>
    </div>
  );
};

export default Payment;