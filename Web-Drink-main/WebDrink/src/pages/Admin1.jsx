import React, {useContext, useEffect, useState} from 'react'
import Img from '../assets/Tra sua tran chau hoang kim.png'
import Logo from '../assets/logo.jpg'
import { FaHome, FaConciergeBell } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";
import ListProduct from '../components/ListProduct';
import AddProduct from '../components/AddProduct';
import ListOrder from '../components/ListOrder';
import Chart from '../components/Chart'

const Admin1 = () => {

  const [activeContent, setActiveContent] = useState("overview") 

  return (
    
    <div class="product-admin">
        <div class="flex h-screen">
            <div class="w-64 bg-green-200 border-spacing-1 border-gray-300 rounded-r-2xl">
             
              <div class="p-4 ml-2 flex items-center border-b border-green-200">
                <img 
                  src={Logo} 
                  alt="Logo" 
                  class="w-10 h-10 rounded-full"
                />
                <span class="ml-2 font-bold text-green-600 font-serif">Admin</span>
              </div>
              
              <ul class="px-4 py-8 h-full space-y-2 text-gray-700 font-serif bg-green-100">
                <li>
                  <button onClick={() => setActiveContent("overview")}
                   class="flex w-full items-center p-4 rounded-lg 
                   hover:bg-white hover:text-green-400">
                    <FaHome />
                    <span class="ml-3">Overview</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveContent("product")}
                    class="flex w-full items-center p-4 rounded-lg hover:bg-white hover:text-green-400">
                    <GiCoffeeCup />
                    <span class="ml-3">Product</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveContent("order")}
                   class="flex w-full items-center p-4 rounded-lg hover:bg-white hover:text-green-400">
                    <FaConciergeBell/>
                    <span class="ml-3">Order</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveContent("add product")}
                   class="flex w-full items-center p-4 rounded-lg hover:bg-white hover:text-green-400">
                    <IoSettings />
                    <span class="ml-3">Add Product</span>
                  </button>
                </li>
              </ul>
            </div>
            
            <div class="flex-1 bg-gray-100 p-6">
                <h1 class="text-center font-bold text-3xl text-green-600">{activeContent.toUpperCase()}</h1>
                  
                  
                  
                  <div class="overflow-hidden tracking-widest text-center
                  rounded-lg border-spacing-1 border-gray-300 text-xs">
                      {
                        activeContent == "product" ? <ListProduct /> 
                        : activeContent == "add product" ? <AddProduct />
                        : activeContent == "order" ? <ListOrder /> 
                        : <Chart/>
                      }
                  </div>        
          </div>          
     </div>   
    </div>
  )
}

export default Admin1