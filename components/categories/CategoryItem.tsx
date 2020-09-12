import React from 'react';
import { useDispatch } from 'react-redux';
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { toggleCategory } from '../../redux/actions';

import { ICategoryWithSelect } from '../../interfaces';

export const CategoryItem = ({ item }: { item: ICategoryWithSelect }) => {
  const dispatch = useDispatch();

  const selectItem = () => {
    dispatch(toggleCategory(item));
  };

  return (
    <TouchableOpacity style={styles.wrap} onPress={selectItem}>
      <Text style={styles.text}>{item.strCategory}</Text>
      {item.selected ? (
        <Image source={require('../../assets/Checkbox.png')} />
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    fontFamily: 'Roboto',
    color: '#7e7e7e',
  },
});
