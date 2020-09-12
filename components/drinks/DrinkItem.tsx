import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

import { IDrink } from '../../interfaces';

export const DrinkItem = ({ drink }: { drink: IDrink }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: drink.strDrinkThumb }} style={styles.image} />
      <Text style={styles.text}>{drink.strDrink}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 21,
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#7e7e7e',
  },
  image: { width: 100, height: 100 },
});
