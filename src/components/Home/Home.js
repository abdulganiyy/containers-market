import React, { Component } from "react";
// import { connect } from "react-redux";
import "./Home.css";
import container from "../../assets/images/container-house.jpg";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="Wrapper">
        <div className="Nav">
          <span>
            <Link to="/products">containers</Link>
          </span>
        </div>
        <img className="BackgroundImage" src={container} alt="bg" />
        <div className="Content">
          <h2>
            GET A CONTAINER DELIVERED TO YOUR DOORSTEPS ANYWHERE IN NIGERIA
          </h2>
          <span>
            <Link to="/products">containers</Link>
          </span>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (props) => {
//   return {
//     isAuthenticated: props.isAuthenticated,
//   };
// };

export default Home;
