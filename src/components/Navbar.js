import React from 'react'
import {useNavigate} from 'react-router-dom'
import useAuthContext from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'


const Navbar = () => {
  const { user } = useAuthContext()
  const { logout } = useLogout()


  let navigate =  useNavigate()

  const routeSignUp = () =>{ 
    let path = '/signup'; 
    navigate(path);
  }
  const routeLogin = () =>{ 
    let path = '/login'; 
    navigate(path);
  }

  const handleLogout = () => {
    logout()
  }


  return (
<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl ml-28" href='/'>Dodel . </a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li><a>Accueil</a></li>
      <li><a>Nos Solution</a></li>
      <li><a>A propos</a></li>  
    </ul>
    <nav className='pl-8' >
       {user && (
        <div>
          <span className='font-bold '>{user.email}</span>
          <button class="btn mr-16 bg-red-300 normal-case hover:bg-red-600" onClick={handleLogout}>Log out </button>
         </div>
       )}
       {!user && (
       <div>
            <button class=" ml-32 bg-white normal-case border-0 text-black mr-5 font-bold " onClick={routeLogin}>Log in </button>
             <button class="btn mr-16 bg-black normal-case" onClick={routeSignUp}>Sign up</button>
        </div>
       )}
      </nav>
  </div>
</div>
  )
}

export default Navbar