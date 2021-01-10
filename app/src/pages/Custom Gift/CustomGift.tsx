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

const initialState = {
    giftname: undefined,
    link: undefined,
    category: undefined,
    cost: undefined,
};

const CustomGift: React.FC = () => {
    const [CustomGiftFields, setCustomGiftFields] = useState(initialState);

    const Toast = useToast();
    const Loader = useLoader();

    const onInputChange = (val: any, key: keyof CustomGiftModel) => {
        CustomGiftFields[key] = val;
        setCustomGiftFields({ ...CustomGiftFields });
    }; 

    const handleCustomGift = async () => {
        const {giftname, link, category, cost} = CustomGiftFields;
        console.log(CustomGiftFields);
        
        if(!giftname || !link || !cost){
            Toast.error("Gift Link/Cost/Name can't be empty!");
            return;
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
                                <h2 className="title-bold">Custom Gift</h2>
                            </IonText>
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
                                    type="url"
                                    placeholder="text"
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

                                <RoundSolidButton expand="block" onClick={handleCustomGift}>
                                    Create
                                </RoundSolidButton>
                            </div>
                        </form>
                    </IonCol>
                </IonRow>
            </IonContent>

        </IonPage>
    )
}

export default CustomGift;
