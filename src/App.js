import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Jenna', age: 23 },
      { name: 'Japi', age: 43 },
      { name: 'Hesus', age: 2020 }
    ]
  });

  // Could be a single var or array
  const [otherState, setOtherState] = useState('other values');

  console.log('personsState: ', personsState);
  console.log('otherState: ', otherState);

  // 'this' syntax only works with arrow functions as it refers to
  // the class App
  const switchNameHandler = () => {
    // console.log('Clicked');
    setPersonsState({
      persons: [
        { name: 'Jenniina', age: 23 },
        { name: 'Japi', age: 43 },
        { name: 'Hesussiini', age: 2020 }
      ]
      // React hooks replaces, does not add, what it
      // had with what was passed to it. Thus we add it.
      // otherState: personsState.otherState
    });
  };

  return (
    <div className='App'>
      <h1>I'm a React app</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My hobbies: Eating
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement(
  //   'div',
  //   null,
  //   React.createElement('h1', { className: 'App' }, "I'm a React app!")
  // )
};

export default app;
