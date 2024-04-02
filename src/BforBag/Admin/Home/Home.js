import React from 'react'
import logo from './images/image1.png'
import FeaturedProducts from './FeaturedProducts/FeaturedProducts'
import LatestProducts from './Latest Products/LatestProducts'
import Exclusive from './Exclusive/Exclusive'
const Home = () => {
    const Explore = () => {
        alert('Explore ')
    }
    return (
        <>
            <div className='h-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 rounded-lg bg-gradient-to-r from-yellow-200 via-green-200 to-green-500 font-[Poppins]'>
                    <div className='md:grid-flow-row p-6 pt-[200px] '>
                        <h1 className='text-[40px]  text-transparent bg-clip-text bg-[black] font-bold lg:text-[60px] '>Best Sellers<br /></h1>
                        <p className='pt-3  lg:text-[20px] font-bold'>Shop American Tourister's best-sellers online. Discover the most<br /> popular, top-rated travel gear handpicked by American Tourister fans!.</p>
                        <div className='pt-4'>
                            <button className='bg-[orange] w-[170px] hover:bg-[rgba(250,224,80,0.95)]  p-2 border border-black rounded-[20px]' onClick={() => Explore()}>Explore Now &#8594;</button>
                        </div>
                    </div>
                    <div className='md:grid-flow-row p-4'>
                        <div>
                            <img src={logo} className=' ' />
                        </div>
                    </div>
                </div>
                <div className='p-4'>
                    <FeaturedProducts />
                    <LatestProducts />
                    <Exclusive />
                </div>
            </div>
        </>
    )
}

export default Home