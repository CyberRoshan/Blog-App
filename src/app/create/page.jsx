"use client"
import React, { useState } from 'react'
import { getDatabase, ref, set } from "firebase/database";   // ! Step 2
import { app } from '@/FirebaseConfig';     
export default function CreateBlog() {
  const db = getDatabase(app);             // ! Step 3
  let [formData,setFormData]=useState({
    heading:"",
    description:""
  })
  

  let handleFormData=(event)=>{
    const inputName=event.target.name
    const inputValue=event.target.value
    let obj={...formData}
    obj[inputName]=inputValue
    setFormData(obj)
    // console.log(formData);
    
  }

  let saveBlog=(event)=>{
    console.log(formData)
    
    const blogId=new Date().getTime()      // ! Step 4
    set(ref(db,'blogs/' + blogId),formData)       // ! Step 5
    setFormData({
      heading:"",
      description:""
    })
    event.preventDefault()
  }
  return (
    <section className="max-w-[1320px] mt-16 py-[50px] mx-auto">
      <h2 className='text-center text-4xl font-bold'>Create Blog</h2>
      <form onSubmit={saveBlog} className="w-full">
        <label className="text-[20px] font-semibold">Heading</label>
        <div className="relative mt-4">
          <input
          required
            name="heading"
            value={formData.heading}
            onChange={handleFormData}
            type="text"
            className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_helper"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Add Heading
          </label>
        </div>
        <div className="mt-10">
          <label className="text-[20px] font-semibold">Description</label>
          <textarea
          required
            name="description"
            value={formData.description}
            onChange={handleFormData}
            id="message"
            rows="14"
            className="block mt-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your Blog here..."
          />
        </div>
        <button
          type="submit"
          className="px-5 py-3 w-[20%] mx-auto table mt-10 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Post Blog
        </button>
      </form>
    </section>
  );
}
