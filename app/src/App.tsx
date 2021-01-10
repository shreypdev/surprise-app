import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import { LoaderProvider } from './controllers/LoaderManager/LoaderManager';
import { ToastProvider } from './controllers/ToastManager/ToastManager';
import Register from './pages/Register/Register';
import Rooms from './pages/Rooms/Rooms';
import NewRoomForm from './pages/NewRoomForm/NewRoomForm';
import RoomDetails from './pages/RoomDetails/RoomDetails';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = () => (
  <IonApp>
    <ToastProvider>
      <LoaderProvider>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/rooms" component={Rooms} />
            <Route exact path="/new-room-form" component={NewRoomForm} />
            <Route exact path="/room" component={RoomDetails} />
          </IonRouterOutlet>
        </IonReactRouter>
      </LoaderProvider>
    </ToastProvider>
  </IonApp>
);

export default App;
