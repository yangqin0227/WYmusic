import { combineReducers } from "redux-immutable";

// 将子文件的 reducer导入 并且重命名

import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";

const cReducer = combineReducers({
    recommend:recommendReducer

})

export default cReducer;