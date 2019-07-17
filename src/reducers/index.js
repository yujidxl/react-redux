import { ADD_TODO, TOGGLE_TODO, FILTER_TODOS }  from "./activeTypes";
import { ALL, COMPLETED, IMCOMPLETE } from "../reducers/activeTypes/filter";

const initialState = [];
const dispatchFun = (state = initialState, action) => {
  switch(action.type){
    case ADD_TODO: {
      const { id, content, filter= IMCOMPLETE } = action.payload
      return [...state, { id, content, filter }];
    }
    case TOGGLE_TODO: {
      const { id } = action.payload
      let new_state = Object.assign([], state);
      new_state.forEach( el  => {
        if(el.id == id){
          el.filter = (new_state.filter == COMPLETED ? IMCOMPLETE: COMPLETED);
        }
      })
      console.log(new_state)
      return new_state;
    }
    default: {
      return state;
    }
  }
}

export default dispatchFun;