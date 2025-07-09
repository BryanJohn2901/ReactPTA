import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rodape from './components/Rodape';

/* Pages */
import Home from './pages/Home';
import Livros from './pages/Livros';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livros" element={<Livros />} />
        </Routes>
        <Rodape />
      </div>
    </BrowserRouter>
  );
};

export default App;
