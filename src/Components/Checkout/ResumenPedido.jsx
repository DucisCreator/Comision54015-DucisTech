import React from 'react';

const ResumenPedido = ({ cartItems }) => {
    if (!cartItems || cartItems.length === 0) {
        return <p>No hay elementos en el carrito</p>;
    }

    return (
        <div className="resumen-pedido">
            <h3>Resumen del Pedido</h3>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <span>Cantidad: {item.quantity}</span>
                        <span>Precio: ${item.price * (item.quantity || 1)}</span>
                    </li>
                ))}
            </ul>
            <div className="total">
                Total: $
                {cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0)}
            </div>
        </div>
    );
};

export default ResumenPedido;