import logo from './img/SENA_logo.png';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter]=useState(0);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ejercicio1 <code>:</code> Esto es un contador.
        </p>
      <section className='contador'>
        <p>{counter}</p>
      </section>
      <section className='botones'>
        <button onClick={() =>
          {if(counter == 0){
            alert("No puedes disminuir mas");
          }else{
            setCounter(counter-1)
          }}
        } className='botones-disminuir'>
          Disminuir
        </button>
        <button onClick={() => setCounter(0)} className='botones-disminuir'>
          Reiniciar
        </button>
        <button onClick={() => setCounter(counter + 1)} className='botones-disminuir'>
          Aumentar
        </button>
      </section>
      </header>
    </div>
  );
}

export default App;
