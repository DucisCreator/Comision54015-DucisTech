import React, { useState } from 'react';
import Contador from "../../Contador";

const Item = ({ product, onAddToCart }) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
        onAddToCart(product);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="product">
            <img src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <div className="product-controls">
                <Contador
                    count={count}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                />
            </div>
        </div>
    );
};

export default Item;

