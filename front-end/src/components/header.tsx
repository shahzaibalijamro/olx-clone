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
        <div className="max-w-[1280px] px-[15px] w-full mx-auto">
            <div className="flex gap-x-[40px] items-center justify-start pt-[16px] pb-[6px]">
                <Logo height={32} />
                <div className="flex hover:text-[#3a77ff] text-[#002f34] hover:fill-[#3a77ff] cursor-pointer justify-center gap-[10px] items-center">
                    <div className="p-[8px] fill-inherit text-inherit motorImage">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            style={{ fill: "inherit" }}
                        >
                            <path d="M23.75 8.38a1.66 1.66 0 0 0-2.08-1.08l-.92.3-1.59-3.35-.5-.17a24.01 24.01 0 0 0-7.16-1c-2.23-.06-4.44.28-6.54 1.03l-.45.18-1.52 3.5-.64-.2a1.66 1.66 0 1 0-1 3.17l.12.04-.1.18a6.1 6.1 0 0 0-.61 2.26c-.01.37 0 1.11.03 1.83l.01 4v.03c-.02.36.02.73.12 1.08a1.1 1.1 0 0 0 1.11.74H4.4a1.1 1.1 0 0 0 1.1-.74c.1-.35.15-.72.13-1.08v-.44c2.76.25 4.53.37 6.28.37 1.74 0 3.45-.12 6.1-.36v.43c-.02.36.02.73.12 1.08a1.1 1.1 0 0 0 1.11.74h2.37a1.1 1.1 0 0 0 1.11-.74c.1-.35.14-.72.12-1.08l.01-3.96v-.03c.05-.74.1-1.5.1-1.93a5.6 5.6 0 0 0-.64-2.35l-.1-.21.47-.15a1.66 1.66 0 0 0 1.08-2.09zM5.37 5.18h.02c1.96-.69 4.03-1 6.1-.94 2.3-.04 4.6.28 6.8.93l.04.02 1.3 2.74a26.7 26.7 0 0 1-6.42.62h-1.06c-2.69.1-5.37-.05-8.03-.45l1.26-2.92zm-.9 13.92c0 .22-.01.45-.05.66H2a3.25 3.25 0 0 1-.04-.66v-.87c.16.08.33.13.5.15l2.02.18v.54zm17.2-.04v.04c0 .23-.01.45-.05.67h-2.44a3.26 3.26 0 0 1-.03-.67v-.53l1.88-.18c.22-.02.44-.09.63-.2v.87zm.64-9.7l-1.76.57.71 1.43c.3.57.48 1.2.5 1.85.02.37-.03 1.06-.07 1.7h-.01v.2l-.07 1.06c-.01.43-.28 1.05-.7 1.1-4.48.41-6.74.62-9 .62-2.28 0-4.66-.21-9.35-.64-.28-.03-.47-.48-.53-.9-.04-.3-.08-.79-.1-1.3v-.14a25.4 25.4 0 0 1-.02-1.62c.05-.61.21-1.21.48-1.77l.77-1.39-1.47-.46a.5.5 0 0 1 .3-.97l1.63.52.02-.02c2.45.43 4.94.6 7.43.52h2.13a26.8 26.8 0 0 0 6.92-.7l.49-.15L22 8.4a.51.51 0 0 1 .63.33.5.5 0 0 1-.33.64z"></path>
                            <path d="M4.54 12.08a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zm0 2.46a.65.65 0 1 1 0-1.3.65.65 0 0 1 0 1.3zm14.57-2.46a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zm0 2.46a.65.65 0 1 1 0-1.3.65.65 0 0 1 0 1.3zm-11.71.28h8.96v1.15H7.4v-1.15z"></path>
                        </svg>
                    </div>
                    <h1 className="text-inherit roboto-bold leading-8">Motors</h1>
                </div>
                <div className="flex text-[#002f34] hover:text-[#3a77ff] hover:fill-[#3a77ff] cursor-pointer justify-center gap-[10px] items-center">
                    <div className="p-[8px] fill-inherit motorImage">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            style={{ fill: "inherit" }}
                        >
                            <path d="M22.78 21.81V7.8L15.3 5.3v1.58l5.98 2V21.8H13.8V.7H1.22v21.1h-.6v1.5h22.76v-1.5h-.6zM12.3 4.3v17.5H2.72V2.2h9.58v2.1z"></path>
                            <path d="M7.98 4.37h2.42v1.21H7.98v-1.2zm-3.63 0h2.42v1.21H4.35v-1.2zM7.98 6.8h2.42V8H7.98V6.8zm-3.63 0h2.42V8H4.35V6.8zm3.63 3.62h2.42v1.21H7.98v-1.2zm-3.63 0h2.42v1.21H4.35v-1.2zm3.63 2.42h2.42v1.21H7.98v-1.2zm-3.63 0h2.42v1.21H4.35v-1.2zm3.63 3.63h2.42v1.21H7.98v-1.2zm-3.63 0h2.42v1.21H4.35v-1.2zm13.31-6.05h1.21v1.21h-1.2v-1.2zm-2.42 0h1.21v1.21h-1.2v-1.2zm2.42 2.42h1.21v1.21h-1.2v-1.2zm-2.42 0h1.21v1.21h-1.2v-1.2zm2.42 3.63h1.21v1.21h-1.2v-1.2zm-2.42 0h1.21v1.21h-1.2v-1.2z"></path>
                        </svg>
                    </div>
                    <h1 className="text-inherit roboto-bold leading-8">Property</h1>
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
                                    <LocationIcon height={24} width={24} color="#5c7a7d" />
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
                                    <LocationIcon height={24} width={24} color="#5c7a7d" />
                                    <h1 className="ms-[8px] text-[14px] roboto-regular">Azad Kashmir, Pakistan</h1>
                                </div>
                            </div>
                            <div className="p-[16px] z-1">
                                <div className="flex justify-start items-center">
                                    <LocationIcon height={24} width={24} color="#5c7a7d" />
                                    <h1 className="ms-[8px] text-[14px] roboto-regular">Balochistan, Pakistan</h1>
                                </div>
                            </div>
                            <div className="p-[16px] z-1">
                                <div className="flex justify-start items-center">
                                    <LocationIcon height={24} width={24} color="#5c7a7d" />
                                    <h1 className="ms-[8px] text-[14px] roboto-regular">Punjab, Pakistan</h1>
                                </div>
                            </div>
                            <div className="p-[16px] z-1">
                                <div className="flex justify-start items-center">
                                    <LocationIcon height={24} width={24} color="#5c7a7d" />
                                    <h1 className="ms-[8px] text-[14px] roboto-regular">Sindh, Pakistan</h1>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="w-full flex justify-start border border-[#d8dfe0] focus-within:border-[#23e5db] focus:border-[#23e5db] rounded">
                        <div className="w-full flex">
                            <input type="text" placeholder="Find Cars, Mobile Phones and More..." className="w-full ms-[10px] my-[12px] placeholder:text-[#7d7575] focus-visible:border-0 focus-visible:outline-0" />
                            <div style={{ borderTopRightRadius: "0.25rem", borderBottomRightRadius: "0.25rem" }} className={`cursor-pointer w-[48px] h-[48px] flex justify-center items-center bg-[#002f34]`}>
                                <SearchIcon height={24} width={24} />
                            </div>
                        </div>
                    </div>
                    <div className="flex ms-[32px] justify-start items-center gap-x-[20px]">
                        <div>
                            <div className="border-b-2 hover:border-[#ffffff] cursor-pointer border-[#002f34]">
                                <h1 className="text-[#002f34] roboto-bold">Login</h1>
                            </div>
                        </div>
                        <div className="cursor-pointer border-[#002f34]">
                            <div className="relative">
                                <img className="w-[218px] max-w-[104px]" src="https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg" alt="" />
                                <div className="flex justify-center items-center absolute inset-0">
                                    <img src="https://www.olx.com.pk/assets/iconPlusSell_noinline.75fc7ea23e80b50447cf5757d8ef083a.svg" className="me-[4px]" alt="" />
                                    <h1 className="text-[#002f34] roboto-bold text-[14px] uppercase">Sell</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header