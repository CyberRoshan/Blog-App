"use client"
import React, { useContext, useEffect } from 'react'
import { loginContext } from '../MainContext'
import { redirect } from 'next/navigation'

export default function CheckLogin() {

    let {token}=useContext(loginContext)

    useEffect(()=>{
        if(token=="" || token==undefined){
            redirect("/login")
        }
    },[token])
  return (
    <></>
  )
}
