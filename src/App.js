import { useState, useEffect } from 'react'
import { getData } from './services/partsApi'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import List from './components/List'
import Part from './components/Part';

function App() {

  const title = 'Store Parts'
  const [types, setTypes] = useState([])
  const [type, setType] = useState('')
  const [parts, setParts] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(false)

  useEffect(() => {
    getPartTypes()
  }, [])

  useEffect(() => {
    getParts(type, search)
  }, [type, search])

  const getPartTypes = async () => {
    const res = await getData('/part-types')
    setTypes(['Todos', ...res])
  }

  const getParts = async (type, search) => {
    const res = await getData('/parts', type, search)
    setParts([...res])
  }

  const handleType = (e) => {
    let type = e.target.value
    setType(type !== 'Todos' ? type : '')
  }

  const handleQuery = (e) => {
    let search = e.target.value
    setSearch(search)
  }

  const listSort = () => {

    const partsFloat = parts.map((item) => {
      let newItem = { ...item }
      for (let x in newItem) {
        if (x === 'price') {
          newItem[x] = parseFloat(item[x])
        }
      }
      return newItem
    })
      .sort((a, b) => sort ? b.price > a.price : a.price > b.price)
      .map((item) => {
        item.price = (item.price).toFixed(2) + '$'
        return item
      })

    setParts([...partsFloat])
    setSort(sort => !sort)
  }

  const props = {
    title: title,
    types: types,
    type: type,
    onChangeDropDown: handleType,
    search: search,
    onChangeInput: handleQuery,
    listSort: listSort,
    sort: sort
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
