import React from 'react'
import Cate from './Cate.json'
import Cateimg from './cart.png';
const SubCate = () => {
    console.log(Cate);

    const CateClick=()=>{
        alert('click')
    }
    return (
        <>
            <div className='p-4'>
                <div className="flex overflow-x-auto overflow-hidden justify-center">
                    {Cate.map((d, k) => (
                        <div key={k} className="flex flex-col items-center mr-4">
                            <img src={Cateimg} className="h-10 w-10 border border-black rounded-full" alt="Category" onClick={()=>CateClick()} />
                            <p className="mt-2 text-[12px]">{d.product_category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SubCate