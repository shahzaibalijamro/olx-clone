import HeartIcon from '@/assets/HeartIcon'
import Image from 'next/image'
import React from 'react'
import heart from "@/assets/heart.png"
const Card = () => {
    return (
        <div className='border border-[#002f3433] rounded cursor-pointer h-full overflow-hidden'>
            <div className='h-[155px]'>
                <img src="https://images.olx.com.pk/thumbnails/505175755-240x180.webp" alt="" className='h-full' />
            </div>
            <div className='p-4'>
                <div className='flex justify-between  mb-[8px] items-center'>
                    <h1 className='text-[16px] roboto-bold leading-5 overflow-hidden whitespace-nowrap'>Rs 270,000</h1>
                    <Image src={heart} alt='Heart' width={16} />
                </div>
                <div className="flex h-[40px] justify-center items-center">
                    <p className='max-h-[40px] text-[#002f34] mb-0 overflow-hidden leading-[20px] roboto-regular line-clamp-2 text-[16px]'>
                    A PRODUCT
                    </p>
                </div>
                <div className='h-[12px]'></div>
                <div className='text-[14px] text-[#406367] overflow-hidden text-ellipsis whitespace-nowrap flex flex-col mt-[4px] gap-y-[6px]'>

                </div>

            </div>
        </div>
    )
}

export default Card