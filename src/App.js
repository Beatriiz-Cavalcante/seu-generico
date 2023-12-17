import './App.css';

import Cabecalho from './components/Cabecalho';
import Pesquisa from './components/Pesquisa';
import PesquisaVoz from './components/PesquisaVoz';
import CategoriaNome1 from './components/CategoriaNome1';
import Carrossel1 from './components/Carrossel1';
import CategoriaNome2 from './components/CategoriaNome2';
import Carrossel2 from './components/Carrossel2';
import CategoriaNome3 from './components/CategoriaNome3';
import Carrossel3 from './components/Carrossel3';


function App() {
  return (
    <main className="principal">
        <Cabecalho />
        <Pesquisa />
        <PesquisaVoz />
        <CategoriaNome1 />
        <Carrossel1 />
        <CategoriaNome2 />
        <Carrossel2 />
        <CategoriaNome3 />
        <Carrossel3 />
    </main>
  );
}

export default App;
