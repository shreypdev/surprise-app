import { ReactControllerProps } from '@ionic/react/dist/types/components/createControllerComponent';

export type LoaderProps = {
  isOpen?: boolean;
  backdropDismiss?: boolean;
  showBackdrop?: boolean;
  cssClass?: string | string[];
  duration?: number;
  message?: string;
  spinner?:
    | 'bubbles'
    | 'circles'
    | 'circular'
    | 'crescent'
    | 'dots'
    | 'lines'
    | 'lines-small'
    | null;
  onDidDismiss?: any;
};

export type LoaderOptions = LoaderProps & Partial<ReactControllerProps>;

export type LoaderContextOutput = {
  show: (message: string) => void;
  configure: (options: LoaderOptions) => void;
  dismiss: () => void;
};

export interface LoaderProviderProps {
  value?: LoaderOptions;
}