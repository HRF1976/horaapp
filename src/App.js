import logo from './logo.svg';
import './App.css';
import Hora from './Componentes/Hora';
import Example from './Componentes/Header'
import Boton from './Componentes/Boton'
import Counter from './Componentes/Counter';

function App() {
  return (
    <div className="App">
    <Example/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <hr/>
        <button class="btn btn-primary" onClick={Boton}>Enviar respuestas</button>
        <hr/>

      <Counter valorInicial={10}/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        
        
        >

          Learn React
        </a>
        <p>hola mundo React</p>
        <Hora/>


      </header>
    </div>
  );
}

export default App;
