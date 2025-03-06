import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
        <img src={assets.logo} className='mb-1 w-20' alt="" />
            <p className='w-full md:wd-2/3 text-gray-800'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>

            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>CONTÁCTANOS</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li><span className='text-gray-800'>+51</span> 98565748</li>
                <li>cyberwear2077@gmail.com</li>
                
            </ul>
        </div>

        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>
             Copyright 2024-MickeyDurden All Right Reserved.
            </p>


        </div>
      
   

</div>
    
  )
}

export default Footer

