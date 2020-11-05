import { combineReducers } from "redux";
import filterReducer from "./filters/meals.reducer";
import mealsReducer from "./filters/meals.reducer";

const rootReducer = combineReducers(
    {
        mealsData: mealsReducer
    }
)

export default rootReducer