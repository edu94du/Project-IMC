import './app.css';
import { useState } from 'react';

export default function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [mensagem, setMensagem] = useState('');

  function imc() {

    const alt = altura / 100;
    const imc = peso / (alt * alt);
    const base = 18.6

    if (imc < base) {

      setMensagem('You are underweight 😱 ' + imc.toFixed(2))
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem('You are at the ideal weight 😎 ' + imc.toFixed(2))
    } else if (imc >= 24.9 && imc < 34.9) {
      setMensagem('You are a little overweight 😕 ' + imc.toFixed(2))
    } else if (imc > 34.9) {
      setMensagem('Obesity care 😱 ' + imc.toFixed(2))
    }
  }

  return (
    <div className="app">
      <h1>IMC Calculator</h1>
      <span>Lets calc your imc</span>

      <div className="area-input">
        <input type="text" placeholder="Insert your weight here" value={peso} onChange={(e) => setPeso(e.target.value)}></input>
        <input type="text" placeholder="Insert your height here" value={altura} onChange={(e) => setAltura(e.target.value)}></input>
        <button onClick={imc}>
          Calculate
        </button>
        <h2>{mensagem}</h2>
      </div>
    </div>
  );
}
