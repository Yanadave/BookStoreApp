import React, { createContext, useContext, useState } from 'react'

export const AuthContext=createContext()
export default function AuthProvider({children}) {
  const initialAuthUser =localStorage.getItem("Users");
  const [authUser,setAuthUser]= useState(
    initialAuthUser?JSON.parse(initialAuthUser) : undefined
  )
  return(
    <AuthContext.Provider value={[authUser,setAuthUser]}>
        {children}
    </AuthContext.Provider>
  )
}

//ek khudka HOOK create krA uper sabka use krne ke liye
export const useAuth=()=>useContext(AuthContext);


// isko isliye bnaya h taki apn user ko har jagah access kr paye globally
