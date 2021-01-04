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
    showPersons: false,
    showCockpit: true
  };

  /*
    An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

    static getDerivedStateFromProps()
    shouldComponentUpdate()
    render()
    getSnapshotBeforeUpdate()
    componentDidUpdate()
  */ 
  static getDerivedStateFromProps(props, state) { // Rarely Used
    console.log('[App.js] getDerivedState', props)
    return state;
  }
  
  // componentWillMount(){
  //   console.log('[App.js] componentWillMount')
  // }


  /* 
    These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

    constructor()
    static getDerivedStateFromProps()
    render()
    componentDidMount()

    componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
  */
  componentDidMount(){
    console.log('[App.js] componentDidMount')
  }

  
/* 
Use shouldComponentUpdate() to let React know if a component’s output is not affected by the current change in state or props. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.
*/
  shouldComponentUpdate(nextProps, nextState){
     //here we can check if nextProps.persons is different than our current set of persons
     //right now our persons.js (child comp of app.js) are getting re-rendered; 
     //since App.js is re-rendering and persons js is a child of app js, it also gets rerendered even though only the cockpit.js is being changed. 
     //all our persons hooks ran even though nothing in persons change; we can fix this! 
    console.log('[App.js] shouldComponentUpdate')
    
    return true;
  }


  /* componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.

Use this as an opportunity to operate on the DOM when the component has been updated. This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).

componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.
*/

//removal of cockpit now optimized, we just skip re-rendering the Persons.js component and only rerender the Cockpit.js
//DEV TOOLS: more tools, rendering, enable paint flashing (allows u to see what really gets re-rendered on the real DOM)

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

/*
  If you need to interact with the browser, perform your work in componentDidMount() or the other lifecycle methods instead. Keeping render() pure makes components easier to think about.

render() will not be invoked if shouldComponentUpdate() returns false.

*/
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
      <button onClick={() => {
        this.setState({
          showCockpit: false
        })
      }}>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
        /> : null}
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
