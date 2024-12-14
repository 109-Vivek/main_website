"use client"
import { signIn, signOut } from 'next-auth/react'
import React from 'react'

const LoginLogout = () => {
  return (
    <div>
        <button onClick={() => signIn("google")}>Login with Google</button>
        <button onClick={() => signOut()}>Logout</button>
    </div>
  )
}

export default LoginLogout