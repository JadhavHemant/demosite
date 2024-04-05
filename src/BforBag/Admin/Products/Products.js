import React, { useState } from 'react';
import productsData from './Products.json';
import imgdata from './images/product-1.jpg'
const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsData.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div>
        <h1>Product</h1>
      </div>
      {/*  */}
      <div className='p-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5  max-w-auto lg:p-[50px] '>
          {
            currentProducts.map((d, k) => (
              <div className='md:grid-flow-row border border-black bg-white'>
                <>
                  <div className='flex justify-center'>
                    <img src={imgdata} />
                  </div>
                  <div className='pt-2 p-2'>
                    <h1 className='font-bold'>{d.product_name}</h1>
                    <h1 className='font-bold'>{d.product_price}</h1>
                    <h1 className='font-bold'>{d.product_description}</h1>
                  </div>
                </>
              </div>
            ))
          }
        </div>
      </div>

      {/*  */}
      <div>
        {Array.from({ length: Math.ceil(productsData.length / productsPerPage) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)} className='bg-[orange] p-2 mr-2'>
            {i + 1}
          </button>
        ))}
      </div>

    </>
  );
};

export default Products;
