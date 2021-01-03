import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = ( props ) => {

  //useEffect takes a function taht will run for every render cycle
  useEffect(() => {
    console.log('[cockpit.js], useEffect')
    //http request
    setTimeout(() => {
      alert("saved data to cloud!")
    }, 1000 );
  }, [props.persons])

  //useEffect will run all the time, combines CDM and CDU
  //what if we want to send an HTTP request but we only want to do that when the comp is rendered for the FIRST time and not every re-render cycle.. useEffect with out the second argument, will run at every rerender cycle
  
  //this should only execute when our Persons change: how do we do this? add second argument to ueEffect
  //am array where u point to all the variables/data that are used in your Effect

  //so we only want it to execute when persons change so inside an array we pass: [props.person]


  //what is we only want to execute useEffect when the component renders the first time?
  //we pass an empty array! u have to pass an array but empty it tells React that this effect has no dependencies so it will only run the first time. 

  //if you have a dependency on a certain field, then u would pass it onto the array like we did for props.person 
  
  

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;