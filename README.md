# Matthew Nobes

[![CI Workflow](https://github.com/MatthewNobes/MatthewNobes.github.io/actions/workflows/CIWorkflow.yml/badge.svg?branch=master)](https://github.com/MatthewNobes/MatthewNobes.github.io/actions/workflows/CIWorkflow.yml)

This is my new personal website. I have decided to create this new version in
React to provide a better user experience, and demonstrate my React skills. This
site is in a constant cycle of development, where features are added and
improved when I have free time to work on it.

The site currently uses react-bootstrap
[react-bootstrap](https://react-bootstrap.github.io/ "react-bootstrap documentation").
However, it may later be upgraded to Material UI, given react-bootstraps current
limitations.

## Development

To get started with this application, you will first need to download all the
necessary dependencies for the project using the following command:

```
pnpm i
```

Once downloaded, you can then launch the application using the start command:

```
pnpm start
```

### Testing

This application has been setup with Jest testing to ensure that code can be
quickly checked for defects against its functionality when new content is added.
The test suite can be launched using the following npm command:

```
pnpm test
```

### Development guidance

The following should be taken into account when making changes to this repo:

- Major features such as mass conversion are stored in the features directory
- Smaller components such as the Header are stored within the components
  directory.
- Test scripts are located in the same directory as the functions and components
  they test
- Styling is done within the same directory as where it is used, using css
  modules. Any major project styling is done from a central CSS file stored in
  the theme directory
- The utils directory is for common functions and elements that might be needed
  in multiple areas in the future. This makes them easier to find and use for
  other projects in the future.

## Production

A production version of this application is now live, hosted using GitHub pages.
To facilitate this, the application is setup with the
[gh-pages npm extension](https://www.npmjs.com/package/gh-pages "gh-pages npm package").

Pushing new version to the gh-pages branch, two scripts have been setup, a
deploy and a pre-deploy. All that is needed to push to this branch is the deploy
command.

```
pnpm run predeploy
pnpm run deploy
```

The production version can be viewed at:
[https://matthewnobes.github.io/](https://matthewnobes.github.io/ "personal website production version")

### Docker Deployment

This web-application has been configured to enable Docker based deployment. An
image of this app can be created using the docker build command as seen below.
(insert-name marks where you can set the Docker image name, the -t flag allows
this name tag to be allocated)

```
docker build . -t insert-name
```

To load this Docker image into a container, the docker run command is used as
follows with the name selected for the image in the previous step in place for
insert-name.

```
docker run -p 3000:3000 -d insert-name
```

NOTE: The Dockerfile has been configured to run on port 3000. The app can be run
on another port by replacing the first 3000 in the command above with your own
choice of port.
