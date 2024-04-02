import React from 'react'
import Product1 from '../images/product-1.jpg'
import Product2 from '../images/product-2.jpg'
import Product3 from '../images/product-3.jpg'
import Product4 from '../images/product-4.jpg'
import Product5 from '../images/product-5.jpg'
import Product6 from '../images/product-6.jpg'
import Product7 from '../images/product-7.jpg'
import Product8 from '../images/product-8.jpg'

const LatestProducts = () => {
    return (
        <>
            <div className='text-[30px] text-center font-bold p-4 pb-[40px]'>
                Comming Soon
                <hr class="mx-auto w-40 h-2 bg-orange-500 border rounded-xl " />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5  max-w-auto lg:p-[50px] '>

                <div className='md:grid-flow-row border border-black bg-white'>
                    <div className='flex justify-center'>
                        <img src={Product1} />
                    </div>
                    <div className='pt-2 p-2'>
                        <h1 className='font-bold'>Bag</h1>
                        <h1 className='font-bold'>Rs.500</h1>
                    </div>
                </div>
                <div className='md:grid-flow-row border border-black bg-white'>
                    <div className='flex justify-center'>
                        <img src={Product2} />
                    </div>
                    <div className='p-2 pt-2'>
                        <h1 className='font-bold'>Bag</h1>
                        <h1 className='font-bold'>Rs.500</h1>
                    </div>
                </div>
                <div className='md:grid-flow-row border border-black bg-white'>
                    <div className='flex justify-center'>
                        <img src={Product3} />
                    </div>
                    <div className='p-2 pt-2'>
                        <h1 className='font-bold'>Bag</h1>
                        <h1 className='font-bold'>Rs.500</h1>
                    </div>
                </div>  <div className='md:grid-flow-row border border-black bg-white'>
                    <div className='flex justify-center'>
                        <img src={Product4} />
                    </div>
                    <div className='p-2 pt-2'>
                        <h1 className='font-bold'>Bag</h1>
                        <h1 className='font-bold'>Rs.500</h1>
                    </div>
                </div>
                <div className='md:grid-flow-row border border-black bg-white'>
                    <div className='flex justify-center'>
                        <img src={Product5} />
                    </div>
                    <div className='p-2 pt-2'>
                        <h1 className='font-bold'>Bag</h1>
                        <h1 className='font-bold'>Rs.500</h1>
                    </div>
                </div>
                <div className='md:grid-flow-row border border-black bg-white'>
                    <div className='flex justify-center'>
                        <img src={Product6} />
                    </div>
                    <div className='p-2 pt-2'>
                        <h1 className='font-bold'>Bag</h1>
                        <h1 className='font-bold'>Rs.500</h1>
                    </div>
                </div>
                <div className='md:grid-flow-row border border-black bg-white'>
                    <div className='flex justify-center'>
                        <img src={Product7} />
                    </div>
                    <div className='p-2 pt-2'>
                        <h1 className='font-bold'>Bag</h1>
                        <h1 className='font-bold'>Rs.500</h1>
                    </div>
                </div>  <div className='md:grid-flow-row border border-black bg-white'>
                    <div className='flex justify-center'>
                        <img src={Product8} />
                    </div>
                    <div className='p-2 pt-2'>
                        <h1 className='font-bold'>Bag</h1>
                        <h1 className='font-bold'>Rs.500</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestProducts