import {
  SET_LOCAL_CATEGORIES,
  TOGGLE_CATEGORY,
  SET_GLOBAL_CATEGORIES,
} from './types';
import { IAction, ICategory, ICategoryWithSelect } from '../interfaces';

export const setFetchedCategories = (categories: ICategory[]): IAction => ({
  type: SET_LOCAL_CATEGORIES,
  payload: categories,
});

export const applyCategories = (
  categories: ICategoryWithSelect[]
): IAction => ({
  type: SET_GLOBAL_CATEGORIES,
  payload: categories,
});

export const toggleCategory = (category: ICategory): IAction => ({
  type: TOGGLE_CATEGORY,
  payload: category,
});
