import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../../Product";

const ItemDetailContainer = ({ products, addToCart }) => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    useEffect(() => {
    const selectedProduct = products.find(
        (product) => product.id === parseInt(id)
    );
    setProduct(selectedProduct);
    }, [id, products]);

    return (
        <div>
        {product ? (
            <Product
            img={product.img}
            title={product.title}
            description={product.description}
            price={product.price}
            addToCart={() => addToCart(product.id)}
            />
        ) : (
            <p>Cargando producto...</p>
        )}
        </div>
    );
};

export default ItemDetailContainer;