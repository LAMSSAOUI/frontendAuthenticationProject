import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const Login = () => {
 const [email , setEmail] =  useState('')
 const [password , setPassword] = useState('')
 const { login , isLoading , error } = useLogin()

 const handleSubmit = async (e) => {
  e.preventDefault()
  await login(email , password)
 }

  
    return (
      <form className="signup" onSubmit={handleSubmit}>
        <h3 className="p-5 font-extrabold text-2xl">Log in </h3>
        
        <label>Email address:</label>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
        />
        <label>Password:</label>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
  
        <button disabled={isLoading}>Log in </button>
       
        {error && <div>{error}</div>}
       
      </form>

)
}

export default Login