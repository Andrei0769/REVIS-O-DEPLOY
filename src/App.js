import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaCadastro from './pages/Cadastro';
import PaginaListaUsuarios from './pages/Lista';
import './App.css'; // Para estilos globais, se necessário
import TelaInicial from './pages/TelaInicial';
import ListaDeJogadores from './components/ListaDeUsuarios';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/Cadastro" element={<PaginaCadastro />} />
        <Route path="/usuarios" element={<PaginaListaUsuarios />} />
        <Route path="/jogadores" element={<ListaDeJogadores />} />
      </Routes>
    </Router>
  );
}

export default App;