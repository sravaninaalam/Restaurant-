import { combineReducers } from "redux";
import menureducer from "./menureducer";
import orderreducer from "./orderreducer";
import tablereducer from "./tablereducer";

const reducer=combineReducers({
  tablereducer:tablereducer,
  menureducer:menureducer,
  orderreducer:orderreducer
})
export default reducer