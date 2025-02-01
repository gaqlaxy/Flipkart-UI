import React from 'react'
import herocards1 from "../data/herocards1.json";
console.log(herocards1);

export default function Hero_OfferCards1() {
  return (
    <>
    <div>
       <div className='grid grid-cols-3 mx-3 my-3 gap-y-4 gap-x-3'>
        {
            herocards1.cards1.map((cards)=> (
                <div key={cards.id}>
                    <img src={cards.image} alt="" />

                </div>
            ))
        }
       </div>
    </div>
    </>
  )
}
