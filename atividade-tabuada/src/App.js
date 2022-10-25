import React from 'react';
import Titulo from './Titulo';
import Titulo2 from './Titulo2';
import Tabuada from './Tabuada';
import Cores from './Cores';
import Mensagem from './Mensagem';
import Header from './Header';
import Container from './Container';
import Metodo1 from './Metodo1';
//import './App.css';

//let n = parseInt(prompt("Informe um número", "5"));

//class Titulo extends React.Component{
//  render(){
//    return <h2> Componente Titulo com classe!</h2>
//  }
//}

//function Titulo2(){
//  return <h2>Componente de título com função.</h2>
//}

/*
pagina 2
  function App() {
  return (
    <div>
      <titulo />
      <titulo2/>
      <h1>Tabuada do {n}</h1>
      <h3>1 x {1*n}</h3>
      <h3>2 x {2*n}</h3>
      <h3>3 x {3*n}</h3>
      <h3>4 x {4*n}</h3>
      <h3>5 x {5*n}</h3>
      <h3>6 x {6*n}</h3>
      <h3>7 x {7*n}</h3>
      <h3>8 x {8*n}</h3>
      <h3>9 x {9*n}</h3>
      <h3>10 x {10*n}</h3>
    </div>
  );
}
pagina 6
function App() {
  return (
    <div>
      <Titulo />
      <Titulo2 />
      <Tabuada />
    </div>
  );
}
pagina 7
let n = prompt("Digite um número", "5");
function App() {
  return (
    <div>
      <Titulo />
      <Titulo2 />
      <Tabuada numero = {n}/>
    </div>
  );
}
*/
let n = prompt("Digite um número", "5");
function App() {
  return (
    <div align="center">
      <Cores />
      <Titulo titulo = "Fatec"
            texto = "Faculdade de Tecnologia de Presidente Prudente"
            link = "https://www.fatecpp.edu.br"
            />
      <Titulo2 />
      <Tabuada numero = {n}/>
      <Mensagem/>
      <Header /*favcol="Amarelo"*//>
      <Container/>
      <Metodo1/>
  

    </div>
  );
}


export default App;
