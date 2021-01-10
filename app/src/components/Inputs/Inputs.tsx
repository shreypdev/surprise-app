import React from 'react';
import { IonLabel, IonInput } from '@ionic/react';
import {
  InputFieldType,
  InputWithLabelType,
} from './model';
import './Inputs.scss';

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

export const InputWithStackedLabel: React.FC<InputWithLabelType> = (props) => {
  const { position, ...otherProps } = props;
  return <InputWithLabel position="stacked" {...otherProps}></InputWithLabel>;
};
