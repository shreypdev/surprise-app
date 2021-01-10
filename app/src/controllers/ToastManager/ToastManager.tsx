import React, {
    useContext,
    FC,
    useMemo,
    useState,
    useRef,
    createContext,
  } from 'react';
  import { IonToast } from '@ionic/react';
  import {
    ReactToastOptions,
    ToastInstance,
    ToastProviderOptions,
    ToastProviderProps,
  } from './model';
  
  export const ToastContext = createContext<ToastProviderOptions | null>(null);
  
  const { Provider } = ToastContext;
  
  export const useToast = () => useContext(ToastContext) as ToastProviderOptions;
  
  export const ToastProvider: FC<ToastProviderProps> = ({ value, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState<ReactToastOptions>();
    const ref = useRef<HTMLIonToastElement | null>(null);
  
    // Returns functions to present / dismiss the IonToast injected by the ToastProvider.
    // NOTE: Does not actually create a new Toast component in the DOM.
    const createToast = (toastOptions: ReactToastOptions) => {
      const present = () => {
        setOptions({
          ...options,
          ...value,
          ...toastOptions,
        });
        setIsOpen(true);
      };
  
      return {
        present,
        dismiss: () => ref.current?.dismiss(),
      };
    };
  
    const createColoredToast = (color: 'success' | 'warning' | 'danger') => (
      message: string
    ): ToastInstance => {
      const toast = createToast({ message, color });
      toast.present();
      return toast;
    };
  
    const contextValue = useMemo(() => {
      return {
        create: createToast,
        success: createColoredToast('success'),
        error: createColoredToast('danger'),
        warning: createColoredToast('warning'),
      };
    }, [value]); // eslint-disable-line
  
    return (
      <Provider value={contextValue}>
        {children}
        <IonToast
          ref={ref}
          isOpen={isOpen}
          onDidDismiss={() => setIsOpen(false)}
          duration={2000}
          position={'top'}
          {...options}
        />
      </Provider>
    );
  };