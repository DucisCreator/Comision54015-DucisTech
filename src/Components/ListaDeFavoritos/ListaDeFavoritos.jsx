import React from 'react';
import { Link } from 'react-router-dom';

const ListaDeFavoritos = ({ productos, quitarDeFavoritos }) => {
    const handleRemoveFromFavorites = (productId) => {
        quitarDeFavoritos(productId);
    };

    return (
        <div>
            <h2>Lista de Favoritos</h2>
            {productos.map(producto => (
                <div key={producto.id} className="product">
                    <img src={producto.img} alt={producto.title} />
                    <h3>{producto.title}</h3>
                    <p>{producto.description}</p>
                    <div>
                        <Link to={`/item/${producto.id}`}>
                            <button>Agregar al carrito</button>
                        </Link>
                        <button onClick={() => handleRemoveFromFavorites(producto.id)}>Quitar de Favoritos</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListaDeFavoritos;