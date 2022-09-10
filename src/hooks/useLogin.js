import { useState } from "react"
import useAuthContext from "./useAuthContext"

export const useLogin = () => {
    const [error , setError ] = useState(null)
    const [isLoading , setIsLoading ] = useState(null)
    const { dispatch } = useAuthContext()
    
    const login = async (email , password ) => {
        setIsLoading(true)
        setError(null)
        
        const response = await fetch('http://localhost:4000/user/login' , {
            method : 'POST',
            headers: {'Content-Type' : 'application/json'},
            body:JSON.stringify({email,password})
        })
       const  json = await response.json() 

       if(!response.ok) {
        setIsLoading(false)
        setError(json.err)
       
       }
       if(response.ok){
        // put this paylaod in the local storage 
        localStorage.setItem('user' , JSON.stringify(json))

        // apdate the context
        dispatch({type : 'LOGIN' , payload : json })
        
        // set is loading to false 
        setIsLoading(false)
       }

    }

    return { login , isLoading , error} 
}

