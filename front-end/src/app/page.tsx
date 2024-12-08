import DropdownIcon from "@/assets/DropdownIcon"

const page = () => {
  return (
    <div className="">
      <div className="border-t-[1px] flex justify-start items-center border-[#d8dfe0] pt-4 pb-2">
        <div className="max-w-[1280px] px-[15px] w-full mx-auto cursor-pointer">
          <div className="flex justify-center items-center">
          <h1 className="uppercase text-[14px] roboto-bold text-[#002f34]">All Categories</h1>
          <div className="ms-[8px]">
            <DropdownIcon height={16} width={16}/>
          </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] px-[15px] w-full mx-auto">
        Page
      </div>
    </div>
  )
}

export default page