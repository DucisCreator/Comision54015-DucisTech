import React from "react";
import { Link } from "react-router-dom";
import Contador from "../../Contador";
import Item from "./Item";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting, products, addToCart, removeFromCart, addToFavorites }) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product">
                        <Link to={`/item/${product.id}`}>
                            <img src={product.img} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p>Precio: ${product.price}</p>
                        </Link>
                        <div className="product-controls">
                            <Contador
                                onIncrement={() => addToCart(product.id)}
                                onDecrement={() => removeFromCart(product.id)}
                            />
                            <button onClick={() => addToFavorites(product.id)}>Agregar a Favoritos</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;



