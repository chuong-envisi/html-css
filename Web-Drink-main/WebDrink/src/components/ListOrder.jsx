import React, {useState, useEffect} from 'react'
import {TbTrash} from "react-icons/tb"
import { FaCircleChevronDown } from "react-icons/fa6";

import Navbar1 from './Navbar1'

const ListOrder = ({products}) => {

  const [allorder, setOrder] = useState([])
  const [allproducts, setAllproducts] = useState([])
  const [HT, setHT] = useState()
  const [searchContent, setSearchContent] = useState(allproducts)

  
  const fetchInfo = async () => {
    await fetch('http://localhost:3000/allorder')
    .then((res) => res.json())
    .then((data) => {setOrder(data); setSearchContent(data)})

    await fetch('http://localhost:3000/allproduct')
    .then((res) => res.json())
    .then((data) => {setAllproducts(data)})
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  const updateStatus = async (id) => {
    await fetch('http://localhost:3000/updatestatus', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: id})
    })
    await fetchInfo()
  }

  const searchName = (e) => {
    
    setSearchContent(allorder.filter((x) => {
      return x.name.includes(e.target.value);
    }))
  }
 
  return (
    <div className='mt-10 ml-5 px-10 h-[500px] w-full bg-white'>
              <div class="flex justify-between items-center py-4">
                      <input
                      type="text"
                      placeholder="Search...."
                      class="border border-gray-300 text-[14px] rounded-lg px-4 py-4 w-1/3 "
                      onChange={searchName}
                      />
                  </div>
                <table class="w-full text-left">
                    
                  <thead>
                          <tr class="bg-gray-100 text-gray-400">
                          
                          <th class="px-4 py-2">Name</th>
                          <th class="px-4 py-2">Email</th>
                          <th class="px-4 py-2">SDT</th>
                          <th class="px-4 py-2">Status</th>
                          </tr>
                      </thead>
                      <tbody>
                          
                         {
                            searchContent.map((item) => {
                                return(
                                <>
                                  <tr onClick={() => setHT(item.id)} class="hover:bg-yellow-50">
                                    <td class=" px-4 py-2">{item.name}</td>
                                    <td class=" px-4 py-2">{item.email}</td>
                                    <td class=" px-4 py-2">{item.SDT}</td>
                                    <td onClick={() => updateStatus(item.id)} class=" px-4 py-2">
                                        {item.status?"True":"False"}
                                    </td>
                                  </tr>
                                    {allproducts.map((x) => {
                                            if(item.cartData[x.id] > 0)
                                                return(
                                                <tr class={`${HT == item.id ? '' : 'hidden'} bg-yellow-50`}>
                                                    <td class="px-4 py-4 flex items-center space-x-4">
                                                        <img src={x.image} alt="Product" class="h-10 w-10 object-cover rounded"/>
                                                        <div class="flex flex-col">
                                                            <span>{x.name}</span>
                                                        </div>
                                                    </td>
                                                    <td class="px-4 py-4 mt-8">${x.price}</td>
                                                    <td class="px-4 py-4 mt-8">
                                                        <div class="flex items-center space-x-2 ">
                                                            <span class="font-medium">{item.cartData[x.id]}</span>
                                                        </div>
                                                    </td>
                                                    <td class="px-4 py-4 mt-8">${item.cartData[x.id]*x.price}</td>
                                                </tr>
                                            )
                                    })}
                                </>
                                )
                            })
                         }
                          
              </tbody>
            </table>
    </div>
  )
}

export default ListOrder