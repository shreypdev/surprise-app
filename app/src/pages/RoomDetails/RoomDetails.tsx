import { IonPage, IonHeader, IonToolbar, IonText, IonContent, IonList, IonLabel, IonItem, IonButton, IonIcon, IonRow, IonCol, IonCardContent, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonItemSliding, IonItemOption, IonItemOptions } from '@ionic/react';
import { chevronForwardOutline, colorPalette, giftSharp } from 'ionicons/icons';
import React, { useState } from 'react';
import { RoundSolidButton } from '../../components/Buttons/Buttons';

const RoomDetails: React.FC = () => {
    return (
        <IonPage>
            {/* TODO change the redirect to the newly created room */}
            <IonHeader>
                <IonToolbar>
                <IonText mode="ios" className="ion-text-left" color="primary">
                    <h1 className="title-bold rooms-header">Alysha's Birthday</h1>
                </IonText>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>

                <IonList lines="full">
                    <IonItem color = 'secondary'>
                        <IonLabel>
                            <IonText className="ion-text-wrap" >
                                <h2>Budget: 50$</h2>
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
                        <h1>Gifts List</h1>
                    </IonText>
                    <IonCard mode="ios" className="card" color="primary" style={{margin:'10px'}}>
                        <IonRow>
                            <IonCol size="8">
                                <IonText color = 'secondary'>
                                    <h2 style={{margin:'8px'}}>Product X</h2>
                                    <h5 style={{margin:'8px'}}>Technology</h5>
                                </IonText>
                            </IonCol>
                            <IonCol size="4">
                                <IonText color = 'secondary'>
                                    <h4 style={{margin:'8px', marginTop:'10px'}}>$49.99</h4>
                                    <h4 style={{margin:'8px'}}>4 votes</h4>
                                </IonText>
                            </IonCol>
                        </IonRow>

                        <IonItem color='primary' style={{marginRight: '20px'}}>
                            <RoundSolidButton fill="outline" color='secondary' slot="end">Vote</RoundSolidButton>
                        </IonItem>
                    </IonCard>
                    
                    </IonCol>
                    
                </IonRow>

            </IonContent>

        </IonPage>
    )
}

export default RoomDetails;