import React from 'react'

const Category = () => {
  return (
    <div className='m-9'>
        <h1>Find Out Best Dishes</h1>
        <div className=' font-bold flex gap-2'>
            <button className='my-2 py-2 px-3 bg-gray-300 hover:text-white-500 rounded-lg hover:bg-green-500'>All</button>
            <button className='my-2 py-2 px-3 bg-gray-300 hover:text-white-500 rounded-lg hover:bg-green-500'>Baked</button>
            <button className='my-2 py-2 px-3 bg-gray-300 hover:text-white-500 rounded-lg hover:bg-green-500'>Deserts</button>
            <button className='my-2 py-2 px-3 bg-gray-300 hover:text-white-500 rounded-lg hover:bg-green-500'>Spicy</button>
        </div>
    </div>
  )
}

export default Category