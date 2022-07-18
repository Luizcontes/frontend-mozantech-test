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
    // const partsFloat = []
    // parts.map(part => {
    //   let temp = {
    //     name: part.name,
    //     price: parseFloat(part.price),
    //     type: part.type
    //   }
    //   return partsFloat.push(temp)
    // })

    // const partsFloat = 

    const convertStringBack = list => {
      const stringBack = []
      list.map(i => {
        let item = {
          name: i.name,
          price: i.price.toFixed(2) + '$',
          type: i.type
        }
        stringBack.push(item)
        return item
      })
      return stringBack
    }

    if (!sort) {
      let list = partsFloat.sort((a, b) => a.price > b.price ? 1 : -1)
      let listStringfied = convertStringBack(list)
      setParts([...listStringfied])
    } else {
      let list = partsFloat.sort((a, b) => a.price > b.price ? -1 : 1)
      let listStringfied = convertStringBack(list)
      setParts([...listStringfied])
    }
    setSort(sort => !sort)
  }

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={
            <>
              <Header
                title={title}
                types={types}
                type={type}
                onChangeDropDown={handleType}
                search={search}
                onChangeInput={handleQuery}
                listSort={listSort}
                sort={sort}
              />
              <List parts={parts} />
            </>
          } />

          <Route path='/part' element={<Part title={title}/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
