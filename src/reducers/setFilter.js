import { ALL, COMPLETED, IMCOMPLETE } from "./activeTypes/filter";
import { SET_FILTER } from "./activeTypes"
const initialFilter = {filter: ALL};
export const dispatchFilter = (state = initialFilter, action) => {
    let { type } = action;
    switch(type){
        case SET_FILTER: {
            const { filter } = action.payload;
            console.log(filter);
            return {filter}
        }
        default: {
            console.log(state)
            return state;
        }
    }
}