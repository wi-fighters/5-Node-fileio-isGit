# Is Git

Create a progrm that checks if a directory in the file system is also a git repository.

## Instructions

### 1. Complete the function

In the file `is-git.js` complete the exported function using the [`directory-exists`](https://www.npmjs.com/package/directory-exists) library to check if a relative path contains a `.git` directory.

#### Constraints (Task 1)

* The function should return a string indicating whether a git repository exists in passed path or not.
* The function should recieve a **_relative_** path, but return a string contaning the **_absolute_** path (see examples below)
* If a direcotry doesn't exist in the passed path, the function should **exit the process** and print message to the user.

#### Examples (Task 1)

| Case | Input | Output |
|------|-------|--------|
| Input is not a directory | `'../hello'` | `Sorry, but I couldn't find a directory at /home/itamar/hello` |
| Input is git repository | `'./blockly-vue'` | `/home/itamar/blockly-vue is a git repository` |
| Input is not git repository | `'./blockly-vue/src'` | `/home/itamar/blockly-vue/src is **not** a git repository` |

### 2. Create a cli program

In the file `index.js` accept at least one command line argument from the user, and import the function from `is-git.js` to check if the argument is a git repository.

#### Constraints (Task 2)

* If no arguments are passed, the program should **exit the process** and print a message to the user (see examples below)
* Add support for multiple arguments

#### Examples (Task 2)

##### Directory is a git repository

```bash
$ node index.js ../blockly-vue
> "/home/itamar/blockly-vue is a git repository"
```

##### Directory is not a git repository

```bash
$ node index.js ../blockly-vue/src
> "/home/itamar/blockly-vue/src is **not** a git repository"
```

##### Directory doesn't exist

```bash
$ node index.js ../hello
> "Sorry, but I couldn't find a directory at /home/itamar/hello"
```

##### No arguments passed

```bash
$ node index.js
> "Please pass in at least one directory path to check for git repositories"
```

##### Multiple Arguments

```bash
$ node index.js ../blockly-vue ../blockly-vue/src
> "/home/itamar/blockly-vue is a git repository"
> "/home/itamar/blockly-vue/src is **not** a git repository"
```

### Bonus tasks

* Use the external library [`chalk`](https://www.npmjs.com/package/chalk) to add some color to your output.
* Link the npm package globally so that you could use the program anywhere in the terminal by calling `is-git <directory>`.
* Publish the program as an npm package under your user namespace.
