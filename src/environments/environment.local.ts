export const environment = {
  // ...setEnvironment('1.0', ENVIRONMENT.DEV),
  production: true,
  COMMONS_URL: 'api',
  BASS_URL: 'bass',
  MA2_URL: 'ma2',
  LOADER_TIMER: 40000,
  auth: {
    USER: 'AUTHUSERNAME',
    PASSWORD: 'AUTHPASSWORD',
  },
  authBiometria: {
    USER: 'AUTHUSERNAME',
    PASSWORD: 'AUTHPASSWORD',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
