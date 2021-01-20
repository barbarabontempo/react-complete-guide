// import React from "react";

// const withClass = (props) => {
//   return <div className={props.classes}>{props.children}</div>;
// };

// export default withClass;


/*
this HOC with class sets up a class on a div that wraps our component, will test in App.js

You have a component that wraps another component and adds something to that other component; such as styling, or logic, etc
*/



import React from "react";

const withClass = (WrappedComponent, className) => {
  return props => (
     <div className={className} >
         <WrappedComponent {...props}/> 
         {/* no props here so we can pass props dynamically, the props here will be the props of our wrapped component, withClass returns functional component tht wraps our our export o we export whatever withClass exports. So we need to pass our props to here 
         props we are getting is JS object, spread operator pulls out all the properties that are inside the props objet and distributes them as key/value pairs on this wrapped component 
         ex: name: "Barbara", age: 26
        */}
     </div>
  );//getting props and then returning JSX, we have a function that returns a function (this function we are returning is a functional component)
};

export default withClass;
//here we have two arguments
//this HOC has purpose has purpose of adding a div with a certain CSS class around any element
//this is no longer a component, it is a function that returns a function 