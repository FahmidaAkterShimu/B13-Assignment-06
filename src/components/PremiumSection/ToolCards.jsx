import React from 'react';
import CardsFeature from './CardsFeature';

const ToolCards = ({ tool }) => {
    const { title, description, price, pricingType, status, image, features } = tool;

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

                    {features.map(cardFeatures =>
                        <CardsFeature cardFeatures={cardFeatures}></CardsFeature>
                    )}

                </ul>

                <div>
                    <button className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-base font-bold text-white py-6">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToolCards;