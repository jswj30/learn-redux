import { createStore } from 'redux';
import modules from './modules';

const configure = () => {
  // const store = createStore(module);
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(module, devTools);

  return store;
}

export default configureStore;