import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Easy exchange Policy</p>
            <p className='text-gray-400'>Ofrecemos Reembolso sin problemas</p>

        </div>
        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Politica de Reembolso 7 días</p>
            <p className='text-gray-400'>Ofrecemos Politica de Reembolso de 7 días</p>

        </div>
        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>El mejor servicio al cliente</p>
            <p className='text-gray-400'>Ofrecemos Servicio al cliente 24/7</p>

        </div>
      
    </div>
  )
}

export default OurPolicy
