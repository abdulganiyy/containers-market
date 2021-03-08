import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem/CartItem";
import classes from "./Cart.module.css";
import { Link } from "react-router-dom";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={classes.Cart}>
        <div className={classes.CartContainer}>
          {this.props.cart.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>
        <p>
          <span style={{ margin: ".5rem" }}>TOTAL:</span>
          {this.props.totalAmount}
        </p>
        <p>
          <Link to="/checkout">Checkout</Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalAmount: state.totalAmount,
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
