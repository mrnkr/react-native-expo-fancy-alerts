declare module 'react-native-expo-fancy-alerts' {
  import React from 'react';
  import { ColorValue } from 'react-native';
  
  export type FancyAlertProps = React.PropsWithChildren<{
    visible: boolean;
    onRequestClose: () => void;
    icon: React.ReactNode;
    style: {
      backgroundColor: ColorValue;
    };
  }>;

  export const FancyAlert: React.FC<FancyAlertProps>;

  export type LoadingIndicatorProps = {
    visible: boolean;
  };

  export const LoadingIndicator: React.FC<LoadingIndicatorProps>;
}
