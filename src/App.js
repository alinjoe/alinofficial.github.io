import logo from './logo.svg';
import './App.scss';
import { Routes, Route,HashRouter } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
           </Route>
      </Routes>
   </HashRouter>
  );
}

export default App;
