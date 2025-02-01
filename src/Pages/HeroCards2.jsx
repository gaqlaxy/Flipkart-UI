import React from 'react'
import HeroDealsCard1 from '../Components/HeroDealsCard1'
import HeroDealsCard2 from '../Components/HeroDealsCard2'
import HeroAdCard2 from '../Components/HeroAdCard2'

export default function HeroCards2() {
  return (
    <>
    <div className='grid grid-cols-3 gap-4 p-4'>
        <HeroDealsCard1 />
        <HeroDealsCard2 />
        <HeroAdCard2 />
    </div>
    
    
    </>
  )
}
