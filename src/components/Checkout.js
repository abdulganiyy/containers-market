import React, { Component } from "react";
import { connect } from "react-redux";
import FlutterPay from "./FlutterPay";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <FlutterPay totalAmount={this.props.totalAmount} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalAmount: state.totalAmount,
  };
};

export default connect(mapStateToProps)(Checkout);
