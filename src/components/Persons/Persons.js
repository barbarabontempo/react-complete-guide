import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {

  // static getDerivedStateFromProps(props, state){ // Rarely Used
  //   console.log('[Person.js] getDerivedStateFromProps')
  //   return state
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate')
    if (
      nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked
      ){
      return true; //this allows for the update
    } else {
      return false
    }
    // return true;
  }
  
  
  getSnapshotBeforeUpdate(nextProps, nextState){
    console.log('[Persons.js] getSnapshotBeforeUpdate')
    return null;
  }

  componentDidUpdate(){
    console.log('[Person.js] componentDidUpdate ')
  }

  componentWillUnmount(){
    //any code you want to run before the component is removed
    console.log('[Persons.js] componentWillUnmount')
  }
  
  render() {

    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
};

export default Persons;



//PureComponent: in the end it is a normal component that implements shouldComponentUpdate with a complete props check, will do the same as the shouldComponentUpdate function we have above


//adjacent elements
//instead of wrapping your code in a div, you can return an array with commas after each element (mad work tho, did not like this method)
//another way it wrapping component that does not render html code: <> and </>