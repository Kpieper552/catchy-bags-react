import React from 'react';

function Product({ banner, image, title, amount}) {
    return (
        <article className="product">
            <span className="product-banner">
                {banner}
            </span>
            <img src={image} alt={title} />
            <p className="product-title">
                {title}
            </p>
            <h4 className="product-amount">
                {amount}
            </h4>

        </article>

    );
}
{/* verschillende properties dienen gedefinieerd te worden by className*/}
export default Product;


