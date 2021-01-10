import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';

const usersApp = express();
const usersCollection = admin.firestore().collection('users');

usersApp.use(cors({origin: true}));


usersApp.post('/', async (req, res) => {
  const {id, ...userDetails} = req.body;

  await usersCollection.doc(id).set(userDetails);

  res.status(201).send();
});

usersApp.get('/', async (req, res) => {
  const users: any = [];
  const snapshot = await usersCollection.get();

  snapshot.forEach((user) => {
    const id = user.id;
    const data = user.data();

    users.push({id, ...data});
  });

  res.status(200).send(users);
});

usersApp.get('/:id', async (req, res) => {
  const snapshot = await usersCollection.doc(req.params.id).get();

  const id = snapshot.id;
  const data = snapshot.data();

  res.status(200).send({id, ...data});
});

usersApp.put('/:id', async (req, res) => {
  const body = req.body;

  await usersCollection.doc(req.params.id).update(body);

  res.status(200).send();
});

usersApp.delete('/:id', async (req, res) => {
  await usersCollection.doc(req.params.id).delete();

  res.status(200).send();
});

export default functions.https.onRequest(usersApp);
