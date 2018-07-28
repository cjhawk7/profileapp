import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Fields from "../common/Fields";

class NewProf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: "",
      location: "",
      status: "",
      bio: "",
      errors: {}
    };
  }
  render() {
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto" />
            <h1 className="display-4 text-center">Create Profile</h1>
            <p className="lead text-center">Go!</p>
            <small className="d-block pb-3">* = required fields</small>
          </div>
        </div>
      </div>
    );
  }
}

NewProf.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(null)(NewProf);
