"use client"
import DropdownIcon from "@/assets/DropdownIcon"
import Card from "@/components/Card"
import { SimpleCarousel } from "@/components/Corousel"

const page = () => {
  return (
    <div className="">
      <div className="border-t-[1px] flex justify-start items-center border-[#d8dfe0] pt-4 pb-2">
        <div className="max-w-[1280px] px-[15px] w-full mx-auto">
          <div className="flex justify-start gap-x-[12px] items-center">
            <div className="flex justify-center items-center">
              <h1 className="uppercase text-[14px] roboto-bold text-[#002f34]">All Categories</h1>
              <div className="ms-[8px]">
                <DropdownIcon height={16} width={16} />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <h1 className="roboto-regular px-[12px] text-[#002f34] text-[14px]">Mobile Phones</h1>
              <h1 className="roboto-regular px-[12px] text-[#002f34] text-[14px]">Cars</h1>
              <h1 className="roboto-regular px-[12px] text-[#002f34] text-[14px]">Motorcycles</h1>
              <h1 className="roboto-regular px-[12px] text-[#002f34] text-[14px]">House</h1>
              <h1 className="roboto-regular px-[12px] text-[#002f34] text-[14px]">Video-Audio</h1>
              <h1 className="roboto-regular px-[12px] text-[#002f34] text-[14px]">Tablets</h1>
              <h1 className="roboto-regular px-[12px] text-[#002f34] text-[14px]">Land & Plots</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] px-[15px] mt-[16px] w-full mx-auto">
        <SimpleCarousel />
      </div>
      <div className="py-[16px]">

      </div>
      <div className="max-w-[1280px] px-[15px] mt-[16px] w-full mx-auto">
        <div className="mb-4">
          <h1 className="roboto-bold text-[24px] text-[#002f34] overflow-hidden mb-4 text-ellipsis whitespace-nowrap">All Categories</h1>
          <div className="flex justify-start gap-x-[40.75px] gap-y-[16px] mb-[40px] items-center flex-wrap">
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 w-[102px]">Mobiles</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 w-[102px]">Vehicles</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 w-[102px]">Property for sale</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 w-[102px]">property for rent</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 w-[102px]">Electronics and home appliances</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 w-[102px]">Bikes</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 w-[102px]">buisness, industrial and agricultural</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/services.dc6aef196c0403dc61b0ee813f66fa5b.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 w-[102px]">Services</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/jobs.79e6136dda02111cf8e7afe26b9e0f93.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 w-[102px]">jobs</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 w-[102px]">animals</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 w-[102px]">furniture and home decor</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 w-[102px]">fashion and beauty</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 w-[102px]">Books, sports and hobbies</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 w-[102px]">kids</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] px-[15px] mt-[16px] w-full mx-auto">
        <div className="flex justify-between mb-4 items-center">
          <h1 className="roboto-bold text-[24px] text-[#002f34] overflow-hidden text-ellipsis whitespace-nowrap">More in recent ads</h1>
          <div className="flex justify-center items-center">
            <h1 className="uppercase text-[14px] roboto-bold text-[#3a77ff]">View more</h1>
            <div className="ms-[8px] -rotate-90">
              <DropdownIcon height={15} width={15} color="#3a77ff" />
            </div>
          </div>
        </div>
        <div>
          <Card/>
          <div className="flex items-center justify-center gap-x-[24px]">
            <div className="carousel w-full">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                  className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide4" className="btn btn-circle">❮</a>
                  <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                  className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide1" className="btn btn-circle">❮</a>
                  <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                  className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide2" className="btn btn-circle">❮</a>
                  <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                  className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide3" className="btn btn-circle">❮</a>
                  <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page