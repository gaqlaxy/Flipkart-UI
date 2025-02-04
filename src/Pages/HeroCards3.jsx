import React from 'react'
import HeroDealsCard4 from '../Components/HeroDealsCard4'
import HeroDealsCard5 from '../Components/HeroDealsCard5'
import HeroAdCard3 from '../Components/HeroAdCard3'

export default function HeroCards3() {
  return (
    <>
    <div className='grid grid-cols-3 gap-4 my-3 mx-3'>
    <HeroDealsCard4 />
    <HeroDealsCard5 />
    <HeroAdCard3 />
    </div>
    </>
  )
}
