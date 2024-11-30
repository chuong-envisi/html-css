import React, {useState, useEffect} from 'react'
import {TbTrash} from "react-icons/tb"
import Navbar1 from './Navbar1'

const ListProduct = ({products}) => {

  const [allproducts, setAllproducts] = useState([])
  const [searchContent, setSearchContent] = useState(allproducts)
  const fetchInfo = async () => {
    await fetch('http://localhost:3000/allproduct')
    .then((res) => res.json())
    .then((data) => {setAllproducts(data); setSearchContent(data)})
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  const remove_product = async (name) => {
    await fetch('http://localhost:3000/removeproduct', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name: name})
    })
    await fetchInfo()
  }

  const searchName = (e) => {
    
    setSearchContent(allproducts.filter((x) => {
      return x.name.includes(e.target.value);
    }))
  }

  return (
    <>
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
                          <th class="px-4 py-2 flex items-center">
                              <label for="select-all" class="cursor-pointer ml-4">Product</label>
                          </th>
                          <th class="px-4 py-2">Category</th>
                          <th class="px-4 py-2">Price</th>
                          <th class="px-4 py-2">Sold</th>
                          <th class="px-4 py-2">Delete</th>
                          </tr>
                      </thead>
                      <tbody>
                          
                         {
                            searchContent.map((x) => {
                                return(
                                  <tr class="hover:bg-yellow-50">
                                    <td class=" px-4 py-2 flex items-center space-x-4">
                                        <img 
                                        src={x.image} 
                                        alt="Product Image" 
                                        class="w-10 h-10 rounded-lg object-cover"
                                        />
                                        <label for="select-item" class="flex-grow cursor-pointer">{x.name}</label>
                                
                                    </td>
                                    <td class=" px-4 py-2">{x.category}</td>
                                    <td class=" px-4 py-2">{x.price}</td>
                                    <td class=" px-4 py-2">{x.sold}</td>
                                    <td class=" px-4 py-2">
                                    <div className='bold-22 text-center '><TbTrash onClick={() => remove_product(x.name)}  /></div>
                                    </td>
                                  </tr>
                                )
                            })
                         }
                          
              </tbody>
            </table>
    </>
  )
}

export default ListProduct