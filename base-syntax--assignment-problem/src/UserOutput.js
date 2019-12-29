import React from 'react';



const userOutput = (props) => {
  return (
  <div className="greeting">
    <p>Hello!</p>
    <p>My name is...{props.adj}{props.name}</p>
  </div>
  )
};

export default userOutput;