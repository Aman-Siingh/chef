import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-col lg:flex-row justify-between py-5 mx- bg-white'>
        <div>
            <input type="search" name='search' placeholder='Search Here' className='p-3 border border-yellow-500 rounded-lg w-full lg:w-[25vw] mx-9'/>
        </div>
        {/* <div> */}
            {/* <h3 className='font-bold text-gray-600'>{new Date().toUTCString().slice(0,16)}</h3> */}
            {/* <h1 className='text-2xl font-bold'> Rashmi Culinary Story </h1> */}
        {/* </div> */}
        <div className="w-12 h-12 rounded-full overflow-hidden border border-yellow-500 mx-10">
            <img src="/src/assets/profile.jpg" alt="Profile" className="object-cover w-full h-full" />
        </div>

        

    </nav>
  )
}

export default Navbar