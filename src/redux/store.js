import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducers';
import throttle from 'lodash/throttle';

const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if(serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (e) {
      return undefined;
    }
  };
  
  const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (e) {
      // Ignore write errors;
    }
  };
  
  const persistedState = loadState();
  
  
  const store = createStore(rootReducer,persistedState,compose(applyMiddleware(thunk.withExtraArgument())))
   // rootReducer,persistedState,compose(applyMiddleware(thunk.withExtraArgument()),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    // Others reducers...
  // );

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));
  
  
// (process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
// const store = createStore(rootReducer, compose(applyMiddleware(thunk.withExtraArgument()),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
