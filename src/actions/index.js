
import { ADD_TODO, MINUS_TODO } from "../reducers/activeTypes"

let nextToDoId = 0;
export const addFn = content => ({
  type: ADD_TODO,
  payload: {
    id: nextToDoId++,
    content
  }
})

export const minusFn = id => ({
  type: MINUS_TODO,
  payload: {
    id
  }
})