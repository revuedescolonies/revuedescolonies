# Scholarly Editing Microedition Template

Use this template to setup a new microedition staging environment.

Create a new repository following this naming convention: `se-microedition-` followed by the last names of the authors, separated by `_`. For example `se-microedition-last1_last2`

On your machine, make a directory with the same name and 
```shell
git init
```

Add the remote 
```shell
git remote add origin git@gitlab.com:scholarly-editing/se-microedition-NAMES.git
```

Add this template as an upstream remote 
```shell
git remote add upstream git@gitlab.com:scholarly-editing/se-microedition-template.git
```

Override the url from push so that you don't accidentally push to upstream:
```shell
git remote set-url --push upstream no-pushing
```

Fetch and pull from upstream.
```shell
git fetch upstream && git pull upstream main
```

Rename your branch to `main` if you haven't done that yet:
```shell
git branch -M main
```

Push to origin to finish:
```shell
git push -u origin main
```

Now you can make changes and push. The first change you should make is adding the new `basePath` to `gatsby-config.js`.
