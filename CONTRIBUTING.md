# Contribution guidelines

The `yinper-rest-client` repository is an open source repository and consequently anyone with access to the repository is more than invited to collaborate in the project.

There are 2 main ways to collaborate in the process:

1. [Creating a new client](#creating-a-new-client).

2. [Updating any of the already available clients](#updating-any-of-the-already-available-clients).

Let's see how to proceed in each one of this situations.

## Creating a new client

We have integrated [`angular-cli`](https://cli.angular.io/) as a way to boost the process of creating new service for the clients. It is important to note that although the process is highly accelerated, there is still work to do for the new API client creator to make it fully functional.

To create a new API client template, please follow the next steps:

1. Creating a new branch in your local repository:

```bash
git checkout -b feat/the-name-of-your-branch
```

2. Run the follwoing command to the generation of a new service in angular:

```bash
ng generate service my-new-service
```

3. Generate code in the generated files

## Updating any of the already available clients

To fix any issue or implement a new feature in any of the already existent API clients, please follow the next steps:

1. Create a new branch for the new code:

```bash
git checkout -b feat-or-fix-or-chore-depending-on-the-update/the-name-of-your-branch
```

2. Make your changes to the code base.

Once you have finished including your changes, please follow the guidelines to contribute your changes according to section [Contributing code to the repository](#contributing-code-to-the-repository).

# Contributing code to the repository

To contribute your code to the repositiry, please follow the next steps:

1. Once you are happy with your code, stash your changes into your branch:

```bash
git add .
```

2. Create a new commit executing the following command from the root of your local repository:

```bash
git commit -m "comentary of commit"
```

3. Push your branch to the remote repository (this step will run the unit tests of all the packages and it will not let you continue until of all them pass):

```bash
git push origin feat-or-fix-or-chore-depending-on-the-update/the-name-of-your-branch
```

5. From [Github](https://github.com/Yinper/yinper-rest-client), send a new pull request from the branch with your code to `master`.

6. Ask for revision from any of the main contributors of the project.

7. Once the code has been reviewed and accepted, merge your code into `master`.
