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

import './Custom.scss';
import { CustomGiftModel } from './model';
import { useLoader } from '../../controllers/LoaderManager/LoaderManager';
import { useToast } from '../../controllers/ToastManager/ToastManager';
import { Redirect } from 'react-router';

const initialState = {
    giftname: undefined,
    link: undefined,
    category: undefined,
    cost: undefined,
};

const CustomGift: React.FC = () => {
    const [CustomGiftFields, setCustomGiftFields] = useState(initialState);
    const [NewCustomGiftFields,setNewCustomGiftFields] = useState(initialState);
    const [backBtnClicked, setBackBtnClicked] = useState(false)
    const [newRoomCreated, setNewRoomCreated] = useState(false)

    const Toast = useToast();
    const Loader = useLoader();

    const onInputChange = (val: any, key: keyof CustomGiftModel) => {
        CustomGiftFields[key] = val;
        setCustomGiftFields({ ...CustomGiftFields });
    }; 

    const clearState = () => {
        setNewCustomGiftFields(initialState);
    }

    const backBtnHandler = () => {
        setBackBtnClicked(true)
        clearState()
    }

    const handleCustomGift = async () => {
        const {giftname, link, category, cost} = CustomGiftFields;
        console.log(CustomGiftFields);
        
        if(!giftname || !link || !cost){
            Toast.error("Fields can't be empty!");
            return;
        }
        setNewRoomCreated(true)
    }

    return (
        <IonPage>
            {backBtnClicked ? <Redirect to="/rooms" /> : <></>}
            {newRoomCreated ? <Redirect to="/reformedroomdets" /> : <></>}
            <IonHeader>
                <IonToolbar>
                <IonText mode="ios" className="ion-text-left" color="primary">
                    <h1 className="title-bold rooms-header">New Custom Gift</h1>
                </IonText>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonRow className="ion-justify-content-center">
                    <IonCol className="signup-form">
                        <form>
                            <div className="signup-form-inputs">
                                <InputWithStackedLabel 
                                    label = {"Gift Name"}
                                    type="text"
                                    placeholder="John Doe's Gift"
                                    clearInput
                                    clearOnEdit
                                    required
                                    className="form-input-item"
                                    onIonChange={(e: any) => onInputChange(e.target.value, 'giftname')}
                                />
                                <InputWithStackedLabel 
                                    label = {"Gift Link"}
                                    type="url"
                                    placeholder="https://johndoe.com"
                                    clearInput
                                    clearOnEdit
                                    required
                                    className="form-input-item"
                                    onIonChange={(e: any) => onInputChange(e.target.value, 'link')}
                                />
                                <InputWithStackedLabel 
                                    label = {"Gift Category"}
                                    type="text"
                                    placeholder="Category"
                                    clearInput
                                    clearOnEdit
                                    required
                                    className="form-input-item"
                                    onIonChange={(e: any) => onInputChange(e.target.value, 'category')}
                                />
                                <InputWithStackedLabel 
                                    label = {"Gift Cost"}
                                    type="number"
                                    placeholder="25"
                                    clearInput
                                    clearOnEdit
                                    required
                                    className="form-input-item"
                                    onIonChange={(e: any) => onInputChange(e.target.value, 'cost')}
                                />
                                <IonRow>
                                    <IonCol size="4">
                                        <RoundSolidButton expand="block" onClick={()=>backBtnHandler()}>
                                            Back
                                        </RoundSolidButton>
                                    </IonCol>
                                    <IonCol size="4"></IonCol>
                                    <IonCol size="4">
                                        <RoundSolidButton expand="block" onClick={handleCustomGift}>
                                            Create
                                         </RoundSolidButton>
                                    </IonCol>
                                </IonRow>
                               
                            </div>
                        </form>
                    </IonCol>
                </IonRow>
            </IonContent>

        </IonPage>
    )
}

export default CustomGift;
