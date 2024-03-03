import React from 'react';
import { Link } from 'react-router-dom';
import CarWidget from '../Carwidget/Carwidget';
import Logo from '../Logo/Logo';
import './Navbar.css';

function Navbar({ cartItems }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><Logo /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Compras/Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/lista-favoritos">Lista de favoritos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/conocenos">Conócenos</Link>
                        </li>
                        <CarWidget cartItems={cartItems} />
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

