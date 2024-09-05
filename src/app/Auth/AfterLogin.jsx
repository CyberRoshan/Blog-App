"use client"
import React, { useContext, useEffect } from 'react'
import { loginContext } from '../MainContext'
import { redirect } from 'next/navigation'

export default function AfterLogin() {
    let {token}=useContext(loginContext)

    useEffect(()=>{
        if(token!=undefined && token!=""){
            redirect("/")
        }
    },[token])
  return (
    <></>
  )
}
