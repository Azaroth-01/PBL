import Image from "next/image";
import Menubar from "@/components/menubar";
import Searchbar from "@/components/searchbar";
import SearchBoxLayout from "@/components/searchbar";

export default function Home() {
  return (
    <div>
        <div>
            <Menubar/>
        </div>

          <div>
            <SearchBoxLayout/>
          </div>

        
        

        </div>
    
  )
}
