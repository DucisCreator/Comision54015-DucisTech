import React, { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(1);
    console.log(`El contador va por: ${contador}`);
    console.log('El componente se renderizó');

    return (
        <div>
            <h2>El contador está en {contador}</h2>
            <button onClick={() => setContador(contador + 1)}>Agregar</button>
            <button onClick={() => setContador(contador - 1)}>Quitar</button>
        </div>
    );
};

export default Contador;