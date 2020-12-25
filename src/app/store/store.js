import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import appReducer from './reducers';

const saveState = (state) => {
  try {
    const serialisedState = JSON.stringify(state);

    window.localStorage.setItem('app_state', serialisedState);
  } catch (error) {
    // console.log(error);
  }
};

const loadState = () => {
  try {
    const serialisedState = window.localStorage.getItem('app_state');

    if (!serialisedState) return undefined;

    return JSON.parse(serialisedState);
  } catch (error) {
    return undefined;
  }
};

const oldState = loadState();

const store = createStore(appReducer, oldState, devToolsEnhancer());

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
