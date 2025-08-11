"use client"


import { signInBycredential } from "@/backend/actions/authentication";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const [error,setError] = useState("")
  const router = useRouter()
  async function Submit(event) {
    event.preventDefault()
    try{
      const formData = new FormData(event.currentTarget);
      const response = await signInBycredential(formData)
      console.log(response)
      if(!!response?.error){
       setError(response.error.message)
      }
      else{
        router.push("/bookings")
      }
    }catch(e){
       setError(e.message)
    }
  }
  return (
    <>
    {error && <p className="text-lg text-red-500 text-center">{error}</p>}
     <form onSubmit={Submit} className="login-form">
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <button type="submit" className="btn-primary w-full mt-4">
        Login
      </button>
    </form>
    
    
    
    </>
   
  );
};

export default LoginForm;
