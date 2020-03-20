import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  // This is componentDidMount and DidUpdate in one effect
  // You can have as many of the as you want

  // import { useEffect } from 'react'
  // useEffect(() => {
  //   console.log('[Cockpit.js] useEffect');
  //   // Http request etc. can be sent here
  //   setTimeout(() => {
  //     alert('Saved data to cloud.');
  //   }, 2000);
  //   // Return statement will run after every render cycle
  //   return () => {
  //     console.log('[Cockpit.js] cleanup work in useEffect');
  //   };
  //   // Second argument for the useEffect to give variables that will cause
  //   // useEffect to execute when changed
  //   // with an empty array it will run once only
  // }, []);

  // // Whenever a component re-renders, this 2nd useEffect could be used like this
  // useEffect(() => {
  //   console.log('[Cockpit.js] 2nd useEffect');
  //   return () => {
  //     console.log('[Cockpit.js] cleanup work in 2nd useEffect');
  //   };
  // });

  // .css assignedClasses
  // let assignedClasses = ['red', 'bold'].join(' ');
  // Turns into "red bold" with join, it is valid css class list
  let assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  // Red if less than 3
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // assignedClasses ) ['red']
  }
  if (props.personsLength <= 1) {
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

// React.memo will memorize the component
// and may reuse the component later if no changes have happened
export default React.memo(cockpit);
