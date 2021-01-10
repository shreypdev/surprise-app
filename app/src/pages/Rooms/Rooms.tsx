import { IonPage, IonHeader, IonToolbar, IonText, IonContent, IonRow, IonCol, IonButton, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList } from '@ionic/react';
import React, { useState } from 'react';
import { addOutline, giftSharp} from 'ionicons/icons';
import {dummyListOfRooms} from '../../dummy-data/rooms';

import '../Login/Login.scss';
import './Rooms.scss';
import '../../theme/typography.css'
import { Redirect } from 'react-router';

const Rooms: React.FC = () => {

    const [newRoomClicked, setNewRoomClicked] = useState(false)
    const [listOfRooms, setListOfRooms] = useState(dummyListOfRooms);
    const colorPalette = ["primary", "secondary"]

    const addNewRoom = () => {
        console.log("Add new room clicked");
        setNewRoomClicked(true)
    }
    const removeRoom = () => {
        console.log("remove room clicked")
    }
    return (
        <IonPage>
            {newRoomClicked ? <Redirect to="/new-room-form" /> : <></>}
            <IonHeader>
                <IonToolbar>
                <IonText mode="ios" className="ion-text-left" color="primary">
                    <h1 className="title-bold rooms-header">Rooms</h1>
                </IonText>
                <IonButton fill='clear' className="toolbar-icon-space" slot="primary" onClick={()=> addNewRoom()}>
                    <IonIcon slot="icon-only" icon={addOutline} />
                </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList lines="full">
                    
                    {listOfRooms.map(({roomName, numOfGifts}, index) => {
                        // 0 for even and 1 for odd
                        const isEven = index % 2 === 0 ? 0 : 1;
                        return (
                            <IonItemSliding key={`room-item-${index}`}>
                                <IonItem color={colorPalette[isEven]}>
                                    <IonButton slot="start" fill='clear' color={colorPalette[isEven+1]} style={{fontSize:"unset"}}>
                                        <IonIcon slot="icon-only" icon={giftSharp} />
                                    </IonButton>
                                    <IonLabel>
                                        <IonText className="ion-text-wrap">
                                            <h1>{roomName}</h1>
                                            <div style={{marginTop: "5px"}}></div>
                                            <h3>{numOfGifts} gifts choosen</h3>
                                            <div style={{marginTop: "5px"}}></div>
                                        </IonText>
                                    </IonLabel>
                                </IonItem>
                                <IonItemOptions side="end">
                                    <IonItemOption onClick={() => removeRoom()} color={colorPalette[isEven+1]}>Remove</IonItemOption>
                                </IonItemOptions>
                        </IonItemSliding>
                    )})}
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default Rooms;

