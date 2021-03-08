import React, { Component } from "react";
import classes from "./CartItem.module.css";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={classes.Cart}>
        <p>{this.props.item.name}</p>
        <p>{this.props.item.price}NAIRA</p>
        <p>{this.props.item.location}</p>
      </div>
    );
  }
}

export default CartItem;
