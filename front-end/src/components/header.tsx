"use client"
import DropdownIcon from "@/assets/DropdownIcon"
import LocationIcon from "@/assets/LocationIcon"
import Logo from "@/assets/Logo"
import MotorImage from "@/assets/motorImage"
import PropertyImage from "@/assets/propertyImage"
import SearchIcon from "@/assets/SearchIcon"
import { useEffect, useRef, useState } from "react"

const Header = () => {
    const [inputLocation, setInputLocation] = useState("Pakistan")
    const [isActive, setIsActive] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsActive(false); // Close dropdown if clicked outside
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    return (
        <div>
            <div className="flex gap-x-[40px] items-center justify-start pt-[16px] pb-[6px]">
                <Logo height={32} />
                <div className="flex justify-center gap-[10px] items-center">
                    <div className="p-[8px] motorImage">
                        <MotorImage height={24} width={24} />
                    </div>
                    <h1 className="text-[#002f34] roboto-bold leading-8">Motors</h1>
                </div>
                <div className="flex justify-center gap-[10px] items-center">
                    <div className="p-[8px] motorImage">
                        <PropertyImage height={24} width={24} />
                    </div>
                    <h1 className="text-[#002f34] roboto-bold leading-8">Property</h1>
                </div>
            </div>
            <div className="pt-[10px] pb-[16px]">
                <div className="flex justify-start items-center">
                    <div className="max-w-[310px] relative me-[16px] w-full">
                        <div onClick={() => setIsActive(true)} className="w-full px-[10px] py-[12px]  flex justify-start border border-[#d8dfe0] focus-within:border-[#23e5db] focus:border-[#23e5db] rounded">
                            <LocationIcon height={24} width={24} />
                            <div className="w-full flex" ref={dropdownRef} >
                                <input type="text" value={inputLocation} onChange={(e) => setInputLocation(e.target.value)} className="ps-[10px] w-full focus-visible:border-0 focus-visible:outline-0" />
                                <div onClick={(e) => {
                                    e.stopPropagation();
                                    setIsActive(!isActive);
                                }} className={`me-[5px] dropdown-icon cursor-pointer ${isActive && 'rotate-180'}`}>
                                    <DropdownIcon height={24} width={24} />
                                </div>
                            </div>
                        </div>
                        {isActive && <div className="drop-down-box bg-white z-1 w-full rounded">
                            <div className="py-[24px] border-b-[1px] z-1 hover:bg-[#c8f8f6] cursor-pointer border-b-[#ced6d7] px-[16px]">
                                <div className="flex justify-start items-center">
                                    <img src="https://www.olx.com.pk/assets/iconCurrentLocation_noinline.6acc646ec0e4ecdee696b5588b92c859.svg" alt="Location" />
                                    <h1 className="ms-[8px] roboto-bold text-[#3a77ff]">Use current location</h1>
                                </div>
                            </div>
                            <div className="p-[16px] border-b-[1px] z-1 border-b-[#ced6d7]">
                                <div className="flex justify-start items-center">
                                    <LocationIcon height={24} width={24} color="#5c7a7d"/>
                                    <h1 className="ms-[8px] text-[14px] roboto-regular">See ads in all Pakistan</h1>
                                </div>
                            </div>
                            <div className="px-[16px] py-[18px] z-1">
                                <div className="flex justify-start items-center">
                                    <h1 className="uppercase text-[#002f345c] text-[12px] roboto-regular">Choose Region</h1>
                                </div>
                            </div>
                            <div className="p-[16px] z-1">
                                <div className="flex justify-start items-center">
                                    <LocationIcon height={24} width={24} color="#5c7a7d"/>
                                    <h1 className="ms-[8px] text-[14px] roboto-regular">Azad Kashmir, Pakistan</h1>
                                </div>
                            </div>
                            <div className="p-[16px] z-1">
                                <div className="flex justify-start items-center">
                                    <LocationIcon height={24} width={24} color="#5c7a7d"/>
                                    <h1 className="ms-[8px] text-[14px] roboto-regular">Balochistan, Pakistan</h1>
                                </div>
                            </div>
                            <div className="p-[16px] z-1">
                                <div className="flex justify-start items-center">
                                    <LocationIcon height={24} width={24} color="#5c7a7d"/>
                                    <h1 className="ms-[8px] text-[14px] roboto-regular">Punjab, Pakistan</h1>
                                </div>
                            </div>
                            <div className="p-[16px] z-1">
                                <div className="flex justify-start items-center">
                                    <LocationIcon height={24} width={24} color="#5c7a7d"/>
                                    <h1 className="ms-[8px] text-[14px] roboto-regular">Sindh, Pakistan</h1>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="w-full flex justify-start border border-[#d8dfe0] focus-within:border-[#23e5db] focus:border-[#23e5db] rounded">
                            <div className="w-full flex">
                                <input type="text" placeholder="Find Cars, Mobile Phones and More..." className="w-full ms-[10px] my-[12px] placeholder:text-[#7d7575] focus-visible:border-0 focus-visible:outline-0" />
                                <div style={{borderTopRightRadius: "0.25rem",borderBottomRightRadius: "0.25rem"}} className={`cursor-pointer w-[48px] h-[48px] flex justify-center items-center bg-[#002f34]`}>
                                    <SearchIcon height={24} width={24} />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Header