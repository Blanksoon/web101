# Package manger

```
Note: Installation of Yarn via npm is generally not recommended. Installing Yarn with npm is non-deterministic, the package is not signed, and the only integrity check performed is a basic SHA1 hash, which is a security risk when installing system-wide apps.

For these reasons, it is highly recommended that you install Yarn through the installation method best suited to your operating system.
```

```
package.json
command not run

wrong
yarn run
npm run

Issue
npm run <command>
```

# Javascript

```
es2015 -> es6

const
let

const add = (a, b)
```

# yarn

```
yarn add
yarn add --dev
```

# Babel

```
JavaScript compiler

install package
babel-cli
  -> babel-core
  -> babel-polyfill
  -> babel-runtime
babel-preset-env

it’s much better to install it locally project
  1. different versions of Babel
  2. more portable and easier to setup

set .babelrc

set command
  1. run babel in lib directory
    -> ./node_modules/.bin/bebel src -d lib
  2. set in package.json
    -> "scripts": { "start": "babel src -d lib" } 
```

# Babel Cli

```
1. print in console
babel ./src/index.js

2. complie to file
babel index.js -o dist/index.js

3. complie to file (watch)
babel index.js -w -o dist/index.js

4. source map
babel index.js -o dist/index.js -s

5. source map inline
babel index.js -o dist/index.js -s inline

6. compile directory
babel src -d dist

7. compile direactory to one file (concatenated)
babel src -o dist/index.js

8. ignore files
babel src -d dist --ignore index.js

9. copy file isn't compile (css, html)
babel src -d dist --copy-files

10. Piping take input on command line (in current directory on command)
babel -o src/current-command.js < current-command.js

11. Using plugins (Require install plugin package)
babel src/index.js -o src/plugin.js --plugins=transform-runtime,transform-es2015-modules-amd

12. Using presets (Require install preset)
babel src/index.js -o src/preset.js --presets=es2015,react

13. Ignoring .babelrc
babel --no-babelrc src/index.js -o src/babelrc.js

more option: babel --help or http://babeljs.io/docs/usage/api/#options

babel -> compile
babel-node -> compile not for production (dev environment)
``` 

# Babel preset

```
babel flow
parser -> transforming -> generation

warnning before stage-3

plugin -> each one form syntax
preset -> contains multiple babel plugins

Transform Plugins -> apply transformations
Syntax Plugins -> parse specific types of syntax

Stage 0 - Strawman: just an idea, possible Babel plugin.
Stage 1 - Proposal: this is worth working on.
Stage 2 - Draft: initial spec.
Stage 3 - Candidate: complete spec and initial browser implementations.
Stage 4 - Finished: will be added to the next yearly release.

1. Plugins run before Presets.
2. Plugin ordering is first to last.
3. Preset ordering is reversed (last to first).
```