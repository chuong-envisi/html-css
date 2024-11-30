import React, { useState, createContext, useEffect } from 'react'
import ItemPage from '../pages/ItemPage';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [all_products, setAll_products] = useState([]);
  const [active, setActive] = useState(false)
  const [dataItem, setDataItem] = useState({})

  useEffect( () => {
    fetch('http://localhost:3000/allproduct')
    .then((response) => response.json())
    .then((data) => setAll_products(data))
  }, [])

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
    console.log(cartItems)
  };

  const removeToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) - 1,
    }));
    
  };


  const getTotalCartAmount = () => {
    let total = 0
    for(let i in cartItems){
      if(cartItems[i] > 0){
        let itemInfo = all_products.find((product) => product.id === Number(i))
        console.log(itemInfo)
        total += itemInfo.price*cartItems[i]
      }
    }
    console.log(total)
    return total
  }

  

  const changeActive = (id, name, img, price)=> {
    setActive(!active)
    setDataItem({id, name, img, price})
  }

  const contextValue = { all_products, cartItems, addToCart, removeToCart, getTotalCartAmount, changeActive, active, dataItem };


  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider; 