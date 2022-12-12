// Hooks
import { 
  useState,
  useEffect
} from 'react';

// Components
import Results from './components/Results';

// Styles

function App() {
  const state = {
    url: 'https://api.giphy.com/v1/gifs',
    key: 'LanYkWCgNLIRDm6XZOZWnYH9yZHOProA',
    limit: 10
  }
  const [search, setSearch] = useState('')
  const [results, setResults] = useState({ 
    data:{}, 
    pagination:{}
  })
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(
    () => {
      let type, searching;
      
      isLoaded ? 
      (type = 'search', searching = `&q=${search.replaceAll(" ","+")}`) : 
      (type = 'trending', searching = '')
      
      const apiURL = `${state.url}/${type}?api_key=${state.key}${searching}&limit=${state.limit}`;

      fetch(apiURL)
      .then(response => response.json())
      .then(data => (setResults(data) ) )

    }, [search]
  )

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="search" onInput={ (e) => setSearch(e.target.value)} />
        <button onClick={() => setIsLoaded(search.length >= 3 ? true : false)}>Buscar</button>
      </form>
      <Results data={results.data} word={ search }/>
      <footer>
        <p>
          pagina {results.pagination.offset / 10 + 1} de {Math.ceil(results.pagination.total_count / results.pagination.count)}
        </p>
      </footer>
    </>
  )
}

export default App
