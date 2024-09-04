"use client"
import { app } from "@/FirebaseConfig";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
export default function Home() {
  let [finalBlogs,setFinalBlogs]=useState([])
  // console.log(finalBlogs);
  

  const db = getDatabase(app);
  const getBlog = () => {
    const blogRef = ref(db, "blogs");
    onValue(blogRef, (items) => {
      const data = items.val();
      const finalData=[]
      // console.log(data);
      for(const key in data){
        console.log(data[key]);      
        finalData.push(data[key]);      
      }
      // console.log(finalData)
      setFinalBlogs(finalData)

    });
  };



  useEffect(()=>{
    getBlog()
  },[])
  return (
    <section className="bg-white dark:bg-gray-900 mt-16 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Blog
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {finalBlogs.length >= 1 ? (
            finalBlogs.map((item, index) => {
              return <Card item={item} key={index} />;
            })
          ) : (
            <div class="text-center relative left-[52%]">
              <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
              <h2 class="text-zinc-900 dark:text-white mt-4">Loading...</h2>
              <p class="text-zinc-600 dark:text-zinc-400">
                Blogs is about to begin
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


function Card({item}) {
  return (
    <article className="p-6 group bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                      Article
                  </span>
                  <span className="text-sm">14 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.heading}</h2>
              <p className="mb-5 font-light text-gray-500 line-clamp-5 dark:text-gray-400">{item.description}</p>
              <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                      <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" />
                      <span className="font-medium dark:text-white">
                          Bonnie Green
                      </span>
                  </div>
                  <a href="#" className="inline-flex items-center font-medium text-primary-600 group-hover:text-blue-600 dark:text-primary-500 hover:underline">
                      Read more
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div>
          </article> 
  )
}

