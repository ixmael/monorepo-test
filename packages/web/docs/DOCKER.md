# Working with Docker

## Test
This container execute the project's tests. The image to build the container for the tests is defined in the file *project_path/infrastructure/test.dockerfile*.

### Build the test image
```sh
docker build \
--build-arg USER=$USER \
--build-arg UID=`id -u` \
-f ./infrastructure/test.dockerfile \
-t fingerprint_frontend_test .
```

### Run the test container
```sh
docker run \
-e NODE_ENV=test \
--name fingerprint_frontend_testing \
--volume $(pwd):/opt/var/fingerprint-frontend-v3 \
fingerprint_frontend_test
```

## Build
This container builds the distribution javascript file. The image to build the container builder is defined in the file *project_path/infrastructure/build.dockerfile*.

### Build the builder image
```sh
docker build \
--build-arg USER=$USER \
--build-arg UID=`id -u` \
-f ./infrastructure/build.dockerfile \
-t fingerprint_frontend_builder .
```

### Run the builder container
```sh
docker run \
-e NODE_ENV=production \
--name fingerprint_frontend_builder \
--volume $(pwd):/opt/var/fingerprint-frontend-v3 \
fingerprint_frontend_builder
```
