import React from 'react'

function DocasComponent({docasdata}) {
  const { firstName, lastName, nationality, origin } = docasdata;
  
  return (
    <div className='details'>
      <h2>This is me </h2>
      
      <p>Hello my name is {docasdata.firstName} {docasdata.lastName}</p> <p>I am a {docasdata.nationality}</p> <p>from a locality called {docasdata.origin}</p> <p> I really enjoy {docasdata.hobby}.</p>
    </div>
  )
}

export default DocasComponent;
