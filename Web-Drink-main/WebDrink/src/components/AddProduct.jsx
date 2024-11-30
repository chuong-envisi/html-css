import React, {useContext, useState} from 'react'
import upload_area from '../assets/upload_area.svg'
import {MdAdd} from 'react-icons/md'
import Navbar1 from '../components/Navbar1';


const AddProduct = () => {
  const [image, setImage] = useState(false)
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category:"",
    price: "",
    sold: "",
  })
  const imageHandler = (e) => {
    setImage(e.target.files[0])
  }

  const changeHanler = (e) => {
    setProductDetails({...productDetails, [e.target.name]:e.target.value})
  }

  const Add_Product = async () => {
    let responseData
    let product = productDetails

    let formData = new FormData()
    formData.append('product', image)

    await fetch('http://localhost:3000/upload', {
      method: 'POST',
      headers:{
        Accept: 'application/json',
      },
      body: formData,
    }).then((res) => res.json())
      .then((data) => {responseData = data})

    if(responseData.success){
      product.image = responseData.image_url
      console.log(product)
      await fetch('http://localhost:3000/addproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      }).then((res) => res.json())
        .then((data) => {
          data.success?alert("Product Added"):alert("Upload Failed")
        })
    }
  }


  return (
    
    <div className='p-8 box-border text-left bg-white w-full rounded-sm mt-4 lg:m-7'>
      <div className='mb-3 flex'>
        <h4 className='bold-18 mt-3 mr-3 w-[200px]'>Product title:</h4>
        <input value={productDetails.name} onChange={changeHanler} type="text" name='name' placeholder='Text here ...' className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md' />
      </div>
      <div className='mb-3 flex'>
        <h4 className='bold-18 mt-3 mr-3  w-[200px]'>Price:</h4>
        <input value={productDetails.price} onChange={changeHanler} type="text" name='price' placeholder='Text here ...' className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md' />
      </div>
      <div className='mb-3 flex'>
        <h4 className='bold-18 mt-3 mr-3  w-[200px]'>Sold:</h4>
        <input value={productDetails.sold} onChange={changeHanler} type="text" name='sold' placeholder='Text here ...' className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md' />
      </div>
      
      <div className='mb-3 flex'>
        <h4 className='bold-18 mt-3 mr-3  w-[200px]'>Product Category</h4>
        <input value={productDetails.category} onChange={changeHanler} name="category" id=""  placeholder='Text here ...' className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md'/>
      </div>

      <div>
        <label htmlFor="file-input">
          <img src={image?URL.createObjectURL(image):upload_area} alt="" className='w-20 rounded-sm inline-block'/>
        </label>
        <input onChange={imageHandler} type="file" name="image" id="file-input" hidden className='bg-primary max-w-80 w-full py-3 px-4' />
      </div>
      <button onClick={() => Add_Product()} className='btn_dark_rounded mt-4 gap-x-1 flex'><MdAdd />Add Product</button>
    </div>
    
  )
}

export default AddProduct