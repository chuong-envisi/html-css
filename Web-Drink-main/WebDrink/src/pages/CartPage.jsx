import React, { useContext, useState } from 'react'
import Img from '../assets/Tra sua tran chau hoang kim.png'
import Logo from '../assets/logo.jpg'
import { FaRegUser } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import {Link} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
const CartPage = () => {

  const {all_products, cartItems, getTotalCartAmount, removeToCart, addToCart} = useContext(ShopContext)
  
  const [productDetails, setProductDetails] = useState({
    name: "",
    email: "",
    SDT:"",
    cartData: {},
    total: 0,
  })

  const changeHanler = (e) => {
    setProductDetails({...productDetails, [e.target.name]:e.target.value})
  }

  const Add_Product = async () => {
    let order = {
        ...productDetails,
        cartData: cartItems,
        total: getTotalCartAmount()
    }
    console.log(order)
    await fetch('http://localhost:3000/addorder', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
      }).then((res) => res.json())
        .then((data) => {
          data.success?alert("Product Added"):alert("Upload Failed")
    })
  }
  
  return (
    <div id="main">
        <div class="header fixed top-0 left-0 right-0 h-[75px] w-auto bg-white shadow-md flex items-center justify-between px-32">
            <Link to='/'>
                <div class="logo flex items-center space-x-2">
                    <img src={Logo} alt="logo" class="h-10 w-10"/>
                    <h3 class="text-xl font-semibold text-green-600">Candleaf</h3>
                </div>
            </Link>
            
            <ul class="nav flex items-center space-x-8 text-gray-700 font-medium">
                <li>
                    <a href="#" class="hover:text-gray-900 flex items-center space-x-1">
                        <span>Discovery</span>
                        <i class="fa fa-caret-down"></i>
                    </a>
                </li>
                <li><a href="#" class="hover:text-gray-900">About</a></li>
                <li><a href="#" class="hover:text-gray-900">Contact us</a></li>
            </ul>
         
            <div class="flex items-center space-x-6">
            
                <button class="p-2 rounded-full hover:bg-gray-100">
                    <FaRegUser class="fa fa-user-circle text-xl text-gray-700 hover:text-gray-900"/>
                </button>
                
                <button class="p-2 rounded-full hover:bg-gray-100">
                    <LuShoppingCart class="fa fa-cart-plus text-xl text-gray-700 hover:text-gray-900"/>
                </button>
            </div>
        </div>
        
        <div class="content flex flex-col items-center py-32">

            <h1 class="text-3xl text-gray-800 pb-6">Your cart items</h1>
            <a href="#" class="text-green-600 hover:underline pb-8">Back to shopping</a>

            <div class="product-list w-3/4 overflow-hidden">
                <table class="w-full text-left">
                    <thead>
                        <tr class=" text-gray-700 font-semibold">
                            <th class="px-4 py-3">Product</th>
                            <th class="px-4 py-3">Price</th>
                            <th class="px-4 py-3">Quantity</th>
                            <th class="px-4 py-3">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            all_products.map((x) => {
                                if(cartItems[x.id] > 0)
                                    return(
                                    <tr class="border-t">
                                        <td class="px-4 py-4 flex items-center space-x-4">
                                            <img src={x.image} alt="Product" class="h-16 w-16 object-cover rounded"/>
                                            <div class="flex flex-col">
                                                <span>{x.name}</span>
                                                <a href="#" class="text-green-600 text-sm hover:underline">Remove</a>
                                            </div>
                                        </td>
                                        <td class="px-4 py-4 mt-8">${x.price}</td>
                                        <td class="px-4 py-4 mt-8">
                                            <div class="flex items-center space-x-2 ">
                                                <button onClick={() => removeToCart(x.id)} class="p-2 bg-gray-100 hover:bg-gray-200">-</button>
                                                <span class="font-medium">{cartItems[x.id]}</span>
                                                <button onClick={() => addToCart(x.id)} class="p-2 bg-gray-100 hover:bg-gray-200">+</button>
                                            </div>
                                        </td>
                                        <td class="px-4 py-4 mt-8">${cartItems[x.id]*x.price}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            
            
           
            <div className='flex border-t max_padd_container w-full'>
                <div className='box-border text-left bg-white w-full rounded-sm mt-2 p-5'>
                        <div className='mb-3'>
                            <h4 className='bold-18 mt-3 mr-3 w-[200px]'>Name</h4>
                            <input value={productDetails.name} onChange={changeHanler} type="text" name='name' placeholder='Text here ...' className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md' />
                        </div>
                        <div className='mb-3'>
                            <h4 className='bold-18 mt-3 mr-3  w-[200px]'>Email</h4>
                            <input value={productDetails.email} onChange={changeHanler} type="text" name='email' placeholder='Text here ...' className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md' />
                        </div>
                        <div className='mb-3'>
                            <h4 className='bold-18 mt-3 mr-3  w-[200px]'>SDT</h4>
                            <input value={productDetails.SDT} onChange={changeHanler} type="text" name='SDT' placeholder='Text here ...' className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md' />
                        </div>   
                    </div>
                <div class="mt-8 pt-6 flex justify-end items-center space-x-8 w-full">
                    
                    <div class="text-right">
                        <div class="flex items-center justify-end space-x-2">
                            <span class="text-gray-700 font-medium">Sub-total:</span>
                            <span class="text-gray-800 font-semibold">{getTotalCartAmount()}</span>
                        </div>
                        <p class="text-sm text-gray-500">Tax and shipping cost will be calculated later</p>
                    </div>

                    
                    <div onClick={() => Add_Product()} class="py-3 px-6 bg-green-600 text-white font-semibold rounded hover:bg-green-700">
                        Check-out
                    </div>
                </div>                                                      
            </div>
        </div>

    </div>   
  )
}

export default CartPage