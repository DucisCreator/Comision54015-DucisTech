import React from 'react';

const ProductList = ({ products }) => {
    return (
        <div>
            <h2>Lista de productos:</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Precio: {product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
