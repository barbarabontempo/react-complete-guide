import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person"; //can omit the .js because its added automatically by the build workflow

class App extends Component {
  //state is managed from inside of a component
  //can only use state in class based component
  //can manage state in funcitonal components only with hooks
  state = {
    persons: [
      {
        name: "barbs",
        age: "26",
      },
      {
        name: "kc",
        age: "26",
      },
      {
        name: "fran",
        age: "26",
      },
    ],
    //state is a special property, it can be changed
    //if it changes, it will lead React to re-render our DOM, to update the DOM
  };

  //this class has a render method
  //we need this method, because react will call this method to render something on the screen
  //it has to return or render some HTML code to the DOM

  switchNameHandler = () => {
    //console.log("was clicked")

    //DONT DO THIS: this.state.persons[0].name = "BARBI"
    //use special method from react that allows us to update state
    //takes obj as argument
    this.setState({
      persons: [
        {
          name: "BARBI",
          age: "26",
        },
        {
          name: "kc",
          age: "26",
        },
        {
          name: "fran",
          age: "36",
        },
      ]
    })
  }


  nameChangedHandler = (e) => {
    this.setState({
      persons: [
        {
          name: "BARBI",
          age: "26",
        },
        {
          name: e.target.value,
          age: "26",
        },
        {
          name: "fran",
          age: "36",
        },
      ]
    })
  }

  render() {
    // styling inline
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      //the code in here, is JSX (JS looking a bit different)
      //this is just syntatical sugar invented by react team
      //will transpile to valid JS
      //code that we can use to write HTML
      <div className="App">
        <h1> Hello, I am a react app</h1>
        <p>working! woo!</p>
        {/* inline styling for the button */}
        <button
        style={style} 
        onClick={this.switchNameHandler} >Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}  
          changed={this.nameChangedHandler}
        >
          {" "}
          My hobbies are: painting{" "}
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
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

export default App;
