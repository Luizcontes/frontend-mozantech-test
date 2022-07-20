import { useState, useEffect } from 'react'
import { getData } from './services/partsApi'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import List from './components/List/List'
import Part from './components/Part/Part';

function App() {

  const title = 'Store Parts'
  const [types, setTypes] = useState([])
  const [type, setType] = useState('')
  const [parts, setParts] = useState([])
  const [search, setSearch] = useState('')
  const [sorted, setSort] = useState(false)

  useEffect(() => {
    document.title = title
    getPartTypes()
  }, [])

  useEffect(() => {
    getParts()
  }, [type, search])

  // function used to get part types to render in the drop-down box 
  async function getPartTypes() {
    await getData('/part-types')
      .then(res => setTypes(['Todos', ...res]))
      .catch(err => console.log(err))
  }

  // function to require parts details based in the drop-down and input values
  async function getParts() {
    await getData('/parts', type, search)
      .then(res => setParts([...res]))
      .catch(err => console.log(err))
  }

  // function to capture the drop-down item selected
  const handleType = (e) => {
    let type = e.target.value
    setType(type !== 'Todos' ? type : '')
  }

  // function to capture the input value inserted
  const handleQuery = (e) => {
    let search = e.target.value
    setSearch(search)
  }

  // function to asc desc sort the parts list
  const listSort = () => {

    const partsFloat = parts.map((item) => {
      let newItem = { ...item }
      newItem['price'] = parseFloat(item['price'])
      return newItem
    })
      .sort((a, b) => sorted ? b.price > a.price : a.price > b.price)
      .map((item) => {
        item.price = (item.price).toFixed(2) + '$'
        return item
      })

    setParts([...partsFloat])
    setSort(sorted => !sorted)
  }

  // props object to make the component header`s code more readable
  const props = {
    title: title,
    types: types,
    type: type,
    onChangeDropDown: handleType,
    search: search,
    onChangeInput: handleQuery,
    listSort: listSort,
    sorted: sorted
  }

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={
            <>
              <Header props={props} />
              <List parts={parts} />
            </>
          } />

          <Route path='/part' element={<Part title={title} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
