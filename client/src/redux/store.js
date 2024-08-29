import { cartReducer } from "./Cart/reducer";
import { loadingReducer } from "./Loading/reducer";
import { loginReducer } from "./Login/reducer";
import { combineReducers, legacy_createStore } from "redux";

const rootReducer = combineReducers({
    loading: loadingReducer,
    loginState: loginReducer,
    cartData: cartReducer,
});

export const store = legacy_createStore(rootReducer);