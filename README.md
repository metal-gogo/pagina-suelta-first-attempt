# Página Suelta

**Página Suelta** is an application to track the author's library and thoughts around books and essays.

## Table of contents

- [Página Suelta](#página-suelta)
  - [Table of contents](#table-of-contents)
  - [Tech stack](#tech-stack)
  - [Development Tools Setup](#development-tools-setup)
    - [Download and install dependencies](#download-and-install-dependencies)
      - [OSX](#osx)
      - [Ubuntu](#ubuntu)
    - [Enable EditorConfig](#enable-editorconfig)
  - [Linting](#linting)
    - [Enable Prettier](#enable-prettier)
    - [Debugging](#debugging)
  - [Testing](#testing)
    - [Filename Conventions](#filename-conventions)
    - [Running our tests](#running-our-tests)
  - [Styling](#styling)
  - [Dependencies](#dependencies)
    - [Bridge pattern](#bridge-pattern)
    - [Exceptions](#exceptions)
    - [Important abstractions](#important-abstractions)
    - [Notable clarification](#notable-clarification)
  - [How to contribute](#how-to-contribute)
      - [TL;DR](#tldr)

## Tech stack

- **Version Control**: We use [git][git] as our version control system, and we use [git-flow][git_flow].
- **Package Manager**: We use several node packages, and we prefer using [Yarn][yarn] over npm to manage our dependencies. Therefore in this project, there should only be a `yarn.lock` file and not a `package-lock.json` file.
- **Development**: We are using [Vue][vue]. This project was bootstrapped with [Nuxt][nuxt]. You can learn more about **Nuxt** on [this copy of the project README.md](/docs/nuxt.md).
- **Linting**: We are using [eslint][eslint] to lint our code. Eslint is a pluggable linting utility for JavaScript to keep our codebase written consistently. We are extending from [Nuxt recommended configuration][nuxt_eslint]. We are also using [stylelint][stylelint], a mighty, modern linter that helps us avoid errors and enforce conventions in our styles. As a final touch, we are using [commitlint][commitlint] to ensure that all commits follow our conventions.
- **Code formatter**: To keep our codebase written consistently and reducing the feedback loop for linting errors, we are using [Prettier][prettier] as our code formatter. Prettier is an opinionated code formatter with support for JavaScript, CSS, and JSON. With Prettier, you can format the code you write automatically to ensure the coding style within your project.
- **Styling**: We will be using [SCSS][scss], the most mature, stable, and powerful professional grade CSS extension language in the world. Nuxt implements [autoprefixer][nuxt_autoprefixer] by default to add vendor prefixes according to the [can I use][caniuse] website.
- **Testing**: We require to have great code coverage with meaningful tests. As we are using Vue, and we will write most of our code with JavasScript, we use [Jest][jest] as our testing framework. We are also using [Vue Testing Library][vue-testing-library] to test the UI components.

## Development Tools Setup

### Download and install dependencies

For a brief explanation of what is being install, please read our [setup documentation](/docs/setup.md).

#### OSX

To install all our dependencies on a OSX, run `scripts/setup.osx.sh`.

#### Ubuntu

To install all our dependencies on Ubuntu, run `scripts/setup.ubuntu.sh`.

We recommended to run the setup script whenever you pull from the `develop` branch. This way, you can always be sure to have all the project dependencies up to date.

### Enable EditorConfig

EditorConfig helps maintain consistent coding styles for all developers working on the project across various editors and IDEs. We have this configured in our [.editorconfig](/.editorconfig) file. Make sure to [configure your editor or IDE][editorconfig_instructions].

## Linting

We use `eslint` and `stylelint` to make static analysis to find problematic patterns and make sure all the team adheres to specific style guidelines. These are already configured in the [eslintrc.js](/.eslintrc.js) and [stylelintrc.js](/.stylelintrc.js) files.

We have configured `eslint` and `stylelint` with webpack to ensure that we get all the linting information during the development. However, if you want to lint the project, you could use the following commands.

To lint all the `.js` and `.vue` files, run the command:

```bash
yarn lint:js
```

The command line will prompt every issue on the code for not following our coding conventions. Most of the linting problems can be fixed by eslint. To fix that kind of issues, run:

```bash
yarn lint:js:fix
```

To lint all the `.css`, `.scss` and `.vue` files, run the command:

```bash
yarn lint:css
```

The command line will prompt every issue on the code for not following our coding conventions. Most of the linting problems can be fixed by stylelint. To fix that kind of issues, run:

```bash
yarn lint:css:fix
```

To lint with both `eslint` and `stylelint`, run the command:

```bash
yarn lint
```

To lint and fix with both `eslint` and `stylelint`, run the command:

```bash
yarn lint:fix
```

Additionally, there is a script configured to prevent us from committing files with linting issues. Whenever you try to commit, the linting will run and stop the commit if there is an issue with the code.

### Enable Prettier

One of our dependencies is [Prettier][prettier]. Prettier is an opinionated code formatter for our codebase. Prettier works best by enabling its format on document save. In order to do this in vscode you need to install this [eslint extension][eslint_vscode_extension], and configure the IDE. We already have this configured in the [.vscode/settings.json](/.vscode/settings.json) file.

### Debugging

We have configured to debug our app on Chrome. To do this, you need to install this [Debugger for Chrome][debbuger_for_chrome] extension on your vscode, and configure the IDE. We already have this configured in the [/.vscode/launch.json](/.vscode/launch.json) file. 

You can add some breakpoints by by writing `debugger` statements in any part of the code while running the debugger.

## Testing

We are using [jest][jest] to make our unit testing. This is already configured in the [jest.config.js](./jest.config.js).

Jest is a Node-based runner. Therefore, the tests always run in a Node environment and not in a real browser. Enabling fast iteration speed and prevent flakiness.

While Jest provides browser globals such as window thanks to jsdom, they are only approximations of the real browser behavior. Jest is intended to be used for unit tests of your logic and your components rather than the DOM quirks.

### Filename Conventions

Jest will look for test files with any of the following popular naming conventions:

- Files with `.js` suffix in **tests** folders.
- Files with `.test.js` suffix.
- Files with `.spec.js` suffix.

However, we should put the test files next to the code they are testing so that relative imports appear shorter. For example, if `App.spec.js` and `App.vue` are in the same folder, the test only needs to `import App from './App'` instead of a long relative path. Collocation also helps find tests more quickly.

### Running our tests

To run all our tests run the command:

```bash
yarn test:unit
```

We are striving to keep the following benchmarks:

- **Statements coverage** &mdash; 75%.
- **Branches coverage** &mdash; 75%.
- **Lines coverage** &mdash; 75%.
- **Functions coverage** &mdash; 75%.

The current state of the coverage is shown after running all the tests.


We recommend to develop with a [Test Driven Development][tdd] mindset, therefore, we recommend running the following command while developing:

```bash
yarn test:unit:watch
```

The watcher includes an interactive command-line interface with the ability to run all tests, or focus on a search pattern. It is designed this way so that you can keep it open and enjoy fast re-runs.

For a more detailed explanation of our testing conventions, please read our [testing guidelines](/docs/testing.md).

## Styling

For our CSS architecture we are using [ITCSS][itcss], with [BEM][bem] as our naming convention. You can read more about how we write our code regarding our styles [here][/docs/styling.md].

## Dependencies

We've decided to wrap third-party dependencies into custom abstractions. As [this thread][sarah_dayan_dependency_thread] explains, the wrapped dependency is isolated, and if a change in the API of that dependency changes, there is only one change point in our codebase (making sure you respect the interface).

If we let a dependency "invade" our code, we're inevitably going to couple the entire application to it. This means that we'll make choices that lean towards making the library happy, and end up with code which requires a significant cognitive overhead.

### Bridge pattern

In the OOP world, this is known as the [bridge pattern][bridge_pattern]. The goal is to:

> Decouple an abstraction from its implementation so that the two can vary independently.

For most third-party dependencies there should be a dedicated directory under the `dependencies` directory. On most cases this directory should keep the same name as the dependency that is going to be wrapped.

### Exceptions

There is a few exceptions for using the **bridge pattern**:

- `vue`
- `nuxt`
- `@vue/test-utils`
- `scss`

After all, we are making a **Nuxt** project, and these are the core libraries that we are using. If the API of these dependencies changes, then we should update our codebase accordingly.

### Important abstractions

Some abstractions are really important and it would have it's own directory.

### Notable clarification

It's relevant to note that we refer to dependencies to everything that imposes an API foreign to our codebase logic.

This will provide us with the flexibility to work with a specific dependency without compromising our implementation to that.

For instance, if we are working with the native [Fetch API][fetch_api]. Maybe we made that choice a while ago because that was enough. If the application starts growing, we might need to cover more use cases. Then, we could decide that it's time to move to something like [Axios][axios].

If we've leaked the usage of Fetch everywhere, we would be up for a nasty refactor. Not only we are changing an implementation, but now we must also go to every single place we've used it. A targeted, focused change is now having a domino effect on the entire app.

On the other hand, if we've wrapped **Fetch** in an abstraction that makes sense for our app, then we've isolated its usage. Maybe we pre-filled it with sensible defaults, and specialized into a module that anyone with domain knowledge of the app can understand.

## How to contribute

Please read through our [contributing guidelines](/docs/contributing.md). Included are directions for opening issues, coding standards, and notes on development.

#### TL;DR

1. We use **git-flow** to create new features. For further information read this [guide](git_flow).
2. Create a [Pull Request][pull_requests] and assign a relevant reviewer.
3. Fix pull request comments (when necessary).
4. Finish your feature with `git flow feature finish <feature_branch>` and push to the `develop` branch.

<!-- Links references -->

[git]: https://git-scm.com/
[git_flow]: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
[yarn]: https://yarnpkg.com/
[vue]: https://vuejs.org/
[nuxt]: https://nuxtjs.org
[eslint]: https://eslint.org/
[nuxt_eslint]: https://github.com/nuxt/eslint-config/tree/master/packages/eslint-config
[stylelint]: https://stylelint.io/
[commitlint]: https://commitlint.js.org/
[prettier]: https://prettier.io/
[scss]: https://sass-lang.com/
[nuxt_autoprefixer]: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build#postcss
[caniuse]: https://caniuse.com/
[jest]: https://jestjs.io/
[vue_testing_library]: https://testing-library.com/docs/vue-testing-library/intro/
[editorconfig_instructions]: https://editorconfig.org/#download
[eslint_vscode_extension]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[debbuger_for_chrome]: https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome
[tdd]: https://medium.freecodecamp.org/test-driven-development-what-it-is-and-what-it-is-not-41fa6bca02a2
[itcss]: https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/
[bem]: http://getbem.com/
[sarah_dayan_dependency_thread]: https://twitter.com/frontstuff_io/status/1264189583220244480
[bridge_pattern]: https://refactoring.guru/design-patterns/bridge
