import React from 'react'

interface Icon {
    width: number,
    height: number,
    color?: string
}

const DropdownIcon = ({ width, height, color = "#002f34" }: Icon) => {
    return (
        <div>
            <svg
                width={width}
                height={height}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                style={{fill:color}}
            >
                <path d="M85.4 277.33h60.32l366.34 366.34L878.4 277.33h60.33v60.33l-408.99 409h-35.3l-409.05-409z" className="rui-77aaa">
                </path>
            </svg>
        </div>
    )
}

export default DropdownIcon