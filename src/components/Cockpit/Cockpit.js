import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.css';

const cockpit = ( props ) => {

  const toggleBtnRef = useRef(null)
  
  //useEffect takes a function taht will run for every render cycle
  useEffect(() => {
    console.log('[cockpit.js], useEffect')
    //http request
    // setTimeout(() => {
    //   alert("saved data to cloud!")
    // }, 1000 );
    toggleBtnRef.current.click()
    //this is an anon function that runs before the main useEffect, but after the first render cycle
    //"runs when useEffect runs for the last time "
    return () => {
      console.log('[cockpit.js], cleanup work cockpit')
    }
  }, [])

  useEffect(() => {
    console.log('[cockpit.js], useEffect')
    return () => {
      console.log('[cockpit.js], cleanup work SECOND cockpit')
    }
  })


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

    if ( props.personsLength <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.personsLength <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                ref = {toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(cockpit);
//so right now our cockpit rerenders even when we change a  persons name, however we do not need the cockpit to re-render when we are changing the persons name, since we are not changing the persons array in here
//so to optimize and not re-render the cockpit when changing a persons name we use: React.memo 
//this is memoization - react will store a snpshot of this comp and only if this input changes it will rerender it

// react will store a asnapshot of this component and only if its input changes it will re-render it


//react memo and shouldCompUpdate
//when to use them?
//comps that will update when parents update 

//so right now our cockpit rerenders even when we change a  persons name, however we do not need the cockpit to re-render when we are changing the persons name, since we are not changing the persons array in here
//so to optimize and not re-render the cockpit when changing a persons name we use: React.memo 
//this is memoization - react will store a snpshot of this comp and only if this input changes it will rerender it

// react will store a asnapshot of this component and only if its input changes it will re-render it


//react memo and shouldCompUpdate
//when to use them?
//comps that will update when parents update 