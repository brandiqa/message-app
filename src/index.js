import React from 'react';
import ReactDOM from 'react-dom';

// const name = "Jane";
const user = {
  firstName: "Jane",
  lastName: "Doe"
}
const element = <p>Hello, {user.firstName} {user.lastName}</p>

ReactDOM.render(element, document.getElementById('root'));
