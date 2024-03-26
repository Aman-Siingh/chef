import React from 'react'
import Foodcard from './Foodcard'
import FoodData from '../FoodData.js'

const Fooditems = () => {
  return (
    <div className='flex flex-wrap gap-1 justify-start'>
    {
      FoodData.map((food) =>  {
        return <Foodcard key={food.id} id={food.id} name={food.name} img={food.img} price={food.price} desc={food.desc}/>;
      })
    }
    </div>
  )
}

export default Fooditems