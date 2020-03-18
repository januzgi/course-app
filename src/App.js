import React, { Component } from 'react';

import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'fasd', name: 'Jeea', age: 28 },
      { id: 'asfs', name: 'Pate', age: 29 },
      { id: '2421s', name: 'Kukko', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  // Objects are reference types, thus if
  // we splice it we splice the original data
  deletePersonHandler = (personIndex) => {
    // Thus create a copy of the array
    // const persons = this.state.persons.slice();
    // Or use spread from ES6, most modern solution
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    // Use the findIndex method with the arrow function to
    // get the required person object
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    // Get the person by accessing the persons index in the array
    const person = {
      // Use the spread again to fetch the object properties to a new object
      ...this.state.persons[personIndex]
    };
    // Alternative for the above
    // const person = Object.assign({}, this.state.persons[personIndex]);

    // Then use the name
    person.name = event.target.value;

    // Working with copying the original
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let btnClasses = '';

    // way 2: By defaul persons is null
    // Preferred way of rendering conditional content
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {/* Convert this array into JSX */}
          {this.state.persons.map((person, index) => {
            return (
              <Person
                // alternative for arrow function
                // would be .bind(this, index)
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                // Key property so React stays up-to-date on
                // which elements changed and which to update
                key={person.id}
                // Use arrow function again to pass the id
                // and listener event data from the function
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      btnClasses = classes.Red;
    }

    // .css assignedClasses
    // let assignedClasses = ['red', 'bold'].join(' ');
    // Turns into "red bold" with join, it is valid css class list
    let assignedClasses = [];
    // Red if less than 3
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // assignedClasses ) ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClasses} onClick={this.togglePersonsHandler}>
          Toggle Visibility
        </button>

        {/* What to do if the below is true (before the question mark) */}
        {/* way 1: {this.state.showPersons ? ( */}
        {/* <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            click={this.switchNameHandler.bind(this, 'Jeaansi')}
            changed={this.nameChangedHandler}
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div> */}
        {/* way 1: ) : // else condition, if the before is true, render then, if false then do nothing
        null} */}

        {/* way 2: */}
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
