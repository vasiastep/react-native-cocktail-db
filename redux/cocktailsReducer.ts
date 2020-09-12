import { IAction, IState } from '../interfaces';
import {
  TOGGLE_CATEGORY,
  SET_LOCAL_CATEGORIES,
  SET_GLOBAL_CATEGORIES,
} from './types';

const initialState: IState = {
  categories: [],
  localCategories: [],
};

export const cocktailsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case TOGGLE_CATEGORY:
      return {
        ...state,
        localCategories: state.localCategories.map((category) =>
          category === action.payload
            ? {
                ...category,
                selected: !category.selected,
              }
            : category
        ),
      };
    case SET_LOCAL_CATEGORIES:
      return {
        ...state,
        localCategories: action.payload,
      };
    case SET_GLOBAL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return { ...state };
  }
};
