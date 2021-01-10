import { ToastOptions } from '@ionic/react';
import { ReactControllerProps } from '@ionic/react/dist/types/components/createControllerComponent';

export type ReactToastOptions = ToastOptions & Partial<ReactControllerProps>;

export type ToastInstance = {
  present: (options?: ReactToastOptions) => void;
  dismiss: () => void;
};

export interface ToastProviderProps {
  value?: ToastOptions;
}

export type ToastProviderOptions = {
  create: (options: ReactToastOptions) => ToastInstance;
  success: (message: string) => ToastInstance;
  error: (message: string) => ToastInstance;
  warning: (message: string) => ToastInstance;
};