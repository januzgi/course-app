import React from 'react';
import Person from './Person/Person';

// Use parenthesis directly to create a return statement using () instead of {}
const persons = (props) => {
  console.log('[Persons.js] rendering...');

  props.persons.map((person, index) => {
    return (
      <Person
        // alternative for arrow function
        // would be .bind(this, index)
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        // Key property so React stays up-to-date on
        // which elements changed and which to update
        key={person.id}
        // Use arrow function again to pass the id
        // and listener event data from the function
        changed={(event) => props.changed(event, person.id)}
      />
    );
  });
};

export default persons;
