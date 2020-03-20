import React, { PureComponent } from 'react';
import Person from './Person/Person';

// Use parenthesis directly to create a return statement using () instead of {}
// PureComponent is a normal Component that includes
// shouldComponentUpdate with a complete props check
class Persons extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldCOmponentUpdate');
  //   // This works since in App.js the persons array is copied,
  //   // thus the pointer also changes. This is only a matching
  //   // between the pointers, no deeper
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   }
  //   return false;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('[Persons.js] componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('[Persons.js] WillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');

    return this.props.persons.map((person, index) => {
      return (
        <Person
          // alternative for arrow function
          // would be .bind(this, index)
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          // Key property so React stays up-to-date on
          // which elements changed and which to update
          key={person.id}
          // Use arrow function again to pass the id
          // and listener event data from the function
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
