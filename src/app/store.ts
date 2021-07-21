// import { configureStore } from '@reduxjs/toolkit'
// import auth from '../reducers/auth'
// import message from '../reducers/message'

// export const store = configureStore({
//     reducer: {
//         // add reducer
//         auth, message
//     }
// })

// export type AppDispatch = typeof store.dispatch
// export type RootState = ReturnType<typeof store.getState>

import { createStore } from "redux";
import auth from "../reducers/auth";

// convert object to string and store in localStorage
function saveToLocalStorage(state: any) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("user", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

// load string from localStarage and convert back in to an Object
// invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("user");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

// delete account
function deleteFromLocalStorage() {
    localStorage.removeItem("user")
    console.log('Deleted!')   
}

// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
export const store = createStore(auth, loadFromLocalStorage());

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));
// store.subscribe(() => deleteFromLocalStorage())
