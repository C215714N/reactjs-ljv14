// Components
import PostBox from './Post/PostBox';
import UsersTable from './Profile/UsersTable';
import Profile from './Profile/Profile';
import Nav from './NavBar/Nav';
import Error from './Error';

// Data
import users from './DB/users.json';
import posts from './DB/posts.json';
import navigation from './DB/navigation.json';

import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const text = ['like', 'love', 'enjoy'];
  const color = ['success', 'danger', 'warning']
  return (
    // Contexto para la navegacion
    <BrowserRouter>
      {/* Controlador de rutas (navegacion) */}
      <Nav links={ navigation } />
      <Routes>
        <Route path="/" element={ <UsersTable users={users}/> } />
        <Route exact path="/posts" 
          element={ <PostBox text={text} color={color} posts={ posts } />} >
        </Route>
        <Route path='/profile' element={<Profile />} />
        {/* <Route path="/settings" element={ <Settings />} /> */}
        <Route path="" />
        <Route path='*' element={<Error code={ 404 } points={ 100 }/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
