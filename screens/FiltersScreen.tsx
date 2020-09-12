import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  FiltersProps,
  ICategory,
  IRootState,
  ICategoryWithSelect,
} from '../interfaces';

import { setFetchedCategories, applyCategories } from '../redux/actions';

import { CategoriesList } from '../components/categories/categoriesList';
import { AppButton } from '../components/common/Button';

export const FiltersScreen = ({ navigation }: FiltersProps) => {
  const dispatch = useDispatch();
  const { localCategories } = useSelector(
    (state: IRootState) => state.cocktails
  );

  useEffect(() => {
    if (localCategories.length) {
      return;
    }

    (async () => {
      const { drinks } = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
      ).then((data) => data.json());

      dispatch(
        setFetchedCategories(
          drinks.map(
            (drink: ICategory): ICategoryWithSelect => ({
              ...drink,
              selected: true,
            })
          )
        )
      );
    })();
  }, []);

  const selectCategories = () => {
    dispatch(applyCategories(localCategories));
    navigation.push('Drinks');
  };

  return (
    <View>
      <CategoriesList categories={localCategories} />
      <AppButton title="Apply" onPress={selectCategories} />
    </View>
  );
};
