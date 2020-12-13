import React from 'react';
import Person from './Person.jsx';

var People = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th><th>Age</th>
      </tr>
    </thead>
    <tbody>
      {props.people.map(person => <Person key={person.id} person={person}/>)}
    </tbody>
  </table>
);

export default People;
