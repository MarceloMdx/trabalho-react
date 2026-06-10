/* 
  GUIA PARA INICIANTES EM REACT
  
  Este projeto demonstra os conceitos fundamentais de React.
  Leia os comentários para entender cada conceito!
*/

// ============================================
// 1. IMPORTANDO DEPENDÊNCIAS
// ============================================
// import - traz funcionalidades de outros arquivos
// useState - hook para criar estado (dados que mudam)
// App.css - estilos da aplicação

import { useState } from 'react';
import Header from './components/Header';
import Secoes from './components/Secoes';
import Rodape from './components/Rodape';
import './App.css';

// ============================================
// 2. CRIANDO UM COMPONENTE
// ============================================
// function App() - é como criar um componente React
// Componentes são funções que retornam JSX
// JSX é JavaScript misturado com HTML

function App() {
  // ============================================
  // 3. USANDO STATE (useState)
  // ============================================
  // useState retorna 2 coisas em um array:
  // - modoEscuro: o valor atual
  // - setModoEscuro: função para mudar o valor
  // false = começa em modo claro
  
  const [modoEscuro, setModoEscuro] = useState(false);

  // ============================================
  // 4. CRIANDO UMA FUNÇÃO
  // ============================================
  // Essa função troca o estado (true vira false, false vira true)
  // ! = "não" em programação
  
  const toggleModoEscuro = () => {
    setModoEscuro(!modoEscuro);
  };

  // ============================================
  // 5. RETORNANDO JSX
  // ============================================
  // JSX é como HTML, mas dentro de JavaScript
  // Chaves {} = você está escrevendo JavaScript
  // className = classe CSS (não use "class" em React!)
  
  return (
    <div className={`app ${modoEscuro ? 'dark' : 'light'}`}>
      {/* 
        ============================================
        6. PASSANDO PROPS (propriedades)
        ============================================
        Props são como argumentos de função
        Estamos passando modoEscuro para o componente Header
        lá em Header.jsx, podemos usar assim: props.modoEscuro
      */}
      <Header modoEscuro={modoEscuro} />
      
      {/* 
        ============================================
        7. CRIANDO EVENTOS
        ============================================
        onClick = "quando clicar, execute..."
        toggleModoEscuro = função que definimos acima
        Ternário (? :) = if/else em uma linha
      */}
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

// ============================================
// 8. EXPORTANDO O COMPONENTE
// ============================================
// export default - permite usar esse componente em outro arquivo

export default App;

/* 
  RESUMO DOS CONCEITOS:
  
  ✅ Componentes - funções que retornam JSX
  ✅ Props - dados que passamos de um componente para outro
  ✅ State - dados que mudam e fazem a página atualizar
  ✅ JSX - mistura de HTML e JavaScript
  ✅ onClick - evento de clique
  ✅ Ternário - if/else em uma linha (? :)
  ✅ export/import - compartilhar código entre arquivos
  
  Vá para Header.jsx, Secoes.jsx e Rodape.jsx para ver
  como esses conceitos são usados!
*/
