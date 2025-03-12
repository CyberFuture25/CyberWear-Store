import React from 'react'
import { assets } from '../assets/assets'
import Carousel from './Carousel'

const slides =[
  "https://i.pinimg.com/736x/a1/38/0b/a1380b5c837b1577aba6c18261e1ba26.jpg",
  "https://i.pinimg.com/736x/a1/38/0b/a1380b5c837b1577aba6c18261e1ba26.jpg",
  "https://i.pinimg.com/736x/a1/38/0b/a1380b5c837b1577aba6c18261e1ba26.jpg",
]

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/* Hero left side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#ffffff]'>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-[#ffffff]'></p>
                <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>

            </div>
            <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>High-Tec <span className='text-[#be20d3]'>Fashion</span></h1>
            <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>COMPRA AHORA</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#ffffff]'></p>
            </div>

        </div>
        


        </div>
{/* Hero  Right Side */}
{/*<img className='w-full sm:w-1/2' src={assets.img1} alt="" />*/}

<div className='max-w-lg'>
  <Carousel autoSlide={true} autoSlideInterval={1000}>
    {slides.map((s) => (
      <img src={s} />
    ))}
  </Carousel>

</div>
      
    </div>
    

  )
}


export default Hero
