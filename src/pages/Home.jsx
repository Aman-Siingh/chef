import React from 'react'
import Navbar from "../components/Navbar"
import Category from "../components/Category"
import Fooditems from '../components/Fooditems'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Category/>
      <Fooditems/>
    </>
  )
}

export default Home