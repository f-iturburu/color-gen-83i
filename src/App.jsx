import "./App.css";
import { Container, Form, Button } from "react-bootstrap";
import { ColorCard } from "./components/ColorCard";
import { useState } from "react";

function generateHexColor() {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  color = "#" + color;
  return color;
}

function App() {
  const [colorNum, setColorNum] = useState([]);
  return (
    <Container fluid className="text-center">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          setColorNum(e.target[0].value);
        }}
      >
        <div className="d-flex my-3 justify-content-center">
          <Form.Control
            id="colorNum"
            className="w-50"
            min="1"
            max="30"
            type="number"
            placeholder="Inserte la cantidad de colores que desea generar (entre 1 y 30)"
          />
          <Button type="submit" className="ms-3" variant="primary">
            Generar
          </Button>
        </div>
      </Form>
      {
        

      }
    </Container>
  );
}

export default App;
