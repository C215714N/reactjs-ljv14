import Post from './Post/Post.js';
import './App.css';

function App() {
  return (
    <>
      <Post 
        title="Perros" 
        content="" 
        val={[100,120,60]} />
      <Post 
        title="Gatos" 
        content=""  
        val={[150,90,85]}/>
      <Post 
        title="Ratones" 
        content=""  
        val={[120,180,30]}/>
    </>
  );
}

export default App;
