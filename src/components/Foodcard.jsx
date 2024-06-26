import React from 'react'


const Foodcard = ({id, name, desc, price, img}) => {
  return (
    <div className='flex flex-col w-[250px] bg-white p-3 m-6 rounded-lg hover:scale-105 shadow-lg'>
        <img src={img} alt="Food" className='w-auto h-[200px] my-3 rounded-lg  transition-all duration-500 ease-in-out'/>

        <div className='font-bold flex justify-between '>
          <h2>{name}</h2>
          <span className='text-green-500'>₹{price}</span>
        </div>
        <p className='text-sm font-normal py-3'>{desc.slice(0,50)}...</p>
        <div className='flex justify-between'>
          <span>
             
          </span>
          <button className='p-1 text-sm font-normal bg-green-500 rounded-lg text-white hover:bg-green-600'>Add to Cart</button>
        </div>
    </div>

  )
}

export default Foodcard