import React, {useEffect, useState} from 'react';
import './App.css';

import getAllPhones from './services/getAllPhones';

function App() {
  const [phones, setPhones] = useState ([]);

  useEffect(() => {
    getAllPhones()
        .then(response => {
          console.log(response)
            setPhones(response);
        })
        .catch(error => {
            console.log('Phone error:', error.message)
        });
    }, []);

  return (
    <>
      {phones.map((phone) => (
        <div key={phone.id}>
          {phone.name}
        </div>
      ))}
    </>
  );
}

export default App;
