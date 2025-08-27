import React from 'react'
import {useDispatch} from  "react-redux"
import {login} from "../featres/user"
import { logout } from '../featres/user'
function Login() {
  const dispatch=useDispatch()
  return (
    <div>
        <button
        onClick={()=> {dispatch(login(
          {name:"pedro",
        age:20,
        email:"pedro@gmail.com"
    }
        ))}}> 
        Login</button>

        <button
        onClick={()=>{dispatch(logout())
        }}>Logout</button>
    </div>
  )
}

export default Login