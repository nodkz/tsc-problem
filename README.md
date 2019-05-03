# [TSC] RangeError: Maximum call stack size exceeded

## Fast run

```bash
git clone https://github.com/nodkz/tsc-problem ./nodkz-tsc-problem \
  && cd nodkz-tsc-problem \
  && npm install \
  && npm run tsc
```

## Console error

```txt
> ts-max-call-stack@1.0.0 tsc /Users/nodkz/www/_sandbox/tsc-problem
> tsc

/Users/nodkz/www/_sandbox/tsc-problem/node_modules/typescript/lib/tsc.js:72973
                throw e;
                ^

RangeError: Maximum call stack size exceeded
    at __generator (/Users/nodkz/www/_sandbox/tsc-problem/node_modules/typescript/lib/tsc.js:30:13)
    at getUnmatchedProperties (/Users/nodkz/www/_sandbox/tsc-problem/node_modules/typescript/lib/tsc.js:37203:20)
    at getUnmatchedProperty (/Users/nodkz/www/_sandbox/tsc-problem/node_modules/typescript/lib/tsc.js:37237:20)
    at typesDefinitelyUnrelated (/Users/nodkz/www/_sandbox/tsc-problem/node_modules/typescript/lib/tsc.js:37245:19)
    at inferFromObjectTypes (/Users/nodkz/www/_sandbox/tsc-problem/node_modules/typescript/lib/tsc.js:37544:22)
    at inferFromTypes (/Users/nodkz/www/_sandbox/tsc-problem/node_modules/typescript/lib/tsc.js:37456:29)
    at inferFromContravariantTypes (/Users/nodkz/www/_sandbox/tsc-problem/node_modules/typescript/lib/tsc.js:37475:21)
    at applyToParameterTypes (/Users/nodkz/www/_sandbox/tsc-problem/node_modules/typescript/lib/tsc.js:37047:17)
    at inferFromSignature (/Users/nodkz/www/_sandbox/tsc-problem/node_modules/typescript/lib/tsc.js:37603:21)
    at inferFromSignatures (/Users/nodkz/www/_sandbox/tsc-problem/node_modules/typescript/lib/tsc.js:37595:21)
```

## This repo has simplified code, more complex test can be in 2 lines:

```js
import { ObjectTypeComposer } from 'graphql-compose';
User.addResolver({ type: User });
```
