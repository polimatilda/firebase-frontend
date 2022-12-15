import { useEffect, useState } from 'react'
import './App.css';
import Person from './components/Person';
import {getPeople, addPerson} from './DataManager'

function App() {

  const [people, setPeople] = useState([])
  const [name, setName] = useState("")
  const [height, setHeight] = useState(0)
  const [mass, setMass] = useState(0)

  useEffect(() => {
    // fetch('https://swapi.dev/api/people')
    //   .then(res => res.json())
    //   .then(data => {
    //     setPeople(data.results)
    //     console.log(data.results)
    //   })

    getPeople().then((peopleData) => setPeople(peopleData))

  }, [])
  
  return (
    <div className="App">
      <input type="text" placeholder="name" onChange={(event) => setName(event.target.value)} />
      <input type="number" placeholder="height" onChange={(event) => setHeight(event.target.value)} />
      <input type="number" placeholder="mass" onChange={(event) => setMass(event.target.value)} />

      <button onClick={async () => {
        await addPerson(name, height, mass)
        getPeople().then((peopleData) => setPeople(peopleData))
        }}>Add</button>
        
      {people && people.map((person, index) => <Person key={index} name={person.name} height={person.height} mass={person.mass} />)}
    </div>
  );
}

export default App;
