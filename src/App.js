import React, {useEffect, useState} from 'react';
import './App.css';

import getAllPhones from './services/getAllPhones';

import PhoneList from './components/PhoneList';

function App() {
  const [phones, setPhones] = useState ([]);

  useEffect(() => {
    getAllPhones()
        .then(response => {
            setPhones(response);
        })
        .catch(error => {
            console.log('Phone error:', error.message)
        });
    }, []);

  return (
    <>
      <section className='container'>
        <PhoneList phones={phones} />
      </section>
    </>
  );
}

export default App;
