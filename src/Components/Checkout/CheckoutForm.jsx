import React, { useState } from 'react';

const CheckoutForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        paymentMethod: 'Credit Card',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="checkout-form">
            <h3>Detalles de Envío</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="fullName" placeholder="Nombre Completo" value={formData.fullName} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Correo Electrónico" value={formData.email} onChange={handleChange} required />
                <input type="text" name="address" placeholder="Dirección" value={formData.address} onChange={handleChange} required />
                <input type="text" name="city" placeholder="Ciudad" value={formData.city} onChange={handleChange} required />
                <input type="text" name="postalCode" placeholder="Código Postal" value={formData.postalCode} onChange={handleChange} required />
                <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                    <option value="Dedit Card">Tarjeta de Crédito</option>
                    <option value="Credit Card">Tarjeta de Débito</option>
                    <option value="PayPal">PayPal</option>
                </select>
                <button type="submit">Confirmar Pedido</button>
            </form>
        </div>
    );
};

export default CheckoutForm;