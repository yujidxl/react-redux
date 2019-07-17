import { ALL, COMPLETED, IMCOMPLETE } from "../reducers/activeTypes/filter";

export const setFilter = (filter=ALL) => ({
    type: 'SET_FILTER',
    payload: {
        filter
    }
})