import React from 'react';
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import dispatchFun from "./reducers"
import { dispatchFilter } from "./reducers/setFilter";
import Input from "./components/Input"
import List from './components/List'
import Link from "./components/link"
import './App.css';

const common = combineReducers({ dispatchFun, dispatchFilter })

const store = createStore(common)

function App() {
  return (
    <Provider store={store}>
      <Input />
      <List />
      <Link />
    </Provider>
  );
}

export default App;
