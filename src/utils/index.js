import * as list from "../reducers/activeTypes/filter"
export default (lists, filter) => {
    console.log(lists)
    switch(filter){
        case(list.ALL): {
            return lists;
        }
        case(list.COMPLETED): {
            return lists.filter( el => {return el.filter == list.COMPLETED});
        }
        case(list.IMCOMPLETE): {
            return lists.filter( el => {return el.filter == list.IMCOMPLETE});
        }
        default:  {
            return lists;
        }
    }
} 