import React from "react";
import { connect } from "react-redux";
import { minusFn } from "../actions"

const Item = (props) => {
  const minusItemFn = (id) => {
    props.minusFn(id);
  }

  return (
      <li>
        <span>{props.content}</span>
        <button onClick={() => minusItemFn(props.id)} style={{ 'display': 'inline-block', 'marginLeft': 40 }}>minus</button>
      </li>
    )
  }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    minusFn: (...args) => dispatch(minusFn(...args))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Item)

