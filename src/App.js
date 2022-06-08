import React from 'react';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';


//Paginas
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';

import Footer from './pages/Footer';
import Contenido from './pages/Contenido';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Contenido/>
      <Container>
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
        </Routes>

      </Container>
      <Footer/>
      
    </Router>
  )
}


export default App;
