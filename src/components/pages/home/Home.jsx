// useState un HOOK
import { useState } from "react";

const Home = () => {
  //const x = useState() // devuelve un array [variable, funcion que modifica a esa variable]
  // es la unica funcion que puede modificar la variable
  // console.log(x[0])  // muestra la variable
  // console.log(x[1])  // muestra la funcion

  //Lo desectructuramos, definiendo la variable y la funcion-
  let [contador, setContador] = useState(0); // Entre () va el valor con que inicializa la variable

  //  // Acá le digo: o el valor que quiero asignarle a la variable, o la operacion que quiero hacer con la variable
  const sumar = () => {
    setContador(contador + 1);
  };
  const sumar2 = (num) => {
    setContador(contador + num);
  };

  const [name, setName] = useState("Pepe");

  return (
    <>
      <h1>El nombre es {name}</h1>
      <button onClick={() => setName("Moni")}>Cambiar nombre a Moni</button>
      <h3>El contador esta en {contador}</h3>
      <button onClick={sumar}>Sumar contador</button>
      {/*  Si la función en el evento onClick necesita parametros, va a llevar parentisis y eso va a hacer que se ejecute automaticamente, sin esperar el click
      Entonces, hay que agregar un calback para que se ejecute solo cuando la funcion es llamada al hacer click */}
      <button onClick={() => sumar2(15)}>Sumar contador en 15</button>
    </>
  );
};

export default Home;
