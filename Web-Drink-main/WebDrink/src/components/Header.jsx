import React, { useContext, useState, useEffect } from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Inner from './Inner'
import BestChoose from './BestChoose'
import DealsOfWeek from './DealsOfWeek'
import DetoxSmoothieRecipe from './DetoxSmoothieRecipe'
import UpcomingOurBeverage from './UpcomingOurBeverage'
import BestSeller from './BestSeller'
import SliderProduct from './SliderProduct'
import Footer from './Footer'
import { ShopContext } from '../context/ShopContext'

const Header = () => {

  const [allproducts, setAllproducts] = useState([])
  const fetchInfo = async () => {
    await fetch('http://localhost:3000/allproduct')
    .then((res) => res.json())
    .then((data) => {setAllproducts(data)})
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  return (
    <div className='' >
        {/* <Navbar /> */}
        <Slider />
        <Inner />
        <BestChoose allproducts={allproducts} />
        <DealsOfWeek />
        <DetoxSmoothieRecipe/>
        <UpcomingOurBeverage />
        <BestSeller/>
        <SliderProduct />
    </div>
  )
}

export default Header