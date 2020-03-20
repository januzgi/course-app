// This is a context object
import React from 'react';

// Context value could also be an array, a string etc.
const authContext = React.createContext({
  // This createContext creates a globally available object
  authenticated: false,
  // This method will do nothing. It is for better autocomplete.
  login: () => {}
});

export default authContext;
