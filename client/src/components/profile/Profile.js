import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { link } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileFact from "./ProfileFact";
import Loader from "../common/Loader";
import { getProfileByHandle } from "../../actions/userActions";

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }
  render() {
    return (
      <div>
        <h1>PROFILE ABOUT</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(Profile);
