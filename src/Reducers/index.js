import { combineReducers } from "redux";

function contactApp(state = [], action) {
  switch (action.type) {
    case "FETCH_CONTACTS":
      return action.payload;
    case "FETCH_CONTACT":
      return [...state, action.payload];
    case "CREATE_CONTACTS":
      return [...state, ...action.payload];
    case "Edit_CONTACTS":
      return action.payload;
    case "DELETE_CONTACTS":
      return action.payload;
    default:
      return state;
  }
}
export default combineReducers({
  contact: contactApp
});
