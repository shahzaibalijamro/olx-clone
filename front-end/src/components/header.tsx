import Logo from "@/assets/Logo"
import MotorImage from "@/assets/motorImage"
import PropertyImage from "@/assets/propertyImage"

const Header = () => {
    return (
        <div>
            <div className="flex gap-x-[40px] items-center justify-start pt-[16px] pb-[6px]">
                <Logo height={32} />
                <div className="flex justify-center gap-[10px] items-center">
                    <div className="p-[8px] motorImage">
                        <MotorImage height={24} width={24} />
                    </div>
                    <h1 className="text-[#002f34] font-bold leading-8">Motors</h1>
                </div>
                <div className="flex justify-center gap-[10px] items-center">
                    <div className="p-[8px] motorImage">
                        <PropertyImage height={24} width={24} />
                    </div>
                    <h1 className="text-[#002f34] font-bold leading-8">Property</h1>
                </div>
            </div>
            <h1 className="text-center">Header</h1>
        </div>
    )
}

export default Header