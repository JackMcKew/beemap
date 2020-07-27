import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard.jsx";
import PrivateRoute from "../routing/PrivateRoute.jsx";
import CreateProfile from "../profile-forms/CreateProfile.jsx";
import EditProfile from "../profile-forms/EditProfile.jsx";
import AddExperience from "../profile-forms/AddExperience.jsx";
import AddEducation from "../profile-forms/AddEducation.jsx";
import Profiles from "../profiles/Profiles.jsx";
import Profile from "../profile/Profile.jsx";
import Posts from "../posts/Posts.jsx";
import Post from "../post/Post.jsx";
import NotFound from "../layout/NotFound.jsx";
import Login from "../auth/Login.jsx";
import Register from "../auth/Register.jsx";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/posts/:id" component={Post} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
