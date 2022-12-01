import Post from './Post/Post.js';
import './App.css';

function App() {
  const posts = [
    {
      title: "Perros",
      content: "El perro, llamado perro doméstico o can, y en algunos lugares coloquialmente llamado chucho, tuso, choco, entre otros; es un mamífero carnívoro de la familia de los cánidos, que constituye una especie del género Canis",
      val: [100,120,60]
    },
    {
      title:"Gatos",
      content: "El gato doméstico, llamado más comúnmente gato, y de forma coloquial minino michino, michi, micho, mizo, miz, morroño morrongo y algunos nombres más, es un mamífero carnívoro de la familia Felidae. Es una subespecie domesticada, por la convivencia con el ser humano, del gato montés.",
      val: [150,90,85]
    },
    {
      title:"Ratones",
      content:"Mus es un género de roedores miomorfos de la familia Muridae que incluye la mayoría de los roedores llamados comúnmente ratones, si bien el nombre de ratón se usa para varias especies más pertenecientes a otros géneros. Los fósiles más antiguos atribuidos a este género datan del Mioceno superior de Asia y África.",
      val:[120,180,30]
    },
    {
      title: "Loros",
      content:"Los loros típicos (Psittacoidea) son una superfamilia del orden Psittaciformes, con un total de 369 especies. Los loros típicos son más numerosos y están más extendidos que las otras superfamilias de psitaciformes, las cacatúas y los escasos y confinados loros de Nueva Zelanda, ya que tienen representantes en América, África, Asia y Oceanía.",
      val:[40,120,90]
    }
  ]
  const text = ['like', 'love', 'enjoy'];
  const color = ['success', 'danger', 'warning']
  return (
    <>
    {
      posts.map(post => <Post title={post.title} content={post.content} val={post.val} text={text} color={color}/>)
    }
    </>
  );
}

export default App;
