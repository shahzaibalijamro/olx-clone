"use client"
import DropdownIcon from "@/assets/DropdownIcon"
import LocationIcon from "@/assets/LocationIcon"
import Logo from "@/assets/Logo"
import MotorImage from "@/assets/motorImage"
import PropertyImage from "@/assets/propertyImage"
import { useState } from "react"

const Header = () => {
    const [inputLocation,setInputLocation] = useState("Pakistan")
    const [isActive,setIsActive] = useState<boolean>(false)
    return (
        <div>
            <div className="flex gap-x-[40px] items-center justify-start pt-[16px] pb-[6px]">
                <Logo height={32} />
                <div className="flex justify-center gap-[10px] items-center">
                    <div className="p-[8px] motorImage">
                        <MotorImage height={24} width={24} />
                    </div>
                    <h1 className="text-[#002f34] roboto-regular font-bold leading-8">Motors</h1>
                </div>
                <div className="flex justify-center gap-[10px] items-center">
                    <div className="p-[8px] motorImage">
                        <PropertyImage height={24} width={24} />
                    </div>
                    <h1 className="text-[#002f34] roboto-regular font-bold leading-8">Property</h1>
                </div>
            </div>
            <div className="pt-[10px] pb-[16px]">
                <div className="flex justify-start items-center">
                    <div onClick={() => setIsActive(true)} className="me-[16px] max-w-[300px] w-full px-[10px] py-[12px]  flex justify-start border border-[#d8dfe0] focus-within:border-[#23e5db] focus:border-[#23e5db] rounded">
                        <LocationIcon height={24} width={24}/>
                        <input type="text" value={inputLocation} onChange={setInputLocation} className="ps-[10px] w-full focus-visible:border-0 focus-visible:outline-0"/>
                        <div onClick={() => setIsActive(!isActive)} className={`me-[5px] dropdown-icon cursor-pointer ${isActive && 'rotate-180'}`}>
                        <DropdownIcon height={24} width={24}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header