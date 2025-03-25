import React from 'react'

import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Contact from "../components/Contact";

const HomePage = () => {


  return (
    <div className="h-screen flex items-center justify-center bg-base-200 ">
      <div className="rounded-lg shadow-cl w-full h-full flex pt-[56px]">
        <Sidebar />
        <Content />
        <Contact />
      </div>
    </div>
  )
}

export default HomePage