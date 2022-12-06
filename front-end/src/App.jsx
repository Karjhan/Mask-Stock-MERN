import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import NavbarMain from './components/NavbarMain';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import './App.css'

function App() {
  const [logged, setLogged] = useState(false);

  return (
    <Container fluid>
      <Header />
      <NavbarMain logged={logged} setName={setLogged} />
      <Row style={{ background: "linear-gradient(#e66465, #9198e5)" }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Row>
    </Container>
  )
}

export default App
