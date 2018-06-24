import {
  BATTLE_PAGE_UNLOADED,
  BATTLE_PAGE_LOADED,
  API_BATTLE_LOAD,
} from "../constants/constants";


const defaultState = {
  battleObject: {instanceWizards: [
    null,
    null]},
  battleObjectLoaded: false,
}


export default (state = defaultState, action) => {

  switch (action.type) {
    case BATTLE_PAGE_LOADED:
      return {
        ...state,
        battleObject: action.payload[0].model,
        battleObjectLoaded: true,
      };
    case BATTLE_PAGE_UNLOADED:
      return {};
    case API_BATTLE_LOAD:
      return {
        battleObject: action.payload.model,
        battleObjectLoaded: true
      };
    default:
      return state;
  }
};
