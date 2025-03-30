import React from 'react'
import { SquarePen } from 'lucide-react';

const ChatWidget = () => {
  return (
    <div className='flex items-center justify-center size-[50px] rounded-full
    bg-gray-700 hover:bg-gray-600 cursor-pointer fixed bottom-[18px] right-[28px]'>
    <SquarePen size={20} strokeWidth={2} />
  </div>
  )
}

export default ChatWidget