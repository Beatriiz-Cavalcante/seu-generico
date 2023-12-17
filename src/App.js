import './App.css';

import Cabecalho from './components/Cabecalho';
import Pesquisa from './components/Pesquisa';
import PesquisaVoz from './components/PesquisaVoz';
import CategoriaNome1 from './components/CategoriaNome1';
import Carrossel1 from './components/Carrossel1';

function App() {
  return (
    <main className="principal">
        <Cabecalho />
        <Pesquisa />
        <PesquisaVoz />
        <CategoriaNome1 />
        <Carrossel1 />
    </main>
  );
}

export default App;
