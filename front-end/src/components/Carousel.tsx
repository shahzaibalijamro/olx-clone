import React from "react";
import Card from "./Card";
import DropdownIcon from "@/assets/DropdownIcon";
interface Product {
    id: number;
    price: string;
    title: string;
    address: string;
    time: string;
    imageUrl: string;
}
const chunkArray = (array: Product[], size: number): Product[][] => {
    const result: Product[][] = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};

interface CarouselProps {
    products: Product[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => {
    const productChunks = chunkArray(products, 4);

    return (
        <div className="flex items-center justify-center gap-x-[24px]">
            <div className="carousel w-full">
                {productChunks.map((chunk, index) => (
                    <div
                        key={index}
                        id={`slide${index + 1}`}
                        className="carousel-item relative w-full"
                    >
                        <div className="flex w-full justify-center items-center gap-x-[24px]">
                            {chunk.map((product, i) => (
                                <div className="w-full" key={i}>
                                    <Card product={product} />
                                </div>
                            ))}
                        </div>
                        <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a
                                href={`#slide${index === 0 ? productChunks.length : index
                                    }`}
                                className=""
                            >
                                <div className="py-[12px] ps-[10px] pe-[12px] bg-white border border-[#002f34] rounded-full h-[40px] w-[40px] rotate-90">
                                    <DropdownIcon width={18} height={18} color="#002f34"/>
                                </div>
                            </a>
                            <a
                                href={`#slide${index + 2 > productChunks.length ? 1 : index + 2
                                    }`}
                                className=""
                            >
                                <div className="py-[12px] ps-[10px] pe-[12px] bg-white border border-[#002f34] rounded-full h-[40px] w-[40px] -rotate-90">
                                    <DropdownIcon width={18} height={18} color="#002f34"/>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;