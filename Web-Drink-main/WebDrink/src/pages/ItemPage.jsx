import React, { useContext } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { ShopContext } from "../context/ShopContext";


const ItemPage = ({active}) => {
  const { changeActive, addToCart, dataItem } = useContext(ShopContext)
  console.log(active)
  return (
    <div className={` w-full h-full fixed top-0 bg-black bg-opacity-50 z-50 ${active?'flexCenter':'hidden'}`} onClick={() => changeActive()}>
      <div className={`m-auto bg-white z-10 w-[800px] flex`}>
          <img src={dataItem.img} alt="" />
          <div className="p-4 flex flex-col justify-center items-start">
            <div className="text-2xl font-bold mb-4">
              <h3>{dataItem.name}</h3>
            </div>
            <div className="text-xl text-green-600 font-bold mb-4">
              <p>Price: $ {dataItem.price}</p>
            </div>
            <div className="mb-4 flexCenter">
              <p className="font-medium mr-5">Số lượng</p>
              <input
                type="number"
                min="0"
                defaultValue="1"
                className="w-16 px-2 py-1 border border-gray-300 rounded"
              />
            </div>
            <div className="flex justify-center mt-6">
              <button onClick={() => addToCart(dataItem.id)} className="flex items-center bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg transition-all hover:bg-green-700 hover:scale-105">
                <LuShoppingCart  className="w-5 h-5 mr-2" />
                <p>+ Thêm vào giỏ hàng</p>
              </button>
            </div>
            <div className='mt-10 text-left'>
        
              <div className='flex flex-col pb-16'>
                  <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur optio eius doloremque cum itaque voluptates soluta beatae amet esse porro, deserunt dicta? Ut, inventore! Sunt sed voluptatum unde repellendus distinctio!</p>
                  <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quam repellat quia dolorum consequuntur eos id. Atque id inventore recusandae, aspernatur sit sapiente ipsam sed hic dolore rem.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
  );
};

export default ItemPage;
