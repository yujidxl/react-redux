import React from "react";
import { connect } from "react-redux";
import Item from "./Item";
import linkFilter from "../utils"

const List = ({ list }) => {
  return (
    <ul>
    {
      list.map( (el,index) => (
       <Item key={index} content={el.content} id={el.id} complete={el.filter}></Item> 
      ))
    }
    </ul>
  )
}

const mapStateToProps = (state, ownProps) => {
  return{
    list: linkFilter(state.dispatchFun, state.dispatchFilter.filter)
  }
}



export default connect( mapStateToProps, null )(List);