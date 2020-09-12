import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

import { IDrink } from '../../interfaces';

import { DrinkItem } from './DrinkItem';
import { DrinkListTitle } from './DrinkListTitle';
import { DrinksFooter } from './DrinksFooter';

export const DrinksList = ({
  drinks,
  title,
}: {
  drinks: IDrink[][];
  title: string;
}) => {
  const [state, setState] = useState({
    drinkList: drinks[0],
    nextIndex: 1,
  });

  return (
    <>
      <FlatList
        data={state.drinkList}
        renderItem={({ item }) => <DrinkItem drink={item} />}
        keyExtractor={(item) =>
          item.idDrink ? item.idDrink.toString() : Math.random().toString()
        }
        ListHeaderComponent={<DrinkListTitle title={title} />}
        ListFooterComponent={<DrinksFooter />}
        onEndReachedThreshold={1}
        onEndReached={() => {
          if (!drinks[state.nextIndex]) {
            return null;
          }
          setState((prev) => {
            return {
              ...prev,
              nextIndex: prev.nextIndex + 1,
              drinkList: prev.drinkList.concat(drinks[prev.nextIndex]),
            };
          });
        }}
      />
    </>
  );
};
