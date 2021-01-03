import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
// this will execute the constructor of the component you're extending

constructor(props){
  super(props)
  console.log('[App.js] constructor')
  
}

  state = {
    persons: [
      { id: 'asfa1', name: 'Barb', age: 28 },
      { id: 'vasdf1', name: 'Karem', age: 29 },
      { id: 'asdf11', name: 'Frantelope', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  static getDerivedStateFromProps(props, state) { // Rarely Used
    console.log('[App.js] getDerivedState', props)
    return state;
  }
  
  // componentWillMount(){
  //   console.log('[App.js] componentWillMount')
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate')
    return true; //this allows for the update
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate')
  }
  


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  //another way to update: 
  //update an item in an array one attribute instead of replacing the whole object:
  // nameChangedHandler = (evt, id) => {
  //   // use map to return a new array so we aren't mutating state
  //   const updatedPersons = this.state.persons.map(p => {
  //     // in the array, look for the object we want to update
  //     if (p.id === id){ // if we find the object
  //       const updatedPerson = {...p} // make a copy of it
  //       updatedPerson.name = evt.target.value // update whatever attribute that has changed
  //       return updatedPerson // return the updated copy
  //     } else { // for all other objects in the array
  //       return p // return the original object
  //     }
  //   })
  //   this.setState({ // set state with our updated array
  //     persons: updatedPersons
  //   });
  // };

  // another way to delete: 
  // deletePersonHandler = (id) => {
  //   //this is mutating state directly, dont use this
  //   // const persons = this.state.persons
  //   const updatedPersons = this.state.persons.filter(
  //     (person) => person.id !== id
  //   );
  //   this.setState({ persons: updatedPersons });
  // };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log('[App.js] render')
  let persons = null

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
