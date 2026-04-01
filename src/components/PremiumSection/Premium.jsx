import React from 'react';

const Premium = () => {
    return (
        <div className='max-w-300 mx-auto py-10 md:py-30 px-2 md:px-0'>
            <div className='text-center space-y-4 mb-10'>
                <h2 className='text-4xl md:text-5xl font-bold md:font-extrabold text-[#101727]'>Premium Digital Tools</h2>
                <p className='text-base text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className='flex justify-center'>
                    <div className='border border-[#F6F6F6] rounded-full p-1 object-fill'>
                        <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-6 px-6 text-base font-bold text-white rounded-full shadow-sm'>Products</button>
                        <button className='btn btn-ghost bg-white hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[#25065D] hover:text-white py-6 px-6 text-base font-bold rounded-full'>Cart (0)</button>
                    </div>
                </div>
            </div>

            {/* Card container */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center md:justify-between gap-7.5'>

                {/* cards */}
                {
                    // pricingData.map(pricing => <PricingCard
                    //     key={pricing.id}
                    //     pricing={pricing}></PricingCard>)
                }

                <div className="card border border-[#F2F2F2] shadow-sm rounded-2xl">
                    <div className="card-body text-[#101727] space-y-2.5">
                        <div className='flex justify-end items-center mb-0'>
                            <span className="badge bg-[#FEF3C6] text-sm text-[#BB4D00] py-4 px-3 rounded-full">Most Popular</span>
                        </div>

                        <div className='flex justify-start items-center'>
                            <div className='rounded-full border border-[#F2F2F2] p-3.5'>
                                <img src="camera.png" alt="" />
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold">AI Writing Pro</h2>
                        <p className='text-base text-[#627382]'>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                        <p className='text-base text-[#627382]'>
                            <span className="text-2xl font-bold text-[#101727]">$29</span> /Mo
                        </p>

                        <ul className="flex flex-col gap-2 text-base font-medium text-[#627382]">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>High-resolution image generation</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>High-resolution image generation</span>
                            </li>
                        </ul>

                        <div>
                            <button className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-base font-bold text-white py-6">Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Premium;