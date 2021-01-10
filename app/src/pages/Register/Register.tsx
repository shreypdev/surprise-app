import { IonPage, IonHeader, IonToolbar, IonText,IonRouterLink, IonContent, IonRow, IonCol } from '@ionic/react';
import React, { useState } from 'react';
import Login from '../Login/Login';

import {InputWithStackedLabel} from '../../components/Inputs/Inputs';
import {RoundSolidButton} from '../../components/Buttons/Buttons';

import '../Login/Login.scss';
import { useLoader } from '../../controllers/LoaderManager/LoaderManager';
import { useToast } from '../../controllers/ToastManager/ToastManager';
import { SignupModel } from './model';
import { auth } from '../../firebase';

const initialState = {
    name: undefined,
    email: undefined,
    password: undefined,
    confirmPassword: undefined
};

const Register: React.FC = () => {
    const [signupFields, setSignupFields] = useState(initialState);
    const [registered, setRegistered] = useState(false)


    const Toast = useToast();
    const Loader = useLoader();

    const onInputChange = (val: any, key: keyof SignupModel) =>{
        signupFields[key] = val;
        setSignupFields({...signupFields});
    };

    //Async function to handle empty user inputs on resgisteration form
    const handleSignup = async () =>{
        const{email, name, password, confirmPassword} = signupFields;
        console.log(signupFields);

        if(password !== confirmPassword){
            Toast.error("Passwords are not equal! Try again!")
            return;
        }

        if(!email || !name || !password){
            Toast.error("Field cannot be empty!");
            return;
        }

        Loader.show('Registering');

        const response = await auth.createUserWithEmailAndPassword(email!, password!);
        if(response.user?.email){
            Loader.dismiss();
            setRegistered(true)
        } else {
            Loader.dismiss();
            setRegistered(false);
            Toast.error("Something went wrong! Please try again!")
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
                                    label = {"Name"}
                                    type="text"
                                    placeholder="John Doe"
                                    clearInput
                                    clearOnEdit
                                    required
                                    className="form-input-item"
                                    onIonChange={(e: any) => onInputChange(e.target.value, 'name')}
                                />
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
                                <InputWithStackedLabel 
                                    label = {"Confirm Password"}
                                    type="password"
                                    placeholder="*******"
                                    clearInput
                                    clearOnEdit
                                    required
                                    className="form-input-item"
                                    onIonChange={(e: any) => onInputChange(e.target.value, 'confirmPassword')}
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

