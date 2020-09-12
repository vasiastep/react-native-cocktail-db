import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const DrinksFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Time to choose something</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 20,
    paddingBottom: 100,
  },
});
