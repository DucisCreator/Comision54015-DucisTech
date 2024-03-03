import React, { useRef } from 'react';

const ContadorRef = ({ actualizarTotalProductos }) => {
    const contador = useRef(0);

    const handleClick = (operacion) => {
        if (operacion) {
            contador.current++;
        } else {
            contador.current--;
        }
        actualizarTotalProductos(contador.current);
    };

    return (
        <>
            <div>
                <button onClick={() => handleClick(true)}>Agregar</button>
                <button onClick={() => handleClick(false)}>Quitar</button>
            </div>
            <h2>{contador.current}</h2>
        </>
    );
};

export default ContadorRef;