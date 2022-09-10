import {useState} from 'react'
import {useSignUp} from '../hooks/useSignUp'


const SignUp = () => {
const [email , setEmail] = useState('')
const [password , setPassword ] = useState('')
const {signup , isLoading , error } = useSignUp()


  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(email , password)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3 className="p-5 font-extrabold text-2xl">Sign Up</h3>
      
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

      <button disabled={isLoading}>Sign up</button>
     
      {error && <div>{error}</div>}
     
    </form>
)
}

export default SignUp