import React from 'react'

import SidebarChat from './../components/chat/SidebarChat';
import ContainerChat from './../components/chat/ContainerChat';
import InforChat from './../components/chat/InforChat';

const ChatPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-base-200 ">
    <div className="rounded-lg shadow-cl w-full h-full flex pt-[56px] pr-[16px] ">
      <SidebarChat />
      <ContainerChat />
    </div>
  </div>
  )
}

export default ChatPage