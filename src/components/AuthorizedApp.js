// react components
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

// styling components
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';

// app components
import NotFoundPage from "./NotFoundPage";
import HomePage from "./home/HomePage";
import NavAndHeader from "./ui-layout/NavAndHeader";

import {
  Home,
  Group,
  AddToQueue,
  Build,
  LibraryBooks,
  TrackChanges,
  ThumbsUpDown} from 'material-ui-icons';
import PracticeEditor from "./practices/PracticeEditor";



const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const AuthorizedApp = () => {

  const navItems = [
    {id:"1", label: "Home", path: "/", icon: <Home/>},
    {id:"2", label: "Build", path: "/build", icon: <Build/>},
    {id:"3", label: "Team", path: "/team", icon: <Group/>},
    {id:"4", label: "Queue", path: "/queue", icon: <AddToQueue/>},
    {id:"5", label: "Library", path: "/library", icon: <LibraryBooks/>},
    {id:"6", label: "Track", path: "/track", icon: <TrackChanges/>},
    {id:"7", label: "Rate", path: "/rate", icon: <ThumbsUpDown/>}
  ];

  return (
    <MuiThemeProvider theme={theme} >
      <NavAndHeader title="My awesome app" auth={true} navItems={navItems} >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path = "/practice" component={PracticeEditor} />
          <Route path = "/practice/:id" component={PracticeEditor} />
          <Route component={NotFoundPage} />
        </Switch>
      </NavAndHeader>
    </MuiThemeProvider>
  );
}

AuthorizedApp.propTypes = {
  email: PropTypes.string
};

export default AuthorizedApp;

