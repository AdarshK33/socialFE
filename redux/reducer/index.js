import { combineReducers } from "redux";

import loginReducer from "./loginReducer";
import socialReducer from "./socialReducer";



const rootReducer = combineReducers({

  loginReducer,
  socialReducer
 
});

export default rootReducer;
