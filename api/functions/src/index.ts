import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as express from 'express';
// import * as cors from 'cors';

admin.initializeApp();
const app = express();

app.post('/', async (req, res) => {
  const user = req.body;

  await admin.firestore().collection('users').add(user);

  res.status(201).send();
});

app.get('/', async (req, res) => {
  const snapshot = await admin.firestore().collection('users').get();

  const users: any = [];

  snapshot.forEach((user) => {
    const id = user.id;
    const data = user.data();

    users.push({id, ...data});
  });

  res.status(200).send(users);
});

app.get('/:id', async (req, res) => {
  const snapshot = await admin.firestore()
      .collection('users').doc(req.params.id).get();

  const id = snapshot.id;
  const data = snapshot.data();

  res.status(200).send({id, ...data});
});

app.put('/:id', async (req, res) => {
  const body = req.body;

  await admin.firestore().collection('users').doc(req.params.id).update(body);

  res.status(200).send();
})

app.delete('/:id', async (req, res) => {
  await admin.firestore().collection('users').doc(req.params.id).delete();

  res.status(200).send();
})

exports.users = functions.https.onRequest(app);

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', {structuredData: true});
  response.send('Hello from Firebase!');
});
