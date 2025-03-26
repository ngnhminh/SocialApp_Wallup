import React from 'react'

import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Contacts from "../components/Contacts";
import { SquarePen } from 'lucide-react';

const HomePage = () => {


  return (
    <div className="h-screen flex items-center justify-center bg-base-200 ">
      <div className="rounded-lg shadow-cl w-full h-full flex pt-[56px] relative">
        <Sidebar />
        <Content />
        <Contacts />
        <div className='flex items-center justify-center size-[50px] rounded-full
          bg-gray-700 hover:bg-gray-600 cursor-pointer absolute bottom-[18px] right-[28px]'>
          <SquarePen size={20} strokeWidth={2} />
        </div>
      </div>
    </div>
  )
}

export default HomePage