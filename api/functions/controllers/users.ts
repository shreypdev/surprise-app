import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';

admin.initializeApp();
const usersApp = express();

usersApp.use(cors({origin: true}));
const userCollection = admin.firestore().collection('users');

usersApp.post('/', async (req, res) => {
  const user = req.body;

  await userCollection.add(user);

  res.status(201).send();
});

usersApp.get('/', async (req, res) => {
  const users: any = [];
  const snapshot = await userCollection.get();

  snapshot.forEach((user) => {
    const id = user.id;
    const data = user.data();

    users.push({id, ...data});
  });

  res.status(200).send(users);
});

usersApp.get('/:id', async (req, res) => {
  const snapshot = await userCollection.doc(req.params.id).get();

  const id = snapshot.id;
  const data = snapshot.data();

  res.status(200).send({id, ...data});
});

usersApp.put('/:id', async (req, res) => {
  const body = req.body;

  await userCollection.doc(req.params.id).update(body);

  res.status(200).send();
});

usersApp.delete('/:id', async (req, res) => {
  await userCollection.doc(req.params.id).delete();

  res.status(200).send();
});

export default functions.https.onRequest(usersApp);
