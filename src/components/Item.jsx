import React from "react";
import { connect } from "react-redux";
import { toggleFn } from "../actions"
import { ALL, COMPLETED, IMCOMPLETE } from "../reducers/activeTypes/filter"

const Item = (props) => {
  const toggleFn = (id) => {
    props.toggleFn(id);
    console.log(props);
  }

  return (
      <li>
        <span style={{textDecoration: props.complete == COMPLETED ? 'underline': 'none'}}>{props.content}</span>
        <button onClick={() => toggleFn(props.id)} style={{ 'display': 'inline-block', 'marginLeft': 40 }}>toggle</button>
      </li>
    )
  }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleFn: (...args) => dispatch(toggleFn(...args))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Item)

