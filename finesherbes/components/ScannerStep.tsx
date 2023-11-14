import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { SegmentedButtons, Text } from 'react-native-paper';
import QRCodeScanner from 'react-native-qrcode-scanner';

type Props = {
  updateTableNumber: (tableNumber: number) => void;
}

const ScannerStep = ({updateTableNumber}: Props) => {

  const readCode = (readTxt: string) => {
    console.log(readTxt);
    let tableNum = parseInt(readTxt);
    if (!isNaN(tableNum) && tableNum > 0 && tableNum < 7 ) {
      updateTableNumber(tableNum);
    }else{
      console.error("Invalid code!");
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.scannerInput}>
            <QRCodeScanner fadeIn={true} vibrate={true} topContent={<Text variant="displaySmall">Scanner votre table</Text>} showMarker={true} reactivateTimeout={15} onRead={(e) => readCode(e.data)} />
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  scannerInput: {
    marginTop: 0
  }
});

export default ScannerStep;