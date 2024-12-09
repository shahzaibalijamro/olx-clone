"use client"
import DropdownIcon from "@/assets/DropdownIcon"
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
        <SimpleCarousel/>
      </div>
    </div>
  )
}

export default page