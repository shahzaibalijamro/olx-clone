import React from 'react';
import Image from 'next/image';
import heart from '@/assets/heart.png';

interface Product {
  id: number;
  price: string;
  title: string;
  address: string;
  time: string;
  imageUrl: string;
}

const Card: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className='border border-[#002f3433] rounded cursor-pointer w-full h-full overflow-hidden'>
      <div className='h-[155px]'>
        <img
          src={product.imageUrl}
          alt={product.title}
          className='h-full w-full object-cover object-center'
        />
      </div>
      <div className='p-4'>
        <div className='flex justify-between mb-[8px] items-center'>
          <h1 className='text-[16px] roboto-bold leading-5 overflow-hidden whitespace-nowrap'>
            {product.price}
          </h1>
          <Image src={heart} alt='Heart' width={16} />
        </div>
        <div className='flex h-[40px] justify-start items-center'>
          <p className='max-h-[40px] text-[#002f34] mb-0 overflow-hidden leading-[20px] roboto-regular line-clamp-2 text-[16px]'>
            {product.title}
          </p>
        </div>
        <div className='h-[12px]'></div>
        <div className='text-[14px] text-[#406367] overflow-hidden text-ellipsis roboto-regular whitespace-nowrap flex flex-col mt-[4px] gap-y-[6px]'>
          <h1 className='text-inherit leading-[18px]'>{product.address}</h1>
          <h1 className='text-[12px] h-[17px] leading-[14px]'>{product.time}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;