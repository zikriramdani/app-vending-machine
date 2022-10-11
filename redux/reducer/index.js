import { combineReducers } from "redux";

import { productsReducer } from "./products/reducer";
import { coinsReducer } from "./coins/reducer";

export const rootReducer = combineReducers({
	products: productsReducer,
	coins: coinsReducer
});

export default rootReducer;