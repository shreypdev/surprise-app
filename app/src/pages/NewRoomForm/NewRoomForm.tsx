import { IonPage, IonHeader, IonToolbar, IonText, IonButton, IonIcon, IonCol, IonContent, IonRouterLink, IonRow, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonChip } from '@ionic/react';
import { addOutline, close, giftSharp } from 'ionicons/icons';
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { RoundSolidButton } from '../../components/Buttons/Buttons';
import { InputWithButton, InputWithStackedLabel } from '../../components/Inputs/Inputs';
import { useLoader } from '../../controllers/LoaderManager/LoaderManager';
import { useToast } from '../../controllers/ToastManager/ToastManager';
import { dummyListOfFriends, dummyListOfInterests } from '../../dummy-data/rooms';
import { NewRoomFormModel, RawFieldsModel } from './model';

import './NewRoomForm.scss';

const initialNewRoomForm: NewRoomFormModel = {
    roomName: '',
    giftFor: '', 
    budget: ''
}

const initialRawFields: RawFieldsModel = {
    interest: '',
    email: ''
}

const initialList: string[] = []

const NewRoomForm: React.FC = () => {

    const [interestList, setInterestList] = useState(initialList)
    const [newRoomFormFields, setNewRoomFormFields] = useState(initialNewRoomForm)
    const [friendsList, setFriendsList] = useState(initialList)
    const colorPalette = ["primary", "secondary"]
    const [rawFields, setRawFields] = useState(initialRawFields)
    const [backBtnClicked, setBackBtnClicked] = useState(false)
    const [newRoomCreated, setNewRoomCreated] = useState(false)

    const Toast = useToast();
    const Loader = useLoader();

    const onInputChange = (val: any, key: keyof NewRoomFormModel) => {
        newRoomFormFields[key] = val;
        setNewRoomFormFields({ ...newRoomFormFields });
    };

    const onRawFieldsInputChange = (val: any, key: keyof RawFieldsModel) => {
        rawFields[key] = val; 
        setRawFields({...rawFields})
    }

    const addInterests = () => {
        const newInterestsList: string[] = interestList;
        newInterestsList.push(rawFields.interest)
        setInterestList(newInterestsList);
        rawFields.interest = ''; 
        setRawFields({...rawFields})        
    }

    const addFriends = () => {
        const newFriendList: string[] = friendsList;
        newFriendList.push(rawFields.email);
        setFriendsList(newFriendList);
        rawFields.email = '';
        setRawFields({...rawFields});
    }

    const createNewRoom = () => {
        const {roomName, giftFor, budget} = newRoomFormFields;
        // validate all fields
        console.log(newRoomFormFields);
        
        
        if(!roomName || !giftFor || !budget) {
            Toast.error("Fields cannot be empty!")
        }
        setNewRoomCreated(true)
        console.log("create new room called")
    }

    const removeFriend = () => {
        console.log("remove friend")
    }

    const removeInterest = () => {
        console.log("remove interests");
    }

    return (
        <IonPage>
            {/* TODO change the redirect to the newly created room */}
            {backBtnClicked ? <Redirect to="/rooms" /> : <></>}
            {newRoomCreated ? <Redirect to="/room" /> : <></>}
            <IonHeader>
                <IonToolbar>
                <IonText mode="ios" className="ion-text-left" color="primary">
                    <h1 className="title-bold rooms-header">New Room</h1>
                </IonText>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonRow className="ion-justify-content-center">
                    <IonCol className="new-room-form">
                        <form>
                            <div className="new-room-form-inputs">
                                <InputWithStackedLabel 
                                    label = {"Room Name"}
                                    type="text"
                                    placeholder="Ex: Alysha's Birthday"
                                    clearInput
                                    clearOnEdit
                                    required
                                    className="form-input-item"
                                    onIonChange={(e: any) => onInputChange(e.target.value, 'roomName')}
                                />
                                <InputWithStackedLabel 
                                    label = {"Gift For?"}
                                    type="text"
                                    placeholder="Ex: Alysha"
                                    clearInput
                                    clearOnEdit
                                    required
                                    className="form-input-item"
                                    onIonChange={(e: any) => onInputChange(e.target.value, 'giftFor')}
                                />
                                
                                <InputWithButton 
                                    label = {"Interests"}
                                    type="text"
                                    placeholder="Ex: Clothing"
                                    clearInput
                                    clearOnEdit
                                    required
                                    className="form-input-item"
                                    onIonChange={(e: any)=> onRawFieldsInputChange(e.target.value, 'interest')}
                                    onClick={addInterests}
                                />
                                {/* TODO: add functionality of removing interests  */}
                                {interestList 
                                ? interestList.map((val, index) => {
                                    return (
                                        <>
                                        <IonChip color='primary'>
                                            <IonLabel>{val}</IonLabel>
                                            <IonIcon icon={close} onClick={removeInterest} />
                                        </IonChip>
                                        {index === interestList.length -1 
                                        ? <><br/><br/></>
                                        : <></>}
                                        </>
                                    )
                                })
                                : <></>
                                }

                                <InputWithStackedLabel 
                                    label = {"Budget"}
                                    type="number"
                                    placeholder="Ex: 50"
                                    clearInput
                                    clearOnEdit
                                    required
                                    className="form-input-item"
                                    onIonChange={(e: any) => onInputChange(e.target.value.toString(), 'budget')}
                                />
                                <InputWithButton 
                                    label = {"Add Friends"}
                                    type="email"
                                    placeholder="Enter your friend's email"
                                    clearInput
                                    clearOnEdit
                                    required
                                    className="form-input-item"
                                    onIonChange={(e: any)=> onRawFieldsInputChange(e.target.value, 'email')}
                                    onClick={addFriends}
                                />
                                {/* TODO: add functionality of removing friends  */}
                                <IonList inset style={{margin:'0px'}}>
                                    {
                                        friendsList.length !== 0 
                                        ?   friendsList.map((email, index) => {
                                                // 0 for even and 1 for odd
                                                const isEven = index % 2 === 0 ? 0 : 1;
                                                return (
                                                    <IonItemSliding key={`room-item-${index}`}>
                                                        <IonItem color={colorPalette[isEven]} >
                                                            
                                                            <IonLabel>
                                                                <IonText className="ion-text-wrap">
                                                                    <h3>{email}</h3>
                                                                    <div style={{marginTop: "5px"}}></div>
                                                                </IonText>
                                                            </IonLabel>
                                                        </IonItem>
                                                        <IonItemOptions side="end">
                                                            <IonItemOption onClick={() => removeFriend()} color={colorPalette[isEven+1]}>Remove</IonItemOption>
                                                        </IonItemOptions>
                                                </IonItemSliding>
                                            )})
                                        : <IonText color="primary">
                                            <p>No Friends added.</p>
                                        </IonText>
                                    }
                                </IonList>
                                
                                <IonRow>
                                    <IonCol size="4">
                                        <RoundSolidButton expand="block" onClick={()=>setBackBtnClicked(true)}>
                                            Back
                                        </RoundSolidButton>
                                    </IonCol>
                                    <IonCol size="4"></IonCol>
                                    <IonCol size="4">
                                        <RoundSolidButton expand="block" onClick={createNewRoom}>
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

export default NewRoomForm;