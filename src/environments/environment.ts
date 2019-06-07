// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/**
 * copy and paste your firebase config in firebase console
 * Authentication > Web Setub
 */
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD0dA6Bk3of_Q-sZd3Sq1z_6yOtic1VQYc",
    authDomain: "hhp-diginn-messaging-dev-f23d2.firebaseapp.com",
    databaseURL: "https://hhp-diginn-messaging-dev-f23d2.firebaseio.com",
    projectId: "hhp-diginn-messaging-dev-f23d2",
    storageBucket: "hhp-diginn-messaging-dev-f23d2.appspot.com",
    messagingSenderId: "785214244460",
    appId: "1:785214244460:web:2485190da1fc7bb8"
  }
};



/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
