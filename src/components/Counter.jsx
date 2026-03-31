import React from 'react';

const Counter = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-15'>
            <div className='max-w-300 mx-auto flex justify-around items-center text-white'>
                <div>
                    <h1 className='text-6xl font-extrabold mb-3'>50K+</h1>
                    <p className='text-2xl font-medium'>Active Users</p>
                </div>
                <div className='divider divider-horizontal w-4'></div>
                <div>
                    <h1 className='text-6xl font-extrabold mb-3'>200+</h1>
                    <p className='text-2xl font-medium'>Premium Tools</p>
                </div>
                <div className='divider divider-horizontal w-4'></div>
                <div>
                    <h1 className='text-6xl font-extrabold mb-3'>4.9</h1>
                    <p className='text-2xl font-medium'>Rating</p>
                </div>
            </div>
        </div>

    );
};

export default Counter;