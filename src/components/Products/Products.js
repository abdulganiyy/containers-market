import React, { Component } from "react";
import Product from "../Product/Product";
import { connect } from "react-redux";
import classes from "./Products.module.css";
import { Link } from "react-router-dom";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    return (
      <div className={classes.Container}>
        <div>
          <span>
            <Link to="/cart">
              Cart
              <span
                style={{
                  marginLeft: ".3rem",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  color: "blue",
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                {this.props.cart.length}
              </span>
            </Link>
          </span>
        </div>
        <div className={classes.ProductWrap}>
          {this.props.products.map((product, index) => {
            return <Product key={index} {...this.props} {...product} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     order: (price) => {
//       dispatch({ type: "ORDER_NOW", payload: price });
//     },
//   };
// };

export default connect(mapStateToProps)(Products);
