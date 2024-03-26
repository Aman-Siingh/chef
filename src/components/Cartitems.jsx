import React from 'react'
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";



const Cartitems = () => {
  return (
    <div className='flex gap-2 shadow-md p-2 rounded-lg'>
        <MdDeleteForever className='text-gray-500 absolute right-7'/>

        <img src="https://scontent.cdninstagram.com/v/t39.30808-6/433307011_18429783190038922_6103380130448825997_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3ODYuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=LBDn1XEAVeQAX97kVeN&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMyNTcxMTkyODMyMDA1NDgxMA%3D%3D.2-ccb7-5&oh=00_AfBdB3n_bB-TEDd5b_B6uIGifqpESduMTgonVZyrIA3xRA&oe=66078015&_nc_sid=10d13b" alt="food" className='w-[50px] h-[50px] rounded-lg' />

        <div className='leading-5'>
            <h2>Circle Non Veg Platter</h2>
            <div className='flex justify-between'>
                <span className='text-green-500 font-bold'>₹120</span>
                <div className='flex justify-center gap-2 absolute right-7'>
                    <FiPlus className='border-2 hover:bg-green-500 hover:border-green-500 text-xl rounded-lg cursor-pointer'/>
                    <span>1</span>    
                    <FiMinus className='border-2 hover:bg-green-500 hover:border-green-500 text-xl rounded-lg cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cartitems