import React, { Component } from "react";
import classes from "./App.css";
import Radium from "radium";
import styled from "styled-components";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person"; //can omit the .js because its added automatically by the build workflow
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

//styled components:
// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;

class App extends Component {
  //state is managed from inside of a component
  //can only use state in class based component
  //can manage state in funcitonal components only with hooks
  state = {
    persons: [
      {
        name: "barbs",
        age: "26",
        id: 1,
      },
      {
        name: "kc",
        age: "26",
        id: 2,
      },
      {
        name: "fran",
        age: "26",
        id: 3,
      },
    ],
    showPerson: false,
    //state is a special property, it can be changed01
    //if it changes, it will lead React to re-render our DOM, to update the DOM
  };

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

  nameChangedHandler = (evt, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = evt.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonHandler = () => {
    this.setState((prevState) => ({
      showPerson: !prevState.showPerson,
    }));
  };

  // deletePersonHandler = (personIndex) => {
  //    //this is mutating state directly, dont use this
  //   // const persons = this.state.persons
  //   const persons = [...this.state.persons]
  //   persons.splice(personIndex, 1)
  //   this.setState({persons: persons})
  // }

  deletePersonHandler = (id) => {
    //this is mutating state directly, dont use this
    // const persons = this.state.persons
    const updatedPersons = this.state.persons.filter(
      (person) => person.id !== id
    );
    this.setState({ persons: updatedPersons });
  };

  // another way to delete:
  // removeComment = commentId => {
  //   // filter to return a new array with the comment we don't want removed
  //   const updatedComments = this.state.comments.filter(comment => comment.id !== commentId)

  //   this.setState({
  //     comments: updatedComments
  //   })
  // }

  render() {
    // styling inline
    // const style = {
    //   backgroundColor: "green",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black",
    //   },
    // };

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                {" "}
                <Person
                  changed={(evt) => this.nameChangedHandler(evt, person.id)}
                  
                  deletePersonHandler={() =>
                    this.deletePersonHandler(person.id)
                  }
                  name={person.name}
                  age={person.age}
                />{" "}
              </ErrorBoundary>
            );
          })}
        </div>
      );
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (
      //the code in here, is JSX (JS looking a bit different)
      //this is just syntatical sugar invented by react team
      //will transpile to valid JS
      //code that we can use to write HTML
      <div className="App">
        <h1> Hello, I am a react app</h1>
        <p className={assignedClasses}> working! woo!</p>
        {/* inline styling for the button */}
        <button
          className={classes.Button}
          alt={this.state.showPerson}
          onClick={this.togglePersonHandler}
        >
          Show Name
        </button>
        {/* <StyledButton  alt={this.state.showPerson} onClick={this.togglePersonHandler}>
          Show Name
        </StyledButton> */}
        {persons}
      </div>
      //best practice is to wrap everything in a root element
      //typically u net everything inside an element you return

      //create element is a method that takes at least 3 argument
      //first one is element we want to render to the DOM
      //second argument, configuation for this, we would pass a JS object
      //third argument is any amount of children
      //children = what is nested inside this div, in this caase we want to nest h1 inside the div
      //this code below, is the same thing as the code above, this is why we need to import react
      //writing code like this below is cumbersome, which is why we use JSX like above
      //but the code below is what is happening behind the scene, the code above looks like HTML, but in erality it gets compiled like the code below
      // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, "I AM A REACT APP"))
    );
  }
}

export default App; //higher order component
