import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {

    const { title, subtitle, price, features, buttonText, highlight } = pricing;

    return (
        //Card
        <div className={`card shadow-sm rounded-2xl 
        ${highlight ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "bg-[#F9FAFC] border border-[#F2F2F2]"}`}>
            <div className={`card-body relative 
                ${highlight ? "text-white" : "text-[#101727]"}`}>
                <div className='absolute -top-3 left-32'>
                    {highlight && <span className="badge bg-[#FEF3C6] text-sm text-[#BB4D00] py-2.5 px-3 rounded-full">Most Popular</span>}
                </div>

                <h2 className="text-2xl font-bold">{title}</h2>
                <p className='text-base opacity-80'>{subtitle}</p>
                <p className='text-xl'>
                    <span className="text-[40px] font-bold">${price}</span> /Month
                </p>

                <ul className="mt-6 flex flex-col gap-2 text-base font-medium">
                    {
                        features.map((feature,i) => <PricingFeature key={i} feature={feature}></PricingFeature>)
                    }
                </ul>

                <div className="mt-6">
                    {highlight ? <button className="btn btn-block bg-white rounded-full text-base font-bold text-[#4F39F6]">{buttonText}</button> : <button className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-base font-bold text-white">{buttonText}</button>}
                </div>
            </div>
        </div>
    );
};

export default PricingCard;