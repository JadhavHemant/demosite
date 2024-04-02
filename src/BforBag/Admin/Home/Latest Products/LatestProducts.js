import React from 'react'
import Product1 from './product-1.jpg'

const LatestProducts = () => {
    return (
        <>
            <div className='text-[30px] text-center font-bold p-4 pb-[40px]'>
                Comming Soon
                <hr class="mx-auto w-40 h-2 bg-orange-500 border rounded-xl " />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 pt-4 max-w-auto lg:  p-[50px] '>
                <div className='md:grid-flow-row p-4 border border-black rounded-[20px] '>
                    <div className='flex justify-center'>
                        <img src={Product1} />
                    </div>
                    <div className='text-center pt-2'>
                        <h1 className='font-bold'>Bag</h1>
                        <h1 className='font-bold'>img elements must have an alt prop, either with meaningful</h1>
                    </div>
                </div>
                <div className='md:grid-flow-row p-4 border border-black rounded-[20px] '>
                    <div className='flex justify-center'>
                        <img src={Product1} />
                    </div>
                    <div className='text-center pt-2'>
                        <h1 className='font-bold'>Bag</h1>
                        <h1 className='font-bold'>img elements must have an alt prop, either with meaningful</h1>
                    </div>
                </div>
                <div className='md:grid-flow-row p-4 border border-black rounded-[20px] '>
                    <div className='flex justify-center'>
                        <img src={Product1} />
                    </div>
                    <div className='text-center pt-2'>
                        <h1 className='font-bold'>Bag</h1>
                        <h1 className='font-bold'>img elements must have an alt prop, either with meaningful</h1>
                    </div>
                </div>  <div className='md:grid-flow-row p-4 border border-black rounded-[20px] '>
                    <div className='flex justify-center'>
                        <img src={Product1} />
                    </div>
                    <div className='text-center pt-2'>
                        <h1 className='font-bold'>Bag</h1>
                        <h1 className='font-bold'>img elements must have an alt prop, either with meaningful</h1>
                    </div>
                </div>
                <div className='md:grid-flow-row p-4 border border-black rounded-[20px] '>
                    <div className='flex justify-center'>
                        <img src={Product1} />
                    </div>
                    <div className='text-center pt-2'>
                        <h1 className='font-bold'>Bag</h1>
                        <h1 className='font-bold'>img elements must have an alt prop, either with meaningful</h1>
                    </div>
                </div>
                <div className='md:grid-flow-row p-4 border border-black rounded-[20px] '>
                    <div className='flex justify-center'>
                        <img src={Product1} />
                    </div>
                    <div className='text-center pt-2'>
                        <h1 className='font-bold'>Bag</h1>
                        <h1 className='font-bold'>img elements must have an alt prop, either with meaningful</h1>
                    </div>
                </div>
                <div className='md:grid-flow-row p-4 border border-black rounded-[20px] '>
                    <div className='flex justify-center'>
                        <img src={Product1} />
                    </div>
                    <div className='text-center pt-2'>
                        <h1 className='font-bold'>Bag</h1>
                        <h1 className='font-bold'>img elements must have an alt prop, either with meaningful</h1>
                    </div>
                </div>
                <div className='md:grid-flow-row p-4 border border-black rounded-[20px] '>
                    <div className='flex justify-center'>
                        <img src={Product1} />
                    </div>
                    <div className='text-center pt-2'>
                        <h1 className='font-bold'>Bag</h1>
                        <h1 className='font-bold'>img elements must have an alt prop, either with meaningful</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestProducts