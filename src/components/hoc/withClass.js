import React from 'react';

const withClass = (WrappedComponent, className) => {
  // Not a functional component but a function returning function
  // returning a component
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
