import React from "react";
import Person from "./Person/Person";

const persons = (props) =>


  props.persons.map((person, index) => {
      console.log("wtf", props.click)
    return (
        <Person
          changed={(evt) => props.changed(evt, person.id)}
          click={() => props.clicked( index )}
          key={person.id}
          name={person.name}
          age={person.age}
        />
    );
  });

  export default persons