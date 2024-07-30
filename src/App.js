import React from 'react';
import './App.css';
import DocasComponent from './Components/DocasComponent';


function App() {
  const docasdata = {
    firstName: 'Ngobah',
    lastName: 'Docas',
    nationality: 'Cameroonian',
    origin: 'Nwa',
    age: '22',
    hobby: 'coding, dancing, cooking and eating'
  };
  return (
    <div className="App">
      <h1>Docas's Info</h1>
      <p>I am {docasdata.firstName}</p>
      <DocasComponent docasdata={docasdata} />
      
    </div>
  );
}

export default App;
