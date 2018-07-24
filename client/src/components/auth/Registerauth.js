import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import qs from "qs";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

class Registerauth extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser);

    // axios
    //   .post("/api/users/register", qs.stringify(newUser))
    //   .then(res => console.log(res.data))
    //   .catch(err => this.setState({ errors: err.response.data }));
  };

  render() {
    const { errors } = this.state;

    const user = this.props.auth.user;

    return (
      <div className="register">
        {user ? user.name : null}
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-20 ">Sign Up</h1>
              <p className="lead text-center">
                Create your Languageconnect account
              </p>
              <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                  <input
                    type="text"
                    className={
                      errors.name
                        ? "form-control form-control-lg is-invalid"
                        : "form-control form-control-lg"
                    }
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange.bind(this)}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={
                      errors.email
                        ? "form-control form-control-lg is-invalid"
                        : "form-control form-control-lg"
                    }
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange.bind(this)}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                  <small className="form-text text-muted" />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={
                      errors.password
                        ? "form-control form-control-lg is-invalid"
                        : "form-control form-control-lg"
                    }
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange.bind(this)}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={
                      errors.password2
                        ? "form-control form-control-lg is-invalid"
                        : "form-control form-control-lg"
                    }
                    placeholder="Confirm Password"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.onChange.bind(this)}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.password2}</div>
                  )}
                </div>
                <input type="submit" className="btn btn-info" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Registerauth.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Registerauth);
