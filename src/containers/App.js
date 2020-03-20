import React, { Component, Fragment } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../components/hoc/withClass';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    // state may also be set here, though the below is a more modern way
    // this.state =
  }

  state = {
    persons: [
      { id: 'fasd', name: 'Jeea', age: '28' },
      { id: 'asfs', name: 'Pate', age: 29 },
      { id: '2421s', name: 'Kukko', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // Important hooks DidMount and DidUpdate
  // Fetching data from server for example
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  // for performance improvements an important hooks
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  // Objects are reference types, thus if
  // we splice it we splice the original data
  deletePersonHandler = (personIndex) => {
    // Thus create a copy of the array
    // const persons = this.state.persons.slice();
    // Or use spread from ES6, most modern solution
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    // If a state update depends on the old state (e.g. a counter),
    // bring prevState as an argument to setState and return
    // a JS object with the new state as an object
    // this.setState((prevState, props) => {return {newstate}});
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

  loginHandler = () => {
    this.setState({ authenticated: true });
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
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Fragment>
        {/* Wrap every component where you want to access the context */}
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />
          {persons}
        </AuthContext.Provider>
      </Fragment>
    );
  }
}

// Export by using the hoc and passing component and its class
export default withClass(App, classes.App);
