"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = ({fromList, destination, checkin, checkout}) => {
  const searchParmas = useSearchParams()
  const pathName = usePathname()
  const {replace} = useRouter()
  const [searchValues,setSearchValues] = useState({
    destination: destination || "Puglia",
    checkin: checkin || "",
    checkout: checkout || "",
  })
  const [allowSearch,setAllowSearch] = useState(true)
  const handleInput = async(e)=>{
    setSearchValues({...searchValues,[e.target.name]:e.target.value})
    if(new Date(searchValues.checkin).getTime() > new Date(searchValues.checkout).getTime()) setAllowSearch(false)
      else{
        setAllowSearch(true)
      }
  }
  const handleSearch = async(e)=>{
    const params = new URLSearchParams(searchParmas)
    if(searchValues.destination) params.set("destination",searchValues.destination)
    if(searchValues.checkin) params.set("checkin",searchValues.checkin)
    if(searchValues.checkout) params.set("checkout",searchValues.checkout)

    if(pathName.includes("hotels")){
      replace(`${pathName}?${params.toString()}`)
    }
    else{
      replace(`${pathName}hotels?${params.toString()}`)
    }
  }
  return (
    <>
      <div className="lg:max-h-[250px] mt-6">
        <div id="searchParams" className={fromList && "!shadow-none"}>
          <div>
            <span>Destination</span>
            <h4 className="mt-2">
              <select defaultValue={destination} onChange={handleInput} name="destination" id="destination">
  <option value="Puglia">Puglia</option>
                                <option value="Catania">Catania</option>
                                <option value="Palermo">Palermo</option>
                                <option value="Frejus">Frejus</option>
                                <option value="Paris">Paris</option>
              </select>
            </h4>
          </div>

          <div>
            <span>Check in</span>
            <h4 className="mt-2">
              <input defaultValue={checkin} onChange={handleInput} type="date" name="checkin" id="checkin" />
            </h4>
          </div>

          <div>
            <span>Checkout</span>
            <h4 className="mt-2">
              <input defaultValue={checkout} onChange={handleInput} type="date" name="checkout" id="checkout" />
            </h4>
          </div>
        </div>
      </div>

      <button disabled={!allowSearch} onClick={handleSearch} className="search-btn">🔍️ {fromList ? "Modify Search": "Search"}</button>
    </>
  );
};

export default Search;
