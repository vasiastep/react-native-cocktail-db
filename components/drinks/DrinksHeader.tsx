import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const DrinksHeader = ({ goTo }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.leftItem}>Drinks</Text>
      <TouchableOpacity style={styles.rightItem} onPress={goTo}>
        <Image source={require('../../assets/Filter.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 50,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  leftItem: {
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: '700',
  },
  rightItem: {
    paddingRight: 20,
    fontSize: 35,
  },
});
