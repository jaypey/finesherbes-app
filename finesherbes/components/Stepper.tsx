import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';

const Stepper = () => {
  const [value, setValue] = React.useState('');

  return (
    <SegmentedButtons
    value={value}
    onValueChange={setValue}
    buttons={[
        {
        value: 'walk',
        label: 'Scanner',
        },
        {
        value: 'train',
        label: 'Commander',
        disabled: true
        },
        { 
        value: 'drive',
        label: 'Savourer',
        disabled: true
        },
    ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Stepper;