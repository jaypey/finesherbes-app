import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import ScannerStep from './ScannerStep';
import OrderStep from './OrderStep';

type Step = {
  stepName: string
  stepDisplayName: string
  isCurrent: boolean
}

type Order = {
  tableNumber?: number
  foodNumber?: number
}

const updateSteps = (value: string, steps: Step[]) => {
  return steps.map((e) => {
    if(e.stepName == value){
      e.isCurrent = true;
      return e;
    }
    e.isCurrent = false;
    return e;
  });
}
      
const Stepper = () => {

  const [order, setOrder] = React.useState<Order>({tableNumber: undefined, foodNumber: undefined});
  const [steps, setSteps] = React.useState<Step[]>([
    {
    stepName: "scan",
    stepDisplayName: "Scanner",
    isCurrent: true
    },
    {
      stepName: "order",
      stepDisplayName: "Commander",
      isCurrent: false
    },
    {
      stepName: "eat",
      stepDisplayName: "Savourer",
      isCurrent: false
    },
]);

  const updateTableNumber = (tableNumber: number) => {
    setOrder({tableNumber: tableNumber, foodNumber: order.foodNumber});
    setSteps(updateSteps("order", steps))
  }
  let stepComponent;
  switch (steps.find(x=> x.isCurrent == true)?.stepName) {
    case "scan":
      stepComponent = <ScannerStep updateTableNumber={updateTableNumber}></ScannerStep>
      break;
    case "order":
      stepComponent = <OrderStep></OrderStep>
      break;
    case "eat":
      break;
    default:
      break;
  }

  return (
    <View style={styles.stepper}>
      <SegmentedButtons
      value={steps.find(x=>x.isCurrent)!.stepName}
      onValueChange={() => {}}
      buttons={
        steps.map((e) => {
          return { value: e.stepName, label: e.stepDisplayName, disabled: !e.isCurrent}
        })
      }
      />
      {stepComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  stepper: {
      paddingTop: 32,
      paddingHorizontal: 24,
  },
});

export default Stepper;