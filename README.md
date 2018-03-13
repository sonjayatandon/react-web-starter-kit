# react-web-starter-kit

This is a derivative project of: https://github.com/coryhouse/react-slingshot
## Contents
this starter kit has the following:
- based on slingshot (one of the recommended starting kits)
- material-ui based (1.0 -- so an up to date styleguide)
- redux form
- a component that I built called NavAndHeader which provides a simply and extensible layout framework
- a working login flow
- a working nav bar and account menu
- a simple alerting system
- an auth/un auth mode
- project is dockerized

## Todo
Add in a popup alert/dialog system to NavAndHeader
Add a support function that api services can use to append auth info to all requests
In NavAndHeader, externalize the account menu so it is data driven like the left nav bar

## How to use
When you first download and anytime you make a change to `package.json`, build the docker image:
```$xslt
docker-compose build
```

To run:
```$xslt
docker-compose up
```

This will tail the log file.  The system is setup to watch for changes and will rerun tests and hot-reload any time you make changes.

To view the app:
http://localhost:3000

On the login, use `ok` as the password.

