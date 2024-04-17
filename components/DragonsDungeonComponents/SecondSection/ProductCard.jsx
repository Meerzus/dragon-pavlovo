'use client'

import React from 'react';
import Image from "next/image";
import LeadTriggerButton from "@/components/LeadTriggerButton/LeadTriggerButton";

function ProductCard({product}) {
    return (
        <div className="product-card" id={`product-${product.id}`}>
            <div className="container">
                <h4>{product.title}</h4>

                <Image src={product.image} alt={product.title} width={320} height={240}/>

                <p>
                    {product.description}
                </p>
            </div>

            {
                product.id !== 6 &&
                <button onClick={() => {
                    document.getElementById(`product-${product.id}`).classList.toggle('product-card-active')
                    document.getElementById(`background`).classList.toggle('background-active')
                }}>подробнее</button>
            }

            <LeadTriggerButton text={product.id === 6 ? 'оставить заявку на звонок' : 'бронь'}/>
        </div>
    );
}

export default ProductCard;