import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Filters: any;
  Drinks: any;
};

export type FiltersScreenRoutesProp = RouteProp<RootStackParamList, 'Filters'>;
export type DrinksScreenRoutesProp = RouteProp<RootStackParamList, 'Drinks'>;

export type FiltersProps = {
  navigation: StackNavigationProp<any>;
};
export type DrinksProps = {
  navigation: StackNavigationProp<any>;
};

export interface ICategory {
  strCategory: string;
}

export interface ICategoryWithSelect extends ICategory {
  selected: boolean;
}

export interface IDrink {
  idDrink: string | number;
  strDrink: string;
  strDrinkThumb: string;
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface IRootState {
  cocktails: IState;
}

export interface IState {
  categories: ICategoryWithSelect[];
  localCategories: ICategoryWithSelect[];
}
