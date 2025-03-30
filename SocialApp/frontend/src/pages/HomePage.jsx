import React from 'react'

import Sidebar from "../components/Home/Sidebar";
import Content from "../components/Home/Content";
import Contacts from "../components/Home/Contacts";
import ChatWidget from '../components/ChatWidget';

const HomePage = () => {


  return (
    
    <div className=' flex flex-col  relative top-[56px] '>
      
      <div className="flex items-stretch justify-center bg-base-200 relative">

        <div className="flex items-start justify-between container relative">
 
          <div className=' hidden lg:block basis-[360px] sticky top-[56px] max-w-[360px] max-h-[0px] min-w-[280px] min-h-[241.6px] shrink-99'>
            <Sidebar />
          </div>

          <div className='basis-[744px] h-full px-[32px] box-content min-w-[0px] flex flex-1 flex-nowrap items-stretch justify-center relative shrink-1 '>
            <Content /></div>

          <div className='hidden md:block basis-[360px] sticky top-[56px] max-w-[360px] max-h-[0px] min-w-[280px] min-h-[241.6px]  shrink-99'>
            <Contacts />
          </div>
            
          <ChatWidget />
        </div>
      </div>
    </div>

  )
}

export default HomePage