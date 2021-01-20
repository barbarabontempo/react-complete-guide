import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass"
import classes from "./Person.css";
import PropTypes from 'prop-types'

class Person extends Component {

  constructor(props){
    super(props)
    this.inputElementRef = React.createRef();
  }
  componentDidMount(){
    document.querySelector('input').focus();
      // this.inputElement.focus();
      this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] rendering...");

    return (
      <Aux>
        {/* <div className={classes.Person}> */}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          //u can add red on any element
          //a ref is a special property you can pass into any component
          //old school way of setting up ref
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
        {/* </div> */}
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func 
}

export default withClass(Person, classes.Person);

//aux is wrapping our JSX code
//also something called: React.Fragment 
//Fragment does the same thing that our aux component is doing, 
//just import Fragment from react 

