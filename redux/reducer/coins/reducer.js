import { initialState } from '../../action/coins/state';
import { actionType } from '../../action/coins/type';

export const coinsReducer = ( state = initialState, action ) => {
  switch(action.type) {
    // Read
    case actionType.loadCoins:
      state = {
        ...state,
        coinsList: action.payload
      }
      return state
    case actionType.loadCoinsResetData:
      return initialState
    default:
      return state
  };
};

export default coinsReducer;