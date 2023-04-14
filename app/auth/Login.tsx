'use client'
import { signIn } from 'next-auth/react'

function Login() {

  
  return (
    <li className="list-none">
      <button className="text-sm" onClick={() => signIn()}>
        Logar
      </button>
    </li>
  ) 
} 


export default Login
