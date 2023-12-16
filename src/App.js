import './App.css';

import Cabecalho from './components/Cabecalho';
import Pesquisa from './components/Pesquisa';
import PesquisaVoz from './components/PesquisaVoz';

function App() {
  return (
    <main className="principal">
        <Cabecalho />
        <Pesquisa />
        <PesquisaVoz />
    </main>
  );
}

export default App;
