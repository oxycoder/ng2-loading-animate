# Angular2 Loading Animate
[![Build Status](https://travis-ci.org/oxycoder/ng2-loading-animate.svg?branch=master)](https://travis-ci.org/oxycoder/ng2-loading-animate)
[![npm version](https://badge.fury.io/js/ng2-loading-animate.svg)](http://badge.fury.io/js/ng2-loading-animate)
[![devDependency Status](https://david-dm.org/oxycoder/ng2-loading-animate/dev-status.svg)](https://david-dm.org/oxycoder/ng2-loading-animate#info=devDependencies)
[![GitHub issues](https://img.shields.io/github/issues/oxycoder/ng2-loading-animate.svg)](https://github.com/oxycoder/ng2-loading-animate/issues)
[![GitHub stars](https://img.shields.io/github/stars/oxycoder/ng2-loading-animate.svg)](https://github.com/oxycoder/ng2-loading-animate/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/oxycoder/ng2-loading-animate/master/LICENSE)

## Demo
https://oxycoder.github.io/ng2-loading-animate/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Development](#development)
- [License](#licence)

## About

Loading animation for angular 2

## Installation

Install through npm:
```
npm install --save ng2-loading-animate
```

Then use it in your app like so:

app.module.ts

```typescript
import { LoadingAnimateModule, LoadingAnimateService } from 'ng2-loading-animate';

@NgModule({
  imports: [
    ...
    LoadingAnimateModule.forRoot()
    ...
  ],
  providers: [
    ...
    LoadingAnimateService
    ...
  ]
})
```

Add directives to your app.component.html (usually at top):

```html5
<loading-animate></loading-animate>
```

In component, to start loading animate:
test.component.ts

```typescript
import { LoadingAnimateService } from 'ng2-loading-animate';

constructor(private _loadingSvc: LoadingAnimateService)

start() {
  this._loadingSvc.setValue(true);
}
stop() {
  this._loadingSvc.setValue(false);
}
```

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests. 

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

## License

MIT
