import React from 'react';
import Image from "next/image";
import LeadTriggerButton from "@/components/LeadTriggerButton/LeadTriggerButton";

function ProductCard({product}) {
    return (
        <div className="product-card" id={`product-${product.id}`}>
            <div className="container">
                <h5>{product.title}</h5>

                <Image src={product.image} alt={product.title} width={320} height={240}/>

                <div className="description">
                    {product.description}
                </div>
            </div>


            <button></button>

            <LeadTriggerButton text={'забронировать'}/>
        </div>
    );
}

export default ProductCard;