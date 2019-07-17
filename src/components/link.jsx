import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../actions/setFilter"
import  *  as list  from "../reducers/activeTypes/filter"
export function Link({setFilter, currentFilter}){
    const linkFn = (filter) =>{
        setFilter(filter);
    }
    return( 
        <ul>
            {
                Object.keys(list).map( (el,index) => (
                    <li key={index} onClick={() =>linkFn.call(this, el)} style={{display: 'inline-block', marginLeft: 20, cursor: 'pointer', color: currentFilter == el? 'red' : ''}}>{list[el]}</li>
                ))
            }
        </ul>
    )
}
const mapStateToProps = (state, ownProps) =>{
    return{
        currentFilter: state.dispatchFilter.filter
    }
}


export default connect( mapStateToProps, { setFilter })(Link);