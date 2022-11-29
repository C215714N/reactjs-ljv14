import Post from './Post/Post.js';
import './App.css';

function App() {
  return (
    <main className="container-xxl row mx-auto p-4">
      <Post 
        title="Perros" 
        content="Llamado perro doméstico o can, y en algunos lugares coloquialmente llamado chucho, tuso, choco; es un mamífero carnívoro de la familia de los cánidos, que constituye una especie del género Canis.​​" 
        val={[100, 120, 60]} />
      <Post 
        title="Gatos" 
        content="Llamado más comúnmente gato, y de forma coloquial minino, michino, michi, micho, mizo, miz, morroño o morrongo, y algunos nombres más, es un mamífero carnívoro de la familia Felidae."  
        val={[150, 90, 85]}/>
      <Post 
        title="Ratones" 
        content="Mus es un género de roedores miomorfos de la familia Muridae que incluye la mayoría de los roedores, si bien el nombre de ratón se usa para varias especies más pertenecientes a otros géneros."  
        val={[120, 180, 30]}/>
    </main>
  );
}

export default App;
