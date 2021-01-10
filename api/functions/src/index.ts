import * as admin from 'firebase-admin';

admin.initializeApp();

import users from '../controllers/users';
import rooms from '../controllers/rooms';

module.exports = {
  users,
  rooms,
};
