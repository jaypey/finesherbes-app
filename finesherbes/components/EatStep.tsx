import * as React from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Card, SegmentedButtons, Text, Button } from 'react-native-paper';



const EatStep = () => {
  return (
    <View style={styles.container}>
        <View style={styles.loading}>
            <Text variant="displaySmall">Votre commande est en cours de livraison!</Text>
            <ActivityIndicator color={'#CF9FFF'} size={100} animating={true} />
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height:'100%'
    },
    loading:{
        paddingTop: '50%',
        height:'100%'
    }
});

export default EatStep;