# qa-clickup-chrome-ext
Chrome Extension for creating issues in clickup.com. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Build ClickUp API `https://clickup.com/api`.

## Debugging

Run: `npm start`

Go to: Developer tools (inspect popup) => Sources => webpack

You can find your source files (TypeScript) over there.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build for production

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 

Use the `--prod` flag for a production build. It will automatically zip it as an extension package. 

Upload `extension-build.zip` folder to the chrome webstore.


## Adding to the Chrome 
Go to the `chrome://extensions` in the browser.

Enable `developer mode`.

Press `Load unpacked extension` and load `extension-build.zip` folder. The project is automatically being watched.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
