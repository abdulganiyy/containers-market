import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import env from "react-dotenv";

const FlutterPay = (props) => {
  const config = {
    public_key: env.FLUTTER_PAYKEY,
    tx_ref: Date.now(),
    amount: props.totalAmount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phonenumber: "07064586146",
      name: "joel ugwumadu",
    },
    customizations: {
      title: "My store",
      description: "Payment for items in cart",
      logo:
        "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,

    text: "Pay with Flutterwave!",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="App">
      <h1>{props.totalAmount}NAIRA is your total payment</h1>
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
};

export default FlutterPay;

// FLWPUBK_TEST-38716601716558217705334cce17529e-X
