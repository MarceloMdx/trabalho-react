import { useState } from 'react';
import Header from './components/Header';
import Secoes from './components/Secoes';
import Rodape from './components/Rodape';
import './App.css';

function App() {
  // Estado para controlar o modo escuro (REQUISITO: useState)
  const [modoEscuro, setModoEscuro] = useState(false);

  const toggleModoEscuro = () => {
    setModoEscuro(!modoEscuro);
  };

  return (
    <div className={`app ${modoEscuro ? 'dark' : 'light'}`}>
      <Header modoEscuro={modoEscuro} />
      
      {/* Botão para alternar modo escuro */}
      <button 
        className="btn-toggle-theme"
        onClick={toggleModoEscuro}
        aria-label="Alternar modo escuro"
      >
        {modoEscuro ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
      </button>

      <Secoes modoEscuro={modoEscuro} />
      <Rodape modoEscuro={modoEscuro} />
    </div>
  );
}

export default App;
