import React from "react";
import { connect } from "react-redux";
import Item from "./Item";

const List = ({ list }) => {

  
  return (
    <ul>
    {
      list.map( (el,index) => (
       <Item key={index} content={el.content} id={el.id}></Item> 
      ))
    }
    </ul>
  )
}

const mapStateToProps = (state) => {
  return{
    list: state
  }
}



export default connect( mapStateToProps, null )(List);