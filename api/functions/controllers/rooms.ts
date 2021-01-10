import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import authMiddleware from './auth-middleware';

const roomsApp = express();
const roomsCollection = admin.firestore().collection('rooms');

roomsApp.use(cors({origin: true}));
roomsApp.use(authMiddleware);

interface Gift {
  name: string,
  link: string,
  category: string,
  cost: number,
  votes: number,
  finalized: boolean
}

interface Room {
  roomName: string;
  giftFor: string;
  budget: number;
  admin: string;
  members: Array<string>;
  interests: Array<string>;
  giftSelected: Array<Gift>;
}

// interface RoomWithID extends Room {
//   id: number;
// }

roomsApp.post('/', async (req, res) => {
  const {roomName, giftFor, budget, admin, members, interests, giftSelected} = req.body;

  if (!(roomName && giftFor &&budget && admin && members && interests && giftSelected)) {
    res.status(400).send('Incorrect param(s)');
  }

  const room = req.body as Room;

  const a = await roomsCollection.add(room);

  res.status(201).send(a.id);
});

roomsApp.get('/', async (req, res) => {
  const rooms: any = [];
  const snapshot = await roomsCollection.get();

  snapshot.forEach((room) => {
    const id = room.id;
    const data = room.data();

    rooms.push({id, ...data});
  });

  res.status(200).send(rooms);
});

roomsApp.get('/:id', async (req, res) => {
  const snapshot = await roomsCollection.doc(req.params.id).get();

  const id = snapshot.id;
  const data = snapshot.data();

  res.status(200).send({id, ...data});
});

roomsApp.put('/:id', async (req, res) => {
  const body = req.body;

  await roomsCollection.doc(req.params.id).update(body);

  res.status(200).send();
});

roomsApp.delete('/:id', async (req, res) => {
  await roomsCollection.doc(req.params.id).delete();

  res.status(200).send();
});

export default functions.https.onRequest(roomsApp);
