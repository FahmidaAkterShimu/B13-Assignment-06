import React from 'react';

const Steps = () => {
    return (
        <div className='bg-[#F9FAFC] py-10 md:py-30 mx-4 lg:mx-0'>
            <div className='max-w-300 mx-auto'>

                <div className='text-center mb-10'>
                    <h2 className='text-4xl md:text-5xl font-bold md:font-extrabold text-[#101727] mb-4'>Get Started in 3 Steps</h2>
                    <p className='text-base text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-7.5'>

                    {/* card */}
                    <div className='bg-white rounded-2xl border-2 border-[#F1F1F1] p-6'>
                        <div className='flex justify-end mb-6'>
                            <div className="badge badge-primary badge-xs bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold py-4 px-2.5 rounded-full text-sm">01</div>
                        </div>

                        <div className='flex flex-col justify-center items-center text-center gap-4'>
                            <div className='rounded-full bg-[#EBE6FB] p-5'>
                                <img src="user.png" alt="" />
                            </div>
                            <h3 className='text-2xl font-bold text-[#101727]'>Create Account</h3>
                            <p className='text-base text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>

                    {/* card */}
                    <div className='bg-white rounded-2xl border-2 border-[#F1F1F1] p-6'>
                        <div className='flex justify-end mb-6'>
                            <div className="badge badge-primary badge-xs bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold py-4 px-2.5 rounded-full text-sm">02</div>
                        </div>

                        <div className='flex flex-col justify-center items-center text-center gap-4'>
                            <div className='rounded-full bg-[#EBE6FB] p-5'>
                                <img src="package.png" alt="" />
                            </div>
                            <h3 className='text-2xl font-bold text-[#101727]'>Choose Products</h3>
                            <p className='text-base text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                    </div>

                    {/* card */}
                    <div className='bg-white rounded-2xl border-2 border-[#F1F1F1] p-6'>
                        <div className='flex justify-end mb-6'>
                            <div className="badge badge-primary badge-xs bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold py-4 px-2.5 rounded-full text-sm">03</div>
                        </div>

                        <div className='flex flex-col justify-center items-center text-center gap-4'>
                            <div className='rounded-full bg-[#EBE6FB] p-5'>
                                <img src="rocket.png" alt="" />
                            </div>
                            <h3 className='text-2xl font-bold text-[#101727]'>Start Creating</h3>
                            <p className='text-base text-[#627382]'>Download and start using your premium tools immediately.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Steps; <div>
</div>