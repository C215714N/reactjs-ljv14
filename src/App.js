import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import NavBar from './components/navbar';


function App() {
  const social = ['facebook','instagram','twitter','linkedin','whatsapp','github'];
  const navigation = ['inicio', 'galeria', 'contacto'];
  const themes = ['Introduccion','Templates','Componentes','Propiedades','Estado'];
  return (
    <>
      <Header
        className="App-logo"
        src={logo}
        title="ReactJS Developer" 
        subtitle="Aprendiendo con Cristian y su amigos" />
      <NavBar navType="App-header" links={navigation} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, tempora! Maiores temporibus corporis inventore, nostrum velit iste, quis totam iusto, voluptate a asperiores. Sunt deleniti provident quam aspernatur dolorem iste? Quas error illo cum maxime enim quo illum assumenda vitae. Eos aperiam, ipsa odit reiciendis eius dicta! Expedita, iusto. Reprehenderit expedita necessitatibus quas nesciunt vero accusantium distinctio repellendus quaerat? Repellendus illum facilis, laborum unde ullam aliquid voluptatibus consequuntur ipsam atque quae libero perspiciatis voluptatum tempora cum perferendis corrupti provident voluptate? Accusantium quibusdam rem dolores ullam quis maiores non amet quod voluptatem quasi? Eos commodi laborum nesciunt! Quam, hic. Ipsa, delectus?
      </p>
      <NavBar navType="App-logo" links={themes} />
      <NavBar navType="App-link" links={social} />
    </>
  );
}

export default App;
