/* eslint-disable react/prop-types */
import React from 'react';

var Person = (props) => (
  <tr>
    <td>{props.person.name}</td><td>{props.person.age}</td>
  </tr>
);

export default Person;