import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { SegmentedButtons, Text } from 'react-native-paper';
import QRCodeScanner from 'react-native-qrcode-scanner';

const ScannerStep = () => {
  const [value, setValue] = React.useState('');

  return (
    <View style={styles.container}>
        <View style={styles.scannerInput}>
            <Text variant="displaySmall">Scanner</Text>
            <QRCodeScanner onRead={(e) => {console.error(e.data)}} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:'100%',
    alignItems: 'center',
  },
  scannerInput: {
    marginTop: '50%'
  }
});

export default ScannerStep;