import './app.css';
import { useState } from 'react';

export default function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [mensagem,setMensagem] = useState('');

  function imc() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      setMensagem('voce esta abaixo do peso 😱 ' + imc.toFixed(2))
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem('voce esta no peso ideal 😎 ' + imc.toFixed(2))
    } else if (imc >= 24.9 && imc < 34.9) {
      setMensagem('voce esta um pouco acima do peso ideal 😕 ' + imc.toFixed(2))
    } else if (imc > 34.9) {
      setMensagem('Cuidado Obesidade 😱 ' + imc.toFixed(2))
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular o seu imc</span>

      <div className="area-input">
        <input type="text" placeholder="Digite seu peso aqui" value={peso} onChange={(e) => setPeso(e.target.value)}></input>
        <input type="text" placeholder="Digite sua altura" value={altura} onChange={(e) => setAltura(e.target.value)}></input>
        <button onClick={imc}>
          calcular
        </button>
        <h2>{mensagem}</h2>
      </div>
    </div>
  );
}
