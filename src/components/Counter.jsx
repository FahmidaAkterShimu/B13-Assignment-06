import React from 'react';

const Counter = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10 md:py-15'>
            <div className='max-w-300 mx-auto flex flex-col md:flex-row justify-around items-center gap-10 md:gap-0 text-white'>
                <div>
                    <h1 className='text-5xl md:text-6xl font-extrabold mb-2 md:mb-3'>50K+</h1>
                    <p className='text-xl md:text-2xl font-medium opacity-80'>Active Users</p>
                </div>
                <div className='hidden md:flex divider divider-horizontal w-4'></div>
                <div>
                    <h1 className='text-5xl md:text-6xl font-extrabold mb-2 md:mb-3'>200+</h1>
                    <p className='text-xl md:text-2xl font-medium opacity-80'>Premium Tools</p>
                </div>
                <div className='hidden md:flex divider divider-horizontal w-4'></div>
                <div>
                    <h1 className='text-5xl md:text-6xl font-extrabold mb-2 md:mb-3'>4.9</h1>
                    <p className='text-xl md:text-2xl font-medium opacity-80'>Rating</p>
                </div>
            </div>
        </div>

    );
};

export default Counter;