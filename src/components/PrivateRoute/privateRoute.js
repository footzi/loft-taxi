import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getIsAuthorized } from '../../modules/Auth';

const PrivateRoute = ({ isAuthorized, component: Component, ...props }) => {
  return isAuthorized ? <Component {...props} /> : <Redirect to="/login" />;
};

export default connect(state => ({
  isAuthorized: getIsAuthorized(state)
}))(PrivateRoute);
