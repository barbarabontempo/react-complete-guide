import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //this class has a render method
  //we need this method, because react will call this method to render something on the screen
  //it has to return or render some HTML code to the DOM

  render() {
    return (
      // the code in here, is JSX (JS looking a bit different)
      // this is just syntatical sugar invented by react team
      // will transpile to valid JS
      // code that we can use to write HTML 
      <div className="App">
       <h1> Hello, I am a react app</h1>
       <p>working! woo!</p>
       <Person />
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

   