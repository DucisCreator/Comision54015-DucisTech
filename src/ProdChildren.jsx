import React from 'react';

const ProdChildren = ({ img, title, children, price }) => {
  return (
    <div className='product-container'>
      <div className='product-card'>
        <img src={img} alt="img" />
        <h2 className='product-title'>{title}</h2>
        <p className='product-price'>{price}</p>
        <div className='product-description'>{children}</div>
      </div>
    </div>
  );
}

export default ProdChildren;
