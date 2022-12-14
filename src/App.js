import { useEffect, useState } from 'react'
import './App.css';
import Person from './components/Person';

function App() {

  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then(res => res.json())
      .then(data => {
        setPeople(data.results)
        console.log(data.results)
      })
  }, [])
  
  return (
    <div className="App">
      {people && people.map((person, index) => <Person key={index} name={person.name} height={person.height} mass={person.mass} />)}
    </div>
  );
}

export default App;
