import { actionType } from '../products/type';

// Data Json
import DataProducts from "../../../assets/data/products.json";

// Read
export const getListProducts = () => {
  return (dispatch) => {
    return dispatch(saveListProducts(DataProducts));
  };
};

// Read
export const saveListProducts = (payload) => {
  return {
      type: actionType.loadProducts,
      payload: payload
  };
};