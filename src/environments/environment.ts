// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from "firebase";

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyAolDZqiTU0myo1t0Zbg3f_Wu5evfVyaYI",
    authDomain: "spms-45ac8.firebaseapp.com",
    projectId: "spms-45ac8",
    storageBucket: "spms-45ac8.appspot.com",
    messagingSenderId: "694586858596",
    appId: "1:694586858596:web:e972f086a3fc6b80a05371",
    measurementId: "G-9QTF0TZYS8"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
