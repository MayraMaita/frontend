import { Button } from "bootstrap";
import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Boton, Boton2} from './componentes/boton'
import {Nav} from './componentes/nav'
function App() {
  return (
    <>
     <Nav></Nav>
    <Boton></Boton>
    <Boton2></Boton2>
    </>
  );
}

export default App;
