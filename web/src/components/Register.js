import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Register extends React.Component {
  render() {
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign Up</h1>
              <p className="text-xs-center">
                <Link to="/login">Have an account?</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
