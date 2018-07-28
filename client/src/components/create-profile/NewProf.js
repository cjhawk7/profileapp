import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Fields from "../common/Fields";
import FieldsArea from "../common/FieldsArea";
import SelectList from "../common/SelectList";
import InputGroup from "../common/InputGroup";

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

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto" />
            <h1 className="display-4 text-center">Create Profile</h1>
            <p className="lead text-center">Go!</p>
            <small className="d-block pb-3">* = required fields</small>
            <form onSubmit={this.onSubmit}>
              <FieldsArea
                placeholder="* Profile Handle"
                name="handle"
                value={this.state.handle}
                onChange={this.onChange}
                error={errors.handle}
                info="Your handle"
              />
            </form>
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

export default connect(mapStateToProps)(NewProf);
