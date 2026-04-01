import React from 'react';
import { toast } from 'react-toastify';
import PremiumTab from './PremiumTab';

const Cart = ({ selected, setSelected, carts, setCarts }) => {
    console.log(carts);
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

    const handlePayment = () => {
        setCarts([]);
        toast.success("Payment successful!");
    }

    const handleDelete = (item) => {
        const filteredArray = carts.filter(c => c.id != item.id);
        setCarts(filteredArray);
        toast.success("Item removed from the cart");
    }
    return (
        <div className='max-w-300 mx-auto py-10 md:py-30 px-2 md:px-0'>
            
            <PremiumTab selected={selected} setSelected={setSelected} carts={carts}></PremiumTab>

            {/* Card container */}
            <div className="p-10 max-w-300 mx-auto space-y-6 border border-[#F2F2F2] rounded-2xl">
                <h1 className='text-2xl font-bold text-[#101727]'>Your Cart</h1>

                {
                    carts.length === 0
                        ? <div>
                            <img className='mt-10 mx-auto w-40 h-40' src="cart.jpg" alt="" />
                            <p className="text-2xl text-[#959191] text-center py-10">Your cart is empty</p>
                        </div>
                        : <>
                            {
                                carts.map(item =>
                                    <div key={item.id} className="flex justify-between items-center gap-4 bg-[#F9FAFC] hover:border-[#9514FA] rounded-2xl py-5.5 px-5">

                                        <div className='flex justify-start items-center gap-4'>
                                            <div className='flex justify-start items-center'>
                                                <div className='bg-white rounded-full border border-[#F2F2F2] p-3.5'>
                                                    <img src={item.image} alt="" />
                                                </div>
                                            </div>
                                            <div>
                                                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                                                <p className="text-base font-medium text-[#627382]">${item.price}</p>
                                            </div>

                                        </div>

                                        <button onClick={() => handleDelete(item)} className="text-base font-bold text-[#FF3980] hover:text-red-600 cursor-pointer">
                                            Remove
                                        </button>
                                    </div>
                                )
                            }
                            <div className="flex justify-between p-2 rounded-3xl my-14">
                                <div className="text-xl text-[#627382]">Total:</div>
                                <div className="text-2xl font-bold text-[#101727]">${totalPrice}</div>
                            </div>

                            <button
                                onClick={handlePayment}
                                className="btn border-none w-full py-9 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full font-bold text-base shadow-sm text-white">Proceed to Checkout
                            </button>
                        </>
                }

            </div>

        </div>
    );
};

export default Cart;