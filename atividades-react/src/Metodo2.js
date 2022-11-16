import React, { useState } from "react";
import Counter1 from "./Counter1.js";
import Counter2 from "./Counter2";
  
  
const App = () => {
  
// Using useState hooks for defining state
  const [counter1, setCounter1] = useState(0);
  
  const increase1 = () => {
    setCounter1(counter1 + 1);
  };
  const [counter2, setCounter2] = useState(0);
  
  const increase2 = () => {
    setCounter2(counter2 + 1);
  };
    
  return (
    <div className="container">
      <div>
        <Counter1 value={counter1} onClick={increase1} />
      </div>
      <div>
        <Counter2 value={counter2} onClick={increase2} />
      </div>
    </div>
  );
};
  
export default App;




/*O métodoshouldComponentUpdatenos permite sair do complexo ciclo de atualização de atualização de reação para evitar chamá-lo repetidamente em cada re-renderização. Ele só atualiza o componente se os adereços passarem para ele.

O métodoshouldComponentUpdateé usado principalmente para otimizar o desempenho e aumentar a capacidade de resposta do site, mas não depende dele para evitar a renderização, pois pode levar a bugs.*/