import React from 'react';
import styled from 'styled-components';

// Becomes a valid react component
const StyledDiv = styled.div`
  width: 60%;
  margin: 20px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {
  return (
    // <div className='Person' style={style}>
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name} />
      {/* </div> */}
    </StyledDiv>
  );
};

export default person;
