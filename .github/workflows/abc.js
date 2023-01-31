console.log("Print value")

//const serviceAccount = JSON.parse(process.env.FIREBASE_AUTH_KEY);
const serviceAccount = require(GOOGLE_APPLICATION_CREDENTIALS);
console.log(serviceAccount)