import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { SegmentedButtons, Text } from 'react-native-paper';
import QRCodeScanner from 'react-native-qrcode-scanner';

const ScannerStep = () => {

  const readCode = (readTxt: string) => {
    console.log(readTxt);

    switch (readTxt) {
      case "1":
        
        break;
      case "2":
        
        break;
      case "3":
        
        break;       
      case "4":
      
      break;
      case "5":
        
        break;
      case "6":
        
        break;     
      default:
        console.error("Invalid code!");
        break;
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.scannerInput}>
            <Text variant="displaySmall">Scanner</Text>
            <QRCodeScanner onRead={(e) => readCode(e.data)} />
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