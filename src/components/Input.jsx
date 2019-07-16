import React from "react";
import { connect } from "react-redux"
import { addFn } from "../actions"

class Input extends React.Component{ 
  constructor(props){
    super(props);
    this.state = { input: '' }
  }

  changeInputFn(e){
    this.setState({ input: e.target.value })
  }

  addInputToStore(){
    this.props.addFn(this.state.input)
  }

  render(){
    return (
      <>
        <input
          onChange={this.changeInputFn.bind(this)}
          value={this.state.input}
        />
        <button onClick={this.addInputToStore.bind(this)}>
          add
        </button>
      </>
    );
  }
}

 const mapDispatchToProps = (dispatch, ownProps) => {
   return {
     addFn: (...args) => dispatch(addFn(...args))
   }
 }

export default connect(
  null,
  mapDispatchToProps
)(Input)

