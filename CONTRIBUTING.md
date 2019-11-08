# Contributing

## Requirements

- [Git](https://git-scm.com/)
- [GNU/Make](https://www.gnu.org/software/make/)
- [Docker](https://www.docker.com)
- [Docker Compose](https://docs.docker.com/compose/)

## Choose an issue

Choose an issue to work on [here](https://github.com/esgi-javascript-lab/mv/issues).

## Fork the project

See [documentation](https://help.github.com/en/github/getting-started-with-github/fork-a-repo).

## Clone the repository

```console
$ git clone https://github.com/$USER/mv.git ~/github/$USER/mv
```

Replace `$USER` with your GitHub username.

## Move your current directory

```console
$ cd ~/github/$USER/mv
```

Replace `$USER` with your GitHub username.

## Create a new branch

```console
$ git branch branch-name
```

Replace `branch-name` with the name of the branch to create. Try to choose a relevant name for your branch that matches the issue you are working on.

## Checkout to the newly created branch

```console
$ git checkout branch-name
```

Replace `branch-name` with the name of the branch that has been created.

## Build the containers

```console
$ make docker
```

## Install the development dependencies

```console
$ make install
```

## Solve the issues

Append changes to the project until the issue you are working on is resolved.

## Build the project

```console
$ make build
```

## Commit your changes

Try to use relevant commit messages.

## Push & publish your branch

```console
$ git push --set-upstream origin branch-name
```

Replace `branch-name` with the name of the branch that has been created.

## Propose a pull request.

See [documentation](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork).
