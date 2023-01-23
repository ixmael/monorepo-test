# Working with the project

## Run for the development
The development provide the commands to build and execute a non uglified bundle. This can allow us to test the code in a browser. This require two http servers to work: one to provide a backend mockup server, the other provide the access to web content. The environment values that are used within javascript files are defined in the *.env* file.

The development environment generate a non uglified bundle file in *public/js/analytics.js*.

### API mockup server
The API mockup server provide the endpoint examples to the backend service. This Rest API mockup server run in the port *3200*.

You can run the Rest API mockup server with:
```sh
yarn run test:start-server-api
```

### Static server
The static server provide the access to files placed in **public**. The **public** dir contains a HTML file that loads the builded fingerprint library to test. There is an *Augur* service simulator: generate a fake device fingerprint and execute the callbacks to the library. The static server use port *3200*.

You can run static server and run the transpilation with:
```sh
yarn run test:build
```

## Tests
The tests use the file *.env.test* configuration. This file contains only fake parameters.

#### Unit tests
The unit tests are placed in the *__tests__* dirs within *src* dir.

You can run all the unit tests with:
```sh
yarn run test:unit
```

#### Integration tests
The integration tests use *Cypress* framework. The tests are placed in *tests/e2e* dir.

This tests require the static server and the API mock server running.

Yop can run the *Cypress* framework with:
```sh
yarn run test:cypress
```

#### Execute all the tests
This project can run all the servers to execute the unit tests and the integration tests with:
```sh
yarn run tests
```

## Build
The build require a *.env* file configuration. This file have to be created with the production configuration (the *.env.example* file has the parameters required). The build ouput is placed in the *dist* dir.

You can build the bundle with:
```sh
yarn run build
```
