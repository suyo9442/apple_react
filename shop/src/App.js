import { useState } from "react";
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import data from './routes/data.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from "./routes/detail.js"

function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>

      <Routes>
        <Route path="/" element={
          <>
            <Container>
              <Row>
                {
                  shoes.map(function (a, i) {
                    return (
                      <Card shoes={shoes[i]} i={i} />
                    )
                  })
                }
              </Row>
            </Container>
          </>
        } />

        <Route path="/detail/:id" element={
          <>
            <Detail shoes={shoes} />
          </>
        } />

        <Route path="*" element={<div>없는페이지</div>} />

      </Routes>
    </div>
  );
}


// 상품박스 컴포넌트
function Card(props) {
  return (
    <Col>
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="80%" />
      <h4> {props.shoes.title} </h4>
      <p> {props.shoes.price} </p>
    </Col>
  )
}


//Nested Routed 테스트
function Nested() {
  return (
    <div>
      <h3>오늘의 이벤트</h3>
      <Outlet />
    </div>
  )
}


export default App;