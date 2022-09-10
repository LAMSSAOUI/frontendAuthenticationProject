import { useContext } from "react";
import {AuthContext} from "../context/AuthContext";


const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context) {
        throw Error('the useAuthContext must be inside the the authContextProvider' )
    }

  return context
}

export default useAuthContext