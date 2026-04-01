import React from 'react';

const PremiumTab = ({ selected, setSelected, carts }) => {
    console.log(carts.length);
    return (
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
                        className={`btn py-6 px-6 text-base font-bold rounded-full  ${selected === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-sm" : "btn btn-ghost text-[#25065D]"}`}>Cart ({carts.length})
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PremiumTab;