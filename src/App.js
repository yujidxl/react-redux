import React from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import dispatchFun from "./reducers"
import Input from "./components/Input"
import List from './components/List'
import './App.css';

const store = createStore(dispatchFun)

function App() {
  return (
    <Provider store={store}>
      <Input />
      <List />
    </Provider>
  );
}

export default App;
