import React from 'react';

//Use implicit Returns, because our function is a one-liner etc.
//and destructure the incoming props,
//You can set prop types on a stateless functional component just like any other component
const Item = ({ text }) =>
  <div className="item">
    {text}
  </div>;

export default Item;
