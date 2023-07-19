
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const cors = require('cors')({ origin: true });
const { initializeApp } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');

const admin = initializeApp({ projectId: 'geeks-firebase-72e6d' });
const auth = getAuth(admin);

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((req, res) => {
  cors(req, res, () => {
    logger.info("Hello logs!", {structuredData: true});
    res.send("Hello from Firebase!");
  })
});

exports.getUsers = onRequest((req, res) => {
  cors(req, res, async () => {

    const users = await auth.listUsers();

    console.log(users);

    res.send(users);
  })
})
