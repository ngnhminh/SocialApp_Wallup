import React from 'react'

import SidebarChat from './../components/SidebarChat';
import ContainerChat from './../components/ContainerChat';
import InforChat from './../components/InforChat';

const ChatPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-base-200 ">
    <div className="rounded-lg shadow-cl w-full h-full flex pt-[56px] ">
      <SidebarChat />
      <ContainerChat />
    </div>
  </div>
  )
}

export default ChatPage