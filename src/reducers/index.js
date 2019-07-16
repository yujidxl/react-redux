import { ADD_TODO, MINUS_TODO }  from "./activeTypes";

const initialState = [];
const dispatchFun = (state = initialState, action) => {
  switch(action.type){
    case ADD_TODO: {
      const { id, content } = action.payload
      return [...state, { id, content }];
    }
    case MINUS_TODO: {
      const { id } = action.payload
      let new_state = [];
      state.forEach( el => {
        if(el.id !== id){
          new_state.push(el);
        }
      })
      return new_state;
    }
    default: {
      return state;
    }
  }
}

export default dispatchFun;