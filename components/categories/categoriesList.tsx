import React from 'react';
import { FlatList } from 'react-native';

import { ICategoryWithSelect } from '../../interfaces';

import { CategoryItem } from './CategoryItem';

export const CategoriesList = ({
  categories,
}: {
  categories: ICategoryWithSelect[];
}) => {
  return (
    <>
      {categories.length ? (
        <FlatList
          data={categories}
          renderItem={({ item }) => <CategoryItem item={item} />}
          keyExtractor={() => Math.random().toString()}
        />
      ) : null}
    </>
  );
};
