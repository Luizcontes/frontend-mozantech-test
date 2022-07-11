import './App.css';
import { useState, useEffect } from 'react'
import { getData } from './services/partsApi'
import PartTypes from './components/PartTypes';

function App() {

  const [data, setData] = useState([])
  const [target, setTarget] = useState('')
  const [search, setSearch] = useState('')

  async function getPartTypes() {
    setData(
      // await getData('/part-types')
      await getData('/parts')
    )
  }
  
  console.log(data)

  return (
    <>
      {/* <PartTypes
        data={data}
        handlePartTypes={handlePartTypes}
      /> */}

      <h1>Store Parts</h1>
      <input ></input>
      <button onClick={getPartTypes}>Get data</button>

      {/* <lu>
        {search || search.map( items => (

        ))}
      </lu> */}

    </>
  )
}

export default App;
