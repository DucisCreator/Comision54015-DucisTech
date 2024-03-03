import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ListaDeFavoritos from './Components/ListaDeFavoritos/ListaDeFavoritos';
import Conocenos from './Components/Conocenos/Conocenos';
import Checkout from './Components/Checkout/Checkout';
import { CartProvider } from './CartContext';

function App() {
    const products = [
        {
            id: 1,
            img: 'https://www.notebookcheck.org/fileadmin/Notebooks/Honor/Magic5_Pro/Bild_Honor_Magic5_Pro_4964.jpg',
            title: 'Honor Magic 5 Pro',
            description: 'Poderoso gama alta que te rendirá en lo que quieras',
            price: 1000,
        },
        {
            id: 2,
            img: 'https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/realmegtneo5teaser16.jpg',
            title: 'Realme GT Neo 5',
            description: 'Gama media premium con el poder de un gama alta',
            price: 700,
        },
        {
            id: 3,
            img: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-poco-f4-5g-02.jpg',
            title: 'Poco F4',
            description: 'Poder a precio de derribo',
            price: 300,
        },
    ];

    const [favoritos, setFavoritos] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const addToFavorites = (productId) => {
        const producto = products.find(producto => producto.id === productId);
        setFavoritos([...favoritos, producto]);
    };

    const addToCart = (productId) => {
        const producto = products.find(producto => producto.id === productId);
        setCartItems([...cartItems, producto]);
    };

    const quitarDeFavoritos = (productId) => {
        const updatedFavoritos = favoritos.filter(producto => producto.id !== productId);
        setFavoritos(updatedFavoritos);
    };

    return (
        <Router>
            <CartProvider>
                <div className='App'>
                    <Navbar cartCount={cartItems.length} />
                    <Routes>
                        <Route exact path='/' element={<ItemListContainer products={products} addToCart={addToCart} addToFavorites={addToFavorites} />} />
                        <Route path='/item/:id' element={<ItemDetailContainer products={products} />} />
                        <Route path='/lista-favoritos' element={<ListaDeFavoritos productos={favoritos} quitarDeFavoritos={quitarDeFavoritos} />} />
                        <Route path='/conocenos' element={<Conocenos descripcion="Somos una empresa dedicada a..." />} />
                        <Route path='/checkout' element={<Checkout cartItems={cartItems} />} />
                    </Routes>
                </div>
            </CartProvider>
        </Router>
    );
}

export default App;


