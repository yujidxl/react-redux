
import { ADD_TODO, TOGGLE_TODO } from "../reducers/activeTypes"

let nextToDoId = 0;
export const addFn = content => ({
  type: ADD_TODO,
  payload: {
    id: nextToDoId++,
    content,
  }
})

export const toggleFn = id => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
})

