import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Fields from "../common/Fields";
import FieldsArea from "../common/FieldsArea";
import SelectList from "../common/SelectList";
import InputGroup from "../common/InputGroup";
import { createProfile, getCurrentProfile } from "../../actions/userActions";
import isEmpty from "../../validation/is-empty";

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

  componentDidMount() {
    this.props.getCurrentProfile;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      const skillsCSV = profile.skills.join(",");

      profile.location = !isEmpty(profile.location) ? profile.location : "";
      profile.skills = !isEmpty(profile.skills) ? profile.skills : "";
      profile.bio = !isEmpty(profile.bio) ? profile.bio : "";
      profile.status = !isEmpty(profile.status) ? profile.status : "";

      this.setState({
        handle: profile.handle,
        location: profile.location,
        status: profile.status,
        skills: skillsCSV,
        bio: profile.bio
      });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      location: this.state.location,
      status: this.state.status,
      bio: this.state.bio,
      skills: this.state.bio
    };

    this.props.createProfile(profileData, this.props.history);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;

    const options = [
      { label: "* Select Professional Status", value: 0 },
      { label: "Manager", value: "Manager" },
      { label: "Student or Learning", value: "Student or Learning" },
      { label: "Instructor or Teacher", value: "Instructor or Teacher" },
      { label: "Intern", value: "Intern" },
      { label: "Other", value: "Other" }
    ];
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto" />
            <h1 className="display-4 text-center">Edit Profile</h1>
            <p className="lead text-center" />
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
              <SelectList
                placeholder="Status"
                name="status"
                value={this.state.status}
                onChange={this.onChange}
                options={options}
                error={errors.status}
                info="What do you do?"
              />
              <FieldsArea
                placeholder="Location"
                name="location"
                value={this.state.location}
                onChange={this.onChange}
                error={errors.location}
                info="City and location"
              />
              <FieldsArea
                placeholder="Short Bio"
                name="bio"
                value={this.state.bio}
                onChange={this.onChange}
                error={errors.bio}
                info="Tell us a little about yourself"
              />
              <FieldsArea
                placeholder="Skills"
                name="skills"
                value={this.state.skills}
                onChange={this.onChange}
                error={errors.skills}
                info="What skills you got?"
              />
              <input
                type="submit"
                value="Submit"
                className="btn btn-info btn-block mt-4"
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
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(NewProf));
