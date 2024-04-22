
import './App.css';
import React from 'react';
import Person from './components/Person';


function App() {
  return (
<div className='person'>
  <Person
    firstname='John'
    lastname='Doe'
    age={25}
    lenth={180}
    weight={75}
    prictureUrl='https://randomuser'
    />
  

  <Person
    firstname='Jane'
    lastname='Smith'
    age={32}
    lenth={170}
    weight={60}
    prictureUrl='https://randomuser'
    />

  <Person
    firstname='jarno'
    lastname='leuckx'
    age={23}
    lenth={170}
    weight={75}
    prictureUrl='https://randomuser'
    />

</div>
  );
}

export default App;
