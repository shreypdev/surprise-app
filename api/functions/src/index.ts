import * as admin from 'firebase-admin';

admin.initializeApp();

import users from '../controllers/users';
import rooms from '../controllers/rooms';
import search from '../controllers/search';

module.exports = {
  users,
  rooms,
  search,
};
