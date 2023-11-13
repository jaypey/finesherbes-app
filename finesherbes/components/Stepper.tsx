import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import ScannerStep from './ScannerStep';

type Step = {
  stepName: string
  stepDisplayName: string
  isCurrent: boolean
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

  return (
    <>
      <SegmentedButtons
      value={steps.find(x=>x.isCurrent)!.stepName}
      onValueChange={(v) => {setSteps(updateSteps(v, steps))}}
      buttons={
        steps.map((e) => {
          return { value: e.stepName, label: e.stepDisplayName, disabled: !e.isCurrent}
        })
      }
      />
      <ScannerStep></ScannerStep>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Stepper;