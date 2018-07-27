import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/userActions";
import Loader from "../common/Loader";
import Link from "react-router";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Loader />;
    } else {
      if (Object.keys(profile).length > 0) {
        profileContent = <h4>oops</h4>;
      } else {
        profileContent = (
          <div>
            <p className="lead text muted">Welcome {user.name}</p>
            <p>Please setup a profile</p>
            <Link to="/create-profile" className="btn btn-lg btn info">
              Create Profile
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12" />
            <h1 className="display-4">Dashboard</h1>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
