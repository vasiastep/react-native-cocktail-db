import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const AppButton = ({ onPress, title }: any) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: '#000',
    borderRadius: 2,
    paddingVertical: 15,
    paddingHorizontal: 12,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  appButtonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Roboto',
  },
});
