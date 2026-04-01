import React, { useState } from 'react';
import CardsFeature from './CardsFeature';
import { toast } from 'react-toastify';

const ToolCards = ({ tool, carts, setCarts }) => {
    const { title, description, price, pricingType, status, image, features } = tool;

    const [isPurchased, setIsPurchased] = useState(false);

    const handlePurchase = () => {
        setIsPurchased(true);

        const isFound = carts.find(item => item.id === tool.id);
        if (isFound) {
            toast.error("Item already in cart!");
            return;
        };

        setCarts([...carts, tool]);
        toast.success("Item added to cart!");
    }


    return (
        <div className="card border border-[#F2F2F2] shadow-sm rounded-2xl">
            <div className="card-body text-[#101727] space-y-2.5">
                <div className='flex justify-end items-center mb-0'>
                    {status === "Best Seller" && <span className="badge bg-[#FEF3C6] text-sm text-[#BB4D00] py-4 px-3 rounded-full">{status}</span>}
                    {status === "Popular" && <span className="badge bg-[#E1E7FF] text-sm text-[#4F39F6] py-4 px-3 rounded-full">{status}</span>}
                    {status === "New" && <span className="badge bg-[#DBFCE7] text-sm text-[#0A883E] py-4 px-3 rounded-full">{status}</span>}
                </div>

                <div className='flex justify-start items-center'>
                    <div className='rounded-full border border-[#F2F2F2] p-3.5'>
                        <img src={image} alt="" />
                    </div>
                </div>

                <h2 className="text-2xl font-bold">{title}</h2>
                <p className='text-base text-[#627382]'>{description}</p>
                <p className='text-base text-[#627382]'>
                    <span className="text-2xl font-bold text-[#101727]">${price}</span> /{pricingType}
                </p>

                <ul className="flex flex-col gap-2 text-base font-medium text-[#627382]">

                    {features.map((cardFeatures, i) =>
                        <CardsFeature key={i} cardFeatures={cardFeatures}></CardsFeature>
                    )}

                </ul>

                <div>
                    <button
                        onClick={handlePurchase}
                        className={`btn btn-block ${isPurchased? "bg-[#0A883E]" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"} rounded-full text-base font-bold text-white py-6`}>
                        {isPurchased ? "Added to cart" : "Buy Now"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ToolCards;