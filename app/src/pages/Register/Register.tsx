import { IonPage, IonHeader, IonToolbar, IonText, IonContent, IonRow, IonCol } from '@ionic/react';
import React from 'react';
import Login from '../Login/Login';

import '../Login/Login.scss';

const Register: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonText className="ion-text-center" color="primary">
                    <h1 className="title-light">Gift App</h1>
                </IonText>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonRow className="ion-justify-content-center">
                    <IonCol className="signup-form">
                        <form>
                            <IonText className="ion-text-left" color="primary">
                                <h2 className="title-bold">Register</h2>
                            </IonText>
                        </form>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}

export default Register;

