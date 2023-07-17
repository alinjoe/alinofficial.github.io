import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="about" element={<About />} />
           
           </Route>
      </Routes>
   
  );
}

export default App;
