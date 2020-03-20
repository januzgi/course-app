import React, { Component, Fragment } from 'react';
import withClass from '../../hoc/withClass';
import classes from './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    // more modern approach to use React.createRef
    // instead of way 2
    this.inputElRef = React.createRef();
  }

  componentDidMount() {
    // this.inputEl.focus();
    this.inputElRef.current.focus();
  }

  render() {
    console.log('[Person.js] rendering...');

    return (
      // React requires a component wrapping everything inside
      // Aux as an empty component does this for us (instead of div or other element)
      // <div className={classes.Person}>
      // import classes from './Person.css';
      <Fragment>
        <AuthContext.Consumer>
          {(context) =>
            context.authenticated ? (
              <p>Authenticated!</p>
            ) : (
              <p>Please log in.</p>
            )
          }
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          type='text'
          // way 2:
          // ref={(inputElement) => {
          //   this.inputEl = inputElement;
          // }}
          ref={this.inputElRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
      // </div>
    );
  }
}

// This will check prop types
Person.propTypes = {
  click: PropTypes.func, // Expecting a pointer at a function
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
