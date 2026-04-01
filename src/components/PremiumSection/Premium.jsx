import React, { use, useState } from 'react';
import ToolCards from './ToolCards';

const Premium = ({ premiumPromise }) => {
    const [selected, setSelected] = useState("products");

    const toolData = use(premiumPromise);

    return (
        <div className='max-w-300 mx-auto py-10 md:py-30 px-2 md:px-0'>
            <div className='text-center space-y-4 mb-10'>
                <h2 className='text-4xl md:text-5xl font-bold md:font-extrabold text-[#101727]'>Premium Digital Tools</h2>
                <p className='text-base text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className='flex justify-center'>
                    <div className='border border-[#F6F6F6] rounded-full p-1'>
                        <button
                            onClick={() => setSelected("products")}
                            className={`btn py-6 px-6 text-base font-bold rounded-full ${selected === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-sm" : "btn-ghost text-[#25065D]"}`}>Products</button>
                        <button
                            onClick={() => setSelected("cart")}
                            className={`btn py-6 px-6 text-base font-bold rounded-full  ${selected === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-sm" : "btn btn-ghost text-[#25065D]"}`}>Cart (0)</button>
                    </div>
                </div>
            </div>

            {/* Card container */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center md:justify-between gap-7.5'>

                {/* cards */}
                {
                    toolData.map(tool => <ToolCards
                        key={tool.id}
                        tool={tool}></ToolCards>)
                }


            </div>
        </div>
    );
};

export default Premium;