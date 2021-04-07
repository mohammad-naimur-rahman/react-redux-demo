import { combineReducers } from "redux";
import breadReducer from "./bread/breadReducer";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    bread: breadReducer,
    user: userReducer
});

export default rootReducer;