import { createStore } from "redux";



import todoRuducers from "./redux/reducers/todoReducers";
const store = createStore(todoRuducers,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;