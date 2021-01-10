import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { ButtonProps, ButtonWithIconProps } from './model';
import './Buttons.scss';

export const HighEmphasisBasicButton: React.FC<ButtonProps> = (props) => {
  const {
    color,
    expand,
    shape,
    size,
    children,
    disabled,
    className,
    onClick,
    ...otherProps
  } = props;
  return (
    <IonButton
      expand={expand}
      color={color}
      shape={shape}
      fill="solid"
      size={size}
      className={'highEmphasisBasicButton'}
      disabled={disabled}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </IonButton>
  );
};

export const OutlineButton: React.FC<ButtonProps> = (props) => {
  const {
    color,
    expand,
    shape,
    fill,
    size,
    children,
    disabled,
    onClick,
    ...otherProps
  } = props;
  return (
    <IonButton
      expand={expand}
      color={color}
      shape={shape}
      fill="outline"
      size={size}
      disabled={disabled}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </IonButton>
  );
};

export const RoundSolidButton: React.FC<ButtonProps> = (props) => {
  const { shape, children, ...otherProps } = props;
  return (
    <HighEmphasisBasicButton shape="round" {...otherProps}>
      {children}
    </HighEmphasisBasicButton>
  );
};

export const RoundOutlineButton: React.FC<ButtonProps> = (props) => {
  const { fill, children, ...otherProps } = props;
  return (
    <OutlineButton shape="round" {...otherProps}>
      {children}
    </OutlineButton>
  );
};

export const IconOnlyButton: React.FC<ButtonWithIconProps> = (props) => {
  const { slot, icon, onClick, ...otherProps } = props;
  return (
    <IonButton onClick={onClick} {...otherProps}>
      <IonIcon slot="icon-only" icon={icon} />
    </IonButton>
  );
};