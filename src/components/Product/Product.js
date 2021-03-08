import React, { Component } from "react";
import "./Product.css";
import { connect } from "react-redux";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedCount: 0,
    };
    this.handleCart = this.handleCart.bind(this);
  }

  handleCart() {
    let count = this.state.clickedCount;
    if (count >= 1) return;
    count = count + 1;
    this.setState({
      ...this.state,
      clickedCount: count,
    });
    this.props.addToCart(this.props.id);
    // this.props.history.replace("/cart");
  }

  // handleOrder() {
  //   this.props.order(this.props.price);
  //   this.props.history.replace("/checkout");
  // }
  render() {
    return (
      <div className="Product">
        <div className="Info">
          <p>{this.props.name}</p>
          <p>{this.props.desc}</p>
          <p>{this.props.price}NAIRA</p>
          <p>{this.props.location}</p>
          {/* <button className="Button" onClick={() => this.handleOrder()}>
            Order Now
          </button> */}
          <button className="Button" onClick={() => this.handleCart()}>
            ADD TO CART
          </button>
        </div>
        <img className="Img" src={this.props.img} alt="container" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // order: (price) => {
    //   dispatch({ type: "ORDER_NOW", payload: price });
    // },
    addToCart: (id) => {
      dispatch({ type: "ADD_TO_CART", payload: id });
    },
  };
};

export default connect(null, mapDispatchToProps)(Product);
