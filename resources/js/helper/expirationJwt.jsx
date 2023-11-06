import jwtDecode from "jwt-decode"
import { getToken, removeToken } from "./auth"

export const getExpirationToken = () => {
    var isExpired = false
    const token = getToken()
    var decodedToken = jwtDecode(token)
    var dateNow = new Date()
    if ((decodedToken.exp) * 1000 < dateNow.getTime()) {
        isExpired = true
       

         removeToken()

    


        window.location.reload(true);

    
    }
    return isExpired
}