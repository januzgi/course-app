import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    // state may also be set here, though the below is a more modern way
    // this.state =
  }

  state = {
    persons: [
      { id: 'fasd', name: 'Jeea', age: 28 },
      { id: 'asfs', name: 'Pate', age: 29 },
      { id: '2421s', name: 'Kukko', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

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
    console.log('[App.js] render');
    // way 2: By defaul persons is null
    // Preferred way of rendering conditional content
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
