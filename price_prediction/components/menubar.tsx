import React from "react";
import Image from 'next/image';


export default function Menubar(){

    return(
        <div className="flex flex-row justify-between items-center bg-ember p-4">
           
            <div className="flex flex-row text-2xl font-bold text-cpurple ml-3 p-2 ">
                <Image src='/home.png' alt='icon' width={30} height={30} />
               PriceWise 
            </div>
            <div className="text-2xl font-bold text-cpurple ">
                Need help to predict how much the property is worth??
            </div>
        </div>

    )
}