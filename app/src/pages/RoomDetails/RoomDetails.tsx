import { IonPage, IonHeader, IonToolbar, IonText, IonContent, IonList, IonLabel, IonItem, IonButton, IonIcon, IonRow, IonCol, IonCardContent, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonItemSliding, IonItemOption, IonItemOptions, IonItemDivider, IonBackButton, IonButtons } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { RoundSolidButton } from '../../components/Buttons/Buttons';
import { dummyListOfFriends } from '../../dummy-data/rooms';
import { auth } from '../../firebase';
import axios from 'axios';

const initialList: string[] = []

const initialRoomDets = {
    "roomName": "",
    "giftFor": "",
    "budget": 0,
    "admin": "",
    "members": [],
    "interests": [],
    "giftSelected": [{
        "name": "",
        "link": "",
        "category": "",
        "cost": 0,
        "votes": 0,
        "finalized": false
    }]
}

const RoomDetails: React.FC = (props: any) => {
    const [giftsList, setGiftsList] = useState([])
    const [roomDets, setRoomDets] = useState(initialRoomDets);
    const [friendsList, setFriendsList] = useState([])
    
    useEffect(()=> {
        const getRoomDets = async () => {
            if(auth.currentUser){
                console.log("ttt");
                
                const token = Object.entries(auth?.currentUser!)[6][1];
                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };
                
                const response = await axios.get( 
                    `https://us-central1-surprise-app-2775f.cloudfunctions.net/rooms/${props.location.state.roomToken}`,
                    config
                );
                console.log(response.data);
                setRoomDets(response.data)
                setGiftsList(response.data.giftSelected)
                setFriendsList(response.data.members)
            }
        }
        getRoomDets()
    }, [])
    const colorPalette = ["primary", "secondary"]

    return (
        <IonPage>
            {/* TODO change the redirect to the newly created room */}
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/rooms" text={''} />
                </IonButtons>
                <IonText mode="ios" className="ion-text-center" color="primary">
                    <h1 className="title-bold">{roomDets.roomName}</h1>
                </IonText>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>

                <IonList lines="full">
                    <IonItem color = 'secondary'>
                        <IonLabel>
                            <IonText className="ion-text-wrap" >
                                <h2>Budget: {roomDets.budget}</h2>
                            </IonText>
                        </IonLabel>
                    </IonItem>
                    <IonItem color = 'primary'>
                        Search Gifts
                        <IonButton slot="end" fill='clear' color={'secondary'}>
                            <IonIcon slot="icon-only" icon={chevronForwardOutline} />
                        </IonButton>
                    </IonItem>
                    <IonItem color = 'secondary'>
                        Add a custom gift
                        <IonButton slot="end" fill='clear' color={'primary'}>
                            <IonIcon slot="icon-only" icon={chevronForwardOutline} />
                        </IonButton>
                    </IonItem>
                </IonList>

                <IonRow>
                    <IonCol>
                    <IonText color = 'primary'>
                        <h1 style={{marginLeft: '10px'}}>Gifts List</h1>
                    </IonText>
                    {giftsList.length!==0 
                    ? giftsList.map(({name, category, cost, votes})=>(
                        <IonCard mode="ios" className="card" color="primary" style={{margin:'10px'}}>
                            <IonRow>
                                <IonCol size="8">
                                    <IonText color = 'secondary'>
                                        <h3 style={{margin:'8px'}}>{name}</h3>
                                        <h5 style={{margin:'8px'}}>{category}</h5>
                                    </IonText>
                                </IonCol>
                                <IonCol size="4">
                                    <IonText color = 'secondary'>
                                        <h4 style={{margin:'8px', marginTop:'10px'}}>${cost}</h4>
                                        <h4 style={{margin:'8px'}}>{votes} votes</h4>
                                    </IonText>
                                </IonCol>
                            </IonRow>

                            <IonItem color='primary' style={{marginRight: '20px'}}>
                                <RoundSolidButton fill="outline" size='small' color='secondary' slot="end" style={{marginTop: '10px', marginBottom: '10px', marginRight:'10px'}}>Remove</RoundSolidButton>
                                <RoundSolidButton fill="outline" size='small' color='secondary' slot="end" style={{marginTop: '10px', marginBottom: '10px'}}>Vote</RoundSolidButton>
                            </IonItem>
                        </IonCard>
                    ))
                    :<IonText color="primary" >
                        <p style={{marginLeft: '20px'}}>No Gifts added.</p>
                    </IonText>}
                    
                    <hr style={{backgroundColor: "#f85d61"}}/>
                    <IonText color = 'primary'>
                        <h1 style={{marginLeft: '10px'}}>Members</h1>
                    </IonText>
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
                                                <IonItemOption onClick={()=> console.log("remove freind")} color={colorPalette[isEven+1]}>Remove</IonItemOption>
                                            </IonItemOptions>
                                    </IonItemSliding>
                                )})
                            : <IonText color="primary">
                                <p style={{marginLeft: '20px'}}>No Friends added.</p>
                            </IonText>
                        }
                    </IonList>
                    
                    </IonCol>
                    
                </IonRow>

            </IonContent>

        </IonPage>
    )
}

export default RoomDetails;