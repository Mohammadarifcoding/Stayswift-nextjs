
import Link from "next/link"
import Image from "next/image"
import { auth } from "@/auth";
import Logout from "./auth/Logout";
import { Suspense } from "react";

const Navbar = async({sidemenu = true}) => {

  return (
    <nav>
    <Link href="/">
      <Image 
        src="/stayswift.svg" 
        alt="Stay Swift Logo" 
        width={200}
        height={200} />
    </Link>
{
  sidemenu &&  <ul>
      <li>
        <Link href="#">Recommended Places</Link>
      </li>

      <li>
        <Link href="#">About Us</Link>
      </li>

      <li>
        <Link href="#">Contact us</Link>
      </li>

      <li>
        <Link href="/bookings">Bookings</Link>
      </li>
      <Suspense fallback={    <li>
           <div className="flex items-center ">
                 <span className="mx-1">Loading</span>
                 <span>| </span>
           </div>
      </li>}>
        <ShowUser />
      </Suspense>
    </ul>
}
   
  </nav>
  )
}

export default Navbar



export const ShowUser =async()=>{
   const session = await auth()
  return (
    <li>
        {
          session?.user ? (
           <div className="flex items-center ">
                 <span className="mx-1">{session?.user?.name}</span>
                 <span>| </span>
              <Logout/>
           </div>
          ) : (
       <Link href="/login" className="login">Login</Link>
          )
        }
  
      </li>
  )
}