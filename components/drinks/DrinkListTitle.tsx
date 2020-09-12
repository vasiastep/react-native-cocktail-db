import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const DrinkListTitle = ({ title }: { title: string }) => {
  return (
    <>
      <Text style={styles.text}>{title}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: 20,
    marginTop: 10,
    color: '#7e7e7e',
    fontFamily: 'Roboto',
  },
});
