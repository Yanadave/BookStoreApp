import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
  const [authUser,setAuthUser]=useAuth()

  const handleLogout=()=>{
     try {
      setAuthUser({
        ...authUser,
        user:null
      })
      localStorage.removeItem("Users");
      toast.success("Logout Successfully");
      

      setTimeout(()=>{
        window.location.reload();   // logout hone ke baad page apne aap refresh hojaye
        
      },2000)
       
     } catch (error) {
      toast.error("Error: "+error)
      setTimeout(()=>{},3000);
     }
  }
  return (
    <div>
        <button className='px-3 py-2 text-white rounded-md cursor-pointer bg-red-500'onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout