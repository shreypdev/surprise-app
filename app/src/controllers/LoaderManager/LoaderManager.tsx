
import React, {
    useContext,
    FC,
    useMemo,
    useState,
    useRef,
    createContext,
  } from 'react';
  import { IonLoading } from '@ionic/react';
  import {
    LoaderOptions,
    LoaderContextOutput,
    LoaderProviderProps,
  } from './model';
  
  export const LoaderContext = createContext<LoaderContextOutput | null>(null);
  
  const { Provider } = LoaderContext;
  
  export const useLoader = () => useContext(LoaderContext) as LoaderContextOutput;
  
  export const LoaderProvider: FC<LoaderProviderProps> = ({
    value,
    children,
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState<LoaderOptions>();
    const ref = useRef<HTMLIonLoadingElement | null>(null);
  
    // Returns functions to present / dismiss the IonLoading injected by the LoaderProvider.
    // NOTE: Does not actually create a new IonLoading component in the DOM.
    const showLoader = (message: string): void => {
      setOptions({
        ...options,
        ...value,
        message,
      });
      setIsOpen(true);
    };
  
    const contextValue = useMemo(() => {
      return {
        show: showLoader,
        configure: (loaderOptions: LoaderOptions) =>
          setOptions({
            ...options,
            ...value,
            ...loaderOptions,
          }),
        dismiss: () => setIsOpen(false),
      };
    }, [value]); // eslint-disable-line
  
    return (
      <Provider value={contextValue}>
        {children}
        <IonLoading
          ref={ref}
          isOpen={isOpen}
          onDidDismiss={() => setIsOpen(false)}
          {...options}
        />
      </Provider>
    );
  };