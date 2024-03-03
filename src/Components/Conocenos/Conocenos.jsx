import React from 'react';
import imagen1 from '../../assets/img/2019-03-01.png';

const Conocenos = ({ descripcion }) => {
    return (
        <div>
            <h2>Conócenos</h2>
            <img src={imagen1} width='100px' height='auto' alt="Imagen 1" />

            <img src='https://media.istockphoto.com/id/1402285381/es/vector/d-dise%C3%B1o-de-logotipo-y-plantilla-iniciales-del-icono-d-creativo-basado-en-letras-en-vector.jpg?s=612x612&w=0&k=20&c=rOZ8mmb6RB2g698-G-Fcs17jZRfo1Y2zzoHThkBEQ3Y=' width='100px' height='auto' alt="Imagen Conócenos" />

            <p>{descripcion}</p>
        </div>
    );
}

export default Conocenos;