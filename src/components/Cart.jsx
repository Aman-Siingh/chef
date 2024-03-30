import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import Cartitems from './Cartitems';

const Cart = () => {
  return (
    <>
    <div className='fixed right-0 top-0 w:full lg:w-[25vw] h-full bg-white p-3 mb-3 shadow-lg'>
        <div className='flex justify-between mx-3'>
            <span className='text-xl font-bold mb-3'>My Orders</span>
            <IoCloseCircleOutline className='hover:scale-110 text-2xl hover:text-red-500'/>
        </div>
        <Cartitems/>
        <Cartitems/>
        <div className='absolute bottom-0 mb-4'>
            <h1>Items : you</h1>
            <h1>Amount :</h1>
            <hr />
            <button className='p-1 font-normal bg-green-500 rounded-lg text-white hover:bg-green-600 w-[90vw] lg:w-[23vw]'>Checkout</button>
        </div>
    </div>
    <div></div>
    </>
  )

}

export default Cart