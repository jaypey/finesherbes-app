import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { SegmentedButtons, Text } from 'react-native-paper';


const OrderStep = () => {


  return (
    <View style={styles.container}>
        <Text>Order step</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%'
  },
  scannerInput: {
    marginTop: 0
  }
});

export default OrderStep;