import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavbarMain from './components/NavbarMain';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Order from './components/Order';
import AddNew from './components/AddNew';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie';

function App() {
  const navigate = useNavigate();
  let location = useLocation();
  const cookies = new Cookies();
  const [logged, setLogged] = useState(false);
  const jwtCookie = cookies.get("jwt");
  cookies.set('myCat', 'Pacman', { path: '/' });

  useEffect(() => {
    const verifyUser = async () => {
      if (!jwtCookie) {
        if (location.pathname == '/login') {
          navigate("/login");
        } else if (location.pathname == "/register") {
          navigate("/register");
        } else {
          navigate("/login");
        }
        setLogged(false);
      } else {
        const response = await fetch("http://localhost:9000/user/auth", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: jwtCookie })
        });
        const data = await response.json();
        console.log(data)
        if (!data.status) {
          cookies.remove("jwt");
          navigate("/login");
          setLogged(false);
        } else {
          setLogged(data.user);
          console.log(data)
        }
      }
    };
    verifyUser();
  }, [jwtCookie, location.pathname]);

  useEffect(() => {
    console.log(logged)
  })

  return (
    <Container fluid>
      <Header />
      <NavbarMain logged={logged} />
      <Row style={{ background: "linear-gradient(#e66465, #9198e5)" }}>
        <Col id="order">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/order" element={<Order userName={logged}/>} />
            <Route path="/add-new" element={<AddNew />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  )
}

export default App


