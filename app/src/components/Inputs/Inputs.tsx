import React from 'react';
import { IonLabel, IonInput, IonButton, IonIcon, IonCol, IonRow } from '@ionic/react';
import {
  InputFieldType,
  InputWithLabelType,
} from './model';
import './Inputs.scss';
import { addOutline } from 'ionicons/icons';

export const InputField: React.FC<InputFieldType> = (props) => {
  const { children, ...otherProps } = props;
  return <IonInput {...otherProps}>{children}</IonInput>;
};

export const InputWithLabel: React.FC<InputWithLabelType> = (props) => {
  const { label, position, ...otherProps } = props;
  return (
    <>
      <IonLabel position={position}>{label}</IonLabel>
      <InputField {...otherProps}></InputField>
    </>
  );
};

export const InputWithButton: React.FC<InputWithLabelType> = (props) => {
  const { label, position, onClick, ...otherProps } = props;
  return (
    <>
      <IonRow>
        <IonCol size={"9"} style={{paddingLeft: '0px'}}>
          <IonLabel position={position}>{label}</IonLabel>
          <InputField {...otherProps}></InputField>
        </IonCol>
        <IonCol size={"3"}>
          <IonButton fill='outline' style={{padding:'0px'}} onClick={onClick} >
            <IonIcon slot="icon-only" color='primary' icon={addOutline} />
          </IonButton>
        </IonCol>
      </IonRow>
      
      
    </>
  );
};

export const InputWithStackedLabel: React.FC<InputWithLabelType> = (props) => {
  const { position, ...otherProps } = props;
  return <InputWithLabel position="stacked" {...otherProps}></InputWithLabel>;
};
