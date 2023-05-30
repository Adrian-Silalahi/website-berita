import { combineReducers } from "redux";
import reducerGlobal from "./reducerGlobal"
import reducerHome from "./reducerHome"
import reducerCreateBlog from "./reducerCreateBlog";

const reducer = combineReducers({reducerHome, reducerGlobal, reducerCreateBlog})

export default reducer