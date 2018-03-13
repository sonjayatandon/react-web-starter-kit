// react components
import React from 'react';
import { Switch, Route} from 'react-router-dom';

// styling components
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import NavAndHeader from  './ui-layout/NavAndHeader';
import blue from 'material-ui/colors/blue';

import AccountCircle from 'material-ui-icons/AccountCircle';
import AccountBox from 'material-ui-icons/AccountBox';

// app components
import LoginPage from "./login/LoginPage";

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const navItems = [
  {id:"1", label: "Login", path: "/login", icon: <AccountCircle/>},
  {id:"2", label: "Register", path: "/register", icon: <AccountBox/>},
];

const UnauthorizedApp = () => {
  return (
    <MuiThemeProvider theme={theme} >
      <NavAndHeader title="My awesome app" auth={false} navItems={navItems} >
      <Switch>
        <Route component={LoginPage}/>
      </Switch>
      </NavAndHeader>
    </MuiThemeProvider>
  );
}

export default UnauthorizedApp;
