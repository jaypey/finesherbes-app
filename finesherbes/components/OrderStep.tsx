import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Card, SegmentedButtons, Text, Button } from 'react-native-paper';

type Props = {
  updateMealNumber: (mealNumber: number) => void;
}

const OrderStep = ({updateMealNumber}: Props) => {
  return (
      <ScrollView style={styles.scrollView}>
        <Card style={styles.cardMeal}>
          <Card.Content>
            <Text variant="titleLarge">Poutine</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://img.cuisineaz.com/660x660/2014/04/07/i91898-poutine.jpg' }} />
          <Card.Actions>
            <Button rippleColor={'#bbdefb'} onPress={() => updateMealNumber(1)}>Commander</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.cardMeal}>
          <Card.Content>
            <Text variant="titleLarge">Saumon</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://healthyfitnessmeals.com/wp-content/uploads/2018/04/honey-garlic-salmon-3.jpg' }} />
          <Card.Actions>
            <Button rippleColor={'#bbdefb'} onPress={() => updateMealNumber(2)}>Commander</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.cardMeal}>
          <Card.Content>
            <Text variant="titleLarge">Pâtes au pesto</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://www.funfoodfrolic.com/wp-content/uploads/2020/09/Basil-Pesto-Thumbnail.jpg' }} />
          <Card.Actions>
            <Button rippleColor={'#bbdefb'} onPress={() => updateMealNumber(3)}>Commander</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.cardMeal}>
          <Card.Content>
            <Text variant="titleLarge">Sandwich Shish taouk</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://lecarnetdemc.ca/files/uploads/2020/06/Recette-Sandwich-shish-taouk-au-ro%CC%82ti-de-dinde-Butterball-.jpg' }} />
          <Card.Actions>
            <Button rippleColor={'#bbdefb'} onPress={() => updateMealNumber(4)}>Commander</Button>
          </Card.Actions>
        </Card>
        <Card style={{opacity: 0}}>
          <Card.Title title="Card Title" subtitle="Card Subtitle" />
          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button>Commander</Button>
          </Card.Actions>
        </Card>
      </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    marginTop: 0,
    padding:10
  },
  cardMeal: {
    marginTop: 10,
    marginBottom: 10
  }

});

export default OrderStep;