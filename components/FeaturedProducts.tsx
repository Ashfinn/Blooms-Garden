import React from 'react';
import Image from 'next/image';

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: 'Rose', image: '/rose.jpg', price: '$5' },
    { id: 2, name: 'Tulip', image: '/tulip.jpg', price: '$4' },
    { id: 3, name: 'Sunflower', image: '/sunflower.jpg', price: '$6' },
  ];

  return (
    <div className="my-10 animate-fadeIn">
      <h2 className="text-3xl font-bold text-center">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {products.map((product) => (
          <div key={product.id} className="card bg-base-100 shadow-xl">
            <figure className="relative w-full h-80"> {/* Adjust the height as needed */}
              <Image src={product.image} alt={product.name} fill className='object-cover' />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
