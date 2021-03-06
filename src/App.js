import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer greeting="Hola, este es mi proyecto en React" />
      <hr />
      <div>Curso: React JS
      <hr />
        Alumno: Javier Sosa
      </div>
    </>
  );
}

export default App;
