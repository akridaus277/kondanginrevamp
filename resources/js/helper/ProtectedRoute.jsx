import React from 'react'

import { Navigate, useLocation } from "react-router-dom";

export function ProtectedRoute ({children}) {
 
    let location = useLocation()
    
    if(!localStorage.getItem("token")){
        return <Navigate to="/" state={{ from:location }}/>
    } 

    return children


}


