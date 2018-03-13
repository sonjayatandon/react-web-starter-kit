# react-web-starter-kit

This is a derivative project of: https://github.com/coryhouse/react-slingshot

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

