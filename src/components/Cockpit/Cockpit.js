import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  // .css assignedClasses
  // let assignedClasses = ['red', 'bold'].join(' ');
  // Turns into "red bold" with join, it is valid css class list
  let assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  // Red if less than 3
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // assignedClasses ) ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Visibility
      </button>
    </div>
  );
};

export default cockpit;
