"use client"
import React, { createContext, useEffect, useState } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'

export const loginContext=createContext()
export default function MainContext({children}) {

    let [token,setToken]=useState(localStorage.getItem("USERTOKEN") ?? "")
    let tokenObj={token,setToken}
    useEffect(()=>{
        localStorage.setItem("USERTOKEN",token)
    },[token])
  return (
    <main>
      <loginContext.Provider value={tokenObj}>
        <Header />
        {children}
        <Footer />
      </loginContext.Provider>
    </main>
  );
}
