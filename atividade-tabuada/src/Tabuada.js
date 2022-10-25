import React from 'react';

/*let n = parseInt(prompt("Informe um número", "5"));

function Tabuada() {
    return (
      <div>
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

function Tabuada(props) {
    let n = parseInt(props.numero);
    return (
      <div>
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
*/
class Tabuada extends React.Component {
    render(){
        let n = parseInt(this.props.numero);
        return (
            <div>
              <h1>Tabuada do {n}</h1>
              <h3>1 x {n} ={1*n}</h3>
              <h3>2 x {n} ={2*n}</h3>
              <h3>3 x {n} ={3*n}</h3>
              <h3>4 x {n} ={4*n}</h3>
              <h3>5 x {n} ={5*n}</h3>
              <h3>6 x {n} ={6*n}</h3>
              <h3>7 x {n} ={7*n}</h3>
              <h3>8 x{n} ={8*n}</h3>
              <h3>9 x{n} ={9*n}</h3>
              <h3>10 x{n} ={10*n}</h3>
            </div>
          );
    }
}


  export default Tabuada;
  