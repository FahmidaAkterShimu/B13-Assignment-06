import React, { use } from 'react';
import PricingCard from './PricingCard';

const Pricing = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise);

    return (
        <div className='max-w-300 mx-auto py-10 md:py-30 px-2 md:px-4'>
            <div className='text-center mb-10'>
                <h2 className='text-4xl md:text-5xl font-bold md:font-extrabold mb-4'>Simple, Transparent Pricing</h2>
                <p className='text-base text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            {/* Card container */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center md:justify-between gap-7.5'>

                {/* cards */}
                {
                    pricingData.map(pricing => <PricingCard
                        key={pricing.id}
                        pricing={pricing}></PricingCard>)
                }


                {/* <div className="card bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-sm rounded-2xl">
                    <div className="card-body relative text-white">
                        <div className='absolute -top-3 left-32'>
                            <span className="badge bg-[#FEF3C6] text-sm text-[#BB4D00] py-2.5 px-3 rounded-full">Most Popular</span>
                        </div>

                        <h2 className="text-2xl font-bold">Premium</h2>
                        <p className='text-base opacity-80'>Best for professionals</p>
                        <p className='text-xl'>
                            <span className="text-[40px] font-bold">$29</span> /Month
                        </p>

                        <ul className="mt-6 flex flex-col gap-2 text-base font-medium">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>High-resolution image generation</span>
                            </li>
                        </ul>

                        <div className="mt-6">
                            <button className="btn btn-block bg-white rounded-full text-base font-bold text-[#4F39F6]">Subscribe</button>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default Pricing;