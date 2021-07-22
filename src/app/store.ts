import { configureStore } from '@reduxjs/toolkit'
import { createStore, compose, applyMiddleware } from 'redux'
import auth from '../reducers/auth'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

function saveToLocalStorage(state: any) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("user", serialisedState);
  } catch (e) {
    console.warn(e);    
  }
}

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

export const store = createStore(
  auth, 
  loadFromLocalStorage(),
  composeEnhancers()
)
store.subscribe(() => saveToLocalStorage(store.getState()))

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>