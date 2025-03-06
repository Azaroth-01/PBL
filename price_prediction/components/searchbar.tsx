import { useState } from "react"

export default function Searchbar(){

    const cities=['Pune','Banglore']
    const[search,setSearch]=useState("");

    const finalCity=cities.filter(city => city.toLowerCase().includes(search.toLowerCase()))

    return(

        <div>
            <div>
                <input type="text" placeholder="" />
            </div>
        </div>
    )
}