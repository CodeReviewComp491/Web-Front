import { createStore, applyMiddleware } from 'redux';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// store
import { GlobalState } from 'store/interfaces';
import rootReducer from 'store/reducers/rootReducer';

const makeStore: MakeStore<GlobalState> = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// export an assembled wrapper
/* eslint-disable @typescript-eslint/no-explicit-any */
export const wrapper = createWrapper<any>(makeStore, { debug: true });
