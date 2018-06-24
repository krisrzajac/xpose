import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  API_HEADLINES,
  API_HEADLINES_SUCCESS
} from "../constants/constants";
const defaultState = {
  isFetching: false,
  headlineArray: null,
  homePageLoaded: false,
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
        headlineArray: action.payload.models,
        homePageLoaded: true,
      };
    case HOME_PAGE_UNLOADED:
      return {};
    case API_HEADLINES:

      return {
        headlineArray: action.payload.models
      };
    case API_HEADLINES_SUCCESS:
      return {};
    default:
      return state;
  }
};
