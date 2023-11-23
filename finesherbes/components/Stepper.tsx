import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import ScannerStep from './ScannerStep';
import OrderStep from './OrderStep';
import EatStep from './EatStep';
import BleManager, { Peripheral } from 'react-native-ble-manager';
import Buffer from "buffer";

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
 
function SendOrder(orderData: number[]){
  BleManager.enableBluetooth().then(() =>{
    BleManager.start().then(() => {
        console.log('BleManager initialized');
        BleManager.getBondedPeripherals().then( results => {
          console.log(results);
          let finesHerbes = results.find(x=> x.name == "Fines Herbes");
          if(finesHerbes == undefined){
            console.log("error");
          }else{
            BleManager.connect(finesHerbes.id).then(()=>{
              console.log("Connected");
              BleManager.retrieveServices(finesHerbes!.id, ["6e400001-b5a3-f393-e0a9-e50e24dcca9e"]).then((result)=>{
                console.log(result);
                BleManager.write(result.id, "6e400001-b5a3-f393-e0a9-e50e24dcca9e", "6E400002-B5A3-F393-E0A9-E50E24DCCA9E", orderData).then(() =>{
                  console.log("Data sent: " + orderData);
                })
              })
            });
          }
        })
        })
      })
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
      stepDisplayName: "Patienter",
      isCurrent: false
    },
]);

  const updateTableNumber = (tableNumber: number) => {
    setOrder({tableNumber: tableNumber, foodNumber: order.foodNumber});
    setSteps(updateSteps("order", steps))
  }

  const updateMealNumber = (foodNumber: number) => {
    setOrder({tableNumber: order.tableNumber, foodNumber: foodNumber});
    setSteps(updateSteps("eat", steps))
    SendOrder(Buffer.Buffer.from([order.tableNumber!, foodNumber!]).toJSON().data);
  }



  let stepComponent;
  switch (steps.find(x=> x.isCurrent == true)?.stepName) {
    case "scan":
      stepComponent = <ScannerStep updateTableNumber={updateTableNumber}></ScannerStep>
      break;
    case "order":
      stepComponent = <OrderStep updateMealNumber={updateMealNumber}></OrderStep>
      break;
    case "eat":
      stepComponent = <EatStep></EatStep>
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