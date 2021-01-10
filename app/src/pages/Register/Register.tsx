import { IonPage, IonHeader, IonToolbar, IonText,IonRouterLink, IonContent, IonRow, IonCol } from '@ionic/react';
import React, { useState } from 'react';
import Login from '../Login/Login';

import {InputWithStackedLabel} from '../../components/Inputs/Inputs';
import {RoundSolidButton} from '../../components/Buttons/Buttons';

import '../Login/Login.scss';
import { useLoader } from '../../controllers/LoaderManager/LoaderManager';
import { useToast } from '../../controllers/ToastManager/ToastManager';
import {SignupModel} from './model';

const initialState = {
    name: undefined,
    email: undefined,
    password: undefined
};

const Register: React.FC = () => {
    const [SignupFields, setSignupFields] = useState(initialState);

    const Toast = useToast();
    const Loader = useLoader();

    const onInputChange = (val: any, key: keyof SignupModel) =>{
        SignupFields[key] = val;
        setSignupFields({...SignupFields});
    };

    //Async function to handle empty user inputs on resgisteration form
    const handleSignup = async() =>{
        const{email, name, password} = SignupFields;
        console.log(SignupFields);

        if(!email || !name || !password){
            Toast.error("Field cannot be empty!");
            return
        }
    }

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

                                <RoundSolidButton expand="block" onClick={handleSignup}>
                                    Register
                                </RoundSolidButton>
                                <div
                                    className="ion-text-center"
                                    style={{ marginTop: '30px' }}
                                >
                                    <IonRouterLink
                                    href="/login"
                                    routerDirection="forward"
                                    >
                                    Back to login
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

export default Register;

