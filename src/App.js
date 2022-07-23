import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [peoples, setPeoples] = useState([]);
  const [filter, setFilter] = useState('');
  

   useEffect(() => {
      fetch('https://swapi.dev/api/people/?format=json')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setPeoples(data.results);
           
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);
  console.log(filter)

  

  return (
   <div className="Container">
    <div className="nav">
      <strong><span>Personagens</span></strong>
    </div>
    
    <div className='containerList'>

      <input placeholder='Pesquisar personagem' 
        value={filter}
        onChange={(ev) => setFilter(ev.target.value)}
      />
      

      {peoples.map((people, index) => {
         return (
            <div className="post-card" key={index}>
              <ul>
                <li className="post-title"><strong>{people.name}</strong></li>
                <div className="button">
                  <a href='https://swapi.dev/api/people/'><strong><span>Detalhes</span></strong></a>
                </div>
              </ul>
               
            </div>
         );
      })}
    </div>
   </div>
   );
}

export default App;