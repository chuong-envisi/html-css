import React, { useContext } from 'react'
import Header from '../components/header'
import ItemPage from './ItemPage'
import { ShopContext } from '../context/ShopContext'

const Home = () => {
  const {active} = useContext(ShopContext) 
  return (
    <>
    <Header />
    <ItemPage active={active} />
    </>
  )
}

export default Home