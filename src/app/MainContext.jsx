"use client"
import React, { createContext, useEffect, useState } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'

export const loginContext=createContext()

export default function MainContext({children}) {

    let [token,setToken]=useState(localStorage.getItem("USERTOKEN") ?? "")
    let [removeHeader,setRemoveHeader]=useState(true)
    // const router=useRouter()  // ! Not use for get router link

    useEffect(()=>{
        localStorage.setItem("USERTOKEN",token)
    },[token])

    const router=usePathname();
    // console.log(router)

    useEffect(()=>{
      if(router==="/login"){
        setRemoveHeader(false)
      }
      else{
        setRemoveHeader(true)
      };
    },[router])

    let tokenObj={token,setToken}

  return (
    <main>
      <loginContext.Provider value={tokenObj}>
        {removeHeader ? <Header/> : ''}
        {children}
        {removeHeader ? <Footer/> : ""}
      </loginContext.Provider>
    </main>
  );
}
