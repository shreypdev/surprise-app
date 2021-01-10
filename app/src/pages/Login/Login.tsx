import React, { useState } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonPage,
  IonText,
  IonRouterLink,
   IonRow,
  IonCol,
} from '@ionic/react';
import { InputWithStackedLabel } from '../../components/Inputs/Inputs';
import { RoundSolidButton } from '../../components/Buttons/Buttons';

import './Login.scss';
import { LogInModel } from './model';
import { useLoader } from '../../controllers/LoaderManager/LoaderManager';
import { useToast } from '../../controllers/ToastManager/ToastManager';
import { Redirect } from 'react-router';

const initialState = {
    email: undefined,
    password: undefined,
};

const Login: React.FC = () => {
    const [logInFields, setLogInFields] = useState(initialState);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const Toast = useToast();
    const Loader = useLoader();

    const onInputChange = (val: any, key: keyof LogInModel) => {
        logInFields[key] = val;
        setLogInFields({ ...logInFields });
    };

    const handleLogIn = async () => {
        const {email, password} = logInFields;
        console.log(logInFields);
        
        if(!email || !password){
            Toast.error("Email/Password can't be empty!");
            return;
        }
        
        setIsLoggedIn(true);
        // async calls to login user will go here with the LOADER 

    }

    return (
        <IonPage>
            {isLoggedIn ? <Redirect to="/rooms" /> : <></>}
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
                                <h2 className="title-bold">Log In</h2>
                            </IonText>
                            <div className="signup-form-inputs">
                                <InputWithStackedLabel 
                                    label = {"Email"}
                                    type="email"
                                    placeholder="email@gmail.com"
                                    clearInput
                                    clearOnEdit
                                    required
                                    className="form-input-item"
                                    onIonChange={(e: any) => onInputChange(e.target.value, 'email')}
                                />
                                <InputWithStackedLabel 
                                    label = {"Password"}
                                    type="password"
                                    placeholder="*******"
                                    clearInput
                                    clearOnEdit
                                    required
                                    className="form-input-item"
                                    onIonChange={(e: any) => onInputChange(e.target.value, 'password')}
                                />

                                <RoundSolidButton expand="block" onClick={handleLogIn}>
                                    Login
                                </RoundSolidButton>
                                <div
                                    className="ion-text-center"
                                    style={{ marginTop: '30px' }}
                                >
                                    <IonRouterLink
                                    href="/register"
                                    routerDirection="forward"
                                    >
                                    Don't have an account? Sign up!
                                    </IonRouterLink>
                                </div>
                            </div>
                        </form>
                    </IonCol>
                </IonRow>
            </IonContent>

        </IonPage>
    )
}

export default Login;
