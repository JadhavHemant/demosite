import React from 'react'
import Product1 from './product-1.jpg'
const FeaturedProducts = () => {
    return (
        <>
            <div className='text-[30px] text-center font-bold p-4'>
                Comming Soon
                <hr class="mx-auto w-40 h-2 bg-orange-500 border rounded-xl " />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 max-w-auto lg:p-[100px]'>
                <div className='md:grid-flow-row p-4 border border-black rounded-[20px] '>
                    <img src={Product1} />
                </div>
                <div className='md:grid-flow-row p-4 border border-black rounded-[20px]'>
                    <img src={Product1} />
                </div>
                <div className='md:grid-flow-row p-4 border border-black rounded-[20px]'>
                    <img src={Product1} />
                </div>
            </div>
        </>
    )
}

export default FeaturedProducts