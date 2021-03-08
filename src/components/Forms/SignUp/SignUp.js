import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <form>
          <div>
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Your Mail" />
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
