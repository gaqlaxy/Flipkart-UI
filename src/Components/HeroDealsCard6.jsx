import React from 'react'
import {herodeals6} from '../data/herodealscard6.json'
console.log(herodeals6)

export default function HerDealsCard6() {
  return (
    <>
    <div>
      <div className="grid grid-cols-3 gap-4 mx-3 my-3 ">
        {herodeals6.map((dealItems) => (
          <div key={dealItems.id} >
            <div className="flex flex-col items-center justify-center text-lg gap-1">
              <img src={dealItems.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </>
  )
}
