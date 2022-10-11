import { actionType } from '../coins/type';

// Data Json
import DataCoins from "../../../assets/data/coins.json"

// Read
export const getListCoins = () => {
  return (dispatch) => {
    return dispatch(saveListCoins(DataCoins));
  };
};

// Read
export const saveListCoins = (payload) => {
  return {
      type: actionType.loadCoins,
      payload: payload
  };
};