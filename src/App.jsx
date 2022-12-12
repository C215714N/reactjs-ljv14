// Hooks
import { 
  useState,
  useEffect
} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

// Components
import Search from './components/Search';
import Results from './components/Results';
import Pagination from './components/Pagination';
import Nav from './components/Nav';
import About from './components/About';

// MockData
import data from './models/state.json';

// Styles

function App() {
  const [results, setResults] = useState({ 
    data:{}, 
    pagination:{}
  })
  const [search, setSearch] = useState('')

  useEffect(
    () => {
      let type, searching;
      
      search.length >= 3 ? 
      (type = 'search', searching = `&q=${search.replaceAll(" ","+")}`) : 
      (type = 'trending', searching = '')
      
      const apiURL = `${data[0].url}/${type}?api_key=${data[0].key}${searching}&limit=${data[0].limit || 10}`;

      fetch(apiURL)
      .then(response => response.json())
      .then(data => (setResults(data) ) )

    }, [search]
  )

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/about" element={<About data={data[0].about}/>} />
        <Route path="*" element={ 
          <>
            <Search search={search} setSearch={setSearch}/>
            <Results data={results.data} word={ search }/>
            <Pagination data={results.pagination}/>
          </> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
