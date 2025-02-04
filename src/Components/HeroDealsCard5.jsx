import React from 'react'
import {herodeals5} from '../data/herodealscard5.json'


export default function HeroDealsCard4() {
  return (
    <>
    
    <div className=' border-white bg-white p-4'>

        <div className='flex justify-between items-center'>
        <h1>Home Decor & Furnishings</h1>
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg" alt="" className='w-12 h-12' />
        </div>
<div className='grid grid-cols-2 gap-4'>
    {herodeals5.map((item)=>(
        <div key={item.id} className='bg-white p-2'>
            <img src={item.image} alt="" className='w-full h-48 object-contain' />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
        </div>
    ))}

</div>



    </div>
    </>
  )
}
