import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { DrinksProps, IRootState, ICategory, IDrink } from '../interfaces';

import { DrinksHeader } from '../components/drinks/DrinksHeader';
import { DrinksList } from '../components/drinks/DrinksList';
import { DRINKS_URL, FILTER_LIST_URL } from '../components/common/constants';

export const DrinksScreen = ({ navigation }: DrinksProps) => {
  const [allDrinks, setAllDrinks] = useState<IDrink[][]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const { categories, localCategories } = useSelector(
    (state: IRootState) => state.cocktails
  );

  useEffect(() => {
    setSelectedFilters(
      categories
        .filter((category) => category.selected)
        .map((item) => item.strCategory)
    );
  }, [categories]);

  const showFilteredDrinks = async () => {
    const requests = selectedFilters!.map((category) =>
      axios.get(`${DRINKS_URL}${category}`)
    );

    const responses = await Promise.all(requests);

    setAllDrinks(responses.map((result) => result.data.drinks));
  };

  const showAllDrinks = async () => {
    const { drinks } = await (await axios.get(FILTER_LIST_URL)).data;

    const requests = drinks.map((category: ICategory) =>
      axios.get(`${DRINKS_URL}${category.strCategory}`)
    );

    const responses = await Promise.all(requests);

    setAllDrinks(responses.map((result: any) => result.data.drinks));
  };

  useEffect(() => {
    if (selectedFilters.length) {
      showFilteredDrinks();
    } else if (!selectedFilters.length && !localCategories.length) {
      showAllDrinks();
    }
  }, [selectedFilters]);

  return (
    <>
      <DrinksHeader goTo={() => navigation.navigate('Filters')} />

      {allDrinks.length ? (
        <View>
          <DrinksList drinks={allDrinks} title={'ListName'} />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>No selected filters</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 20,
  },
});
