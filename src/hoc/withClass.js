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
         <WrappedComponent />
     </div>
  );//getting props and then returning JSX, we have a function that returns a function (this function we are returning is a functional component)
};

export default withClass;
//here we have two arguments
//this HOC has purpose has purpose of adding a div with a certain CSS class around any element
//this is no longer a component, it is a function that returns a function 