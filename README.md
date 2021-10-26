# Friendly-notes

A simple add notes project which save the data in your local storage which several functions such as add, delete and search. 
Built with <a href="https://angular.io/">Angular</a> and <a href="https://capacitorjs.com/docs/getting-started/with-ionic">Capacitor</a> with <a href="https://ionicframework.com/">Ionic Framework</a>.

## Available Scripts

### `ionic serve`

Runs the app in the development mode.
Open http://localhost:8100 to view it in the browser.

### `ionic capacitor add android` OR `ionic capacitor add ios`

Add a native platform to your Ionic project

### `ionic build --prod --release`

Builds the app for PWA production to the `www` folder. <br />
Place the `www` folder into your chosen web hosting.

### `ionic capacitor build android` OR `ionic capacitor build ios`

`ionic capacitor build` will do the following:

* Perform ionic build
* Copy web assets into the specified native platform
* Open the IDE for your native project (Xcode for iOS, Android Studio for Android) <br />
Once the web assets and configuration are copied into your native project, you can build your app using the native IDE. Unfortunately, programmatically building the native project is not yet supported.

To configure your native project, see the common configuration <a href="https://capacitorjs.com/docs/basics/configuring-your-app?_gl=1*1nzk8tu*_ga*MTYzMDg2MjAwMC4xNjM1MjY3MjU4*_ga_REH9TJF6KF*MTYzNTI2NzI1OC4xLjEuMTYzNTI2ODIxMC4w">docs</a>\
as well as low-level configuration for <a href="https://capacitorjs.com/docs/ios/configuration?_gl=1*igiw2g*_ga*MTYzMDg2MjAwMC4xNjM1MjY3MjU4*_ga_REH9TJF6KF*MTYzNTI2NzI1OC4xLjEuMTYzNTI2ODIxMC4w">iOS</a> 
and <a href="https://capacitorjs.com/docs/android/configuration?_gl=1*2ifnt*_ga*MTYzMDg2MjAwMC4xNjM1MjY3MjU4*_ga_REH9TJF6KF*MTYzNTI2NzI1OC4xLjEuMTYzNTI2ODQ0OS4w">Android</a>.
