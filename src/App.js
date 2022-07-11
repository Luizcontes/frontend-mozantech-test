import { useState, useEffect } from 'react'
import { getData } from './services/partsApi'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import List from './components/List'
import Part from './components/Part';

function App() {

  const [types, setTypes] = useState([])
  const [parts, setParts] = useState([])

  const getPartTypes = async () => {
    const res = await getData('/part-types')
    setTypes(['Todos', ...res])
  }

  const getParts = async () => {
    const res = await getData('/parts')
    setParts(res)
  }

  useEffect(() => {
    getPartTypes()
    getParts()
  }, [])

  console.log(parts)

  return (
    <>
      <BrowserRouter>
        <h1>Store Parts</h1>
        <Routes>
          <Route path='/' element={
            <>
              <Header types={types} />
              <List parts={parts} />
            </>
          } />
          <Route path='/part' element={<Part />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
