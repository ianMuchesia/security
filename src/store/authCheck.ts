

import axios from "axios"
import { AppDispatch } from ".";
import { setIsAuthenticated, setisNotAuthenticated } from "./authSlice";




export const checkAuthentication=()=>{
  
    return async(dispatch:AppDispatch)=>{
        try {

            const backendUrl = "http://localhost:3000"; // Ensure this value is set correctly in your environment
            const apiEndpoint = '/api/v1/auth/showUser';
            const url = `${backendUrl}${apiEndpoint}`;
            
            const { data } = await axios.get(url, { withCredentials: true });
                    
        
            if(data?.success){
                const {name , userId , role} = data?.user
                dispatch(setIsAuthenticated({
                    name,
                    userId,
                    role
                }))
                
            }
            

        } catch (error) {
            console.log(error)
            dispatch(setisNotAuthenticated())
        }
    }
}


