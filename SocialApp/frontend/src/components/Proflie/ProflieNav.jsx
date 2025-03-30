import { ChevronDown, Ellipsis } from 'lucide-react'
import React from 'react'

const ProflieNav = () => {
  return (
    <div className=' flex items-stretch justify-center relative'>
        <div className='flex flex-col grow-1 max-w-[1055px] min-w-0 px-[16px] relative'>
            <div className='flex items-center justify-between relative'>

                <div className='flex flex-col grow-1 max-w-full min-w-0 relative'>
                    <div className='block overflow-hidden relative'>
                        <div className='flex items-stretch justify-between min-h-[60px] relative'>
                            <div className='block absolute top-0 right-0 left-0 bottom-0 space-x-1 '>
                                <div className='inline-flex items-end h-[60px] w-[98.5px] relative'>
                                    <button className='btn btn-ghost h-[52px] min-h-[16px] px-[16px] rounded-xl hover:bg-gray-700 relative '>
                                        <span className='block text-[15px] font-semibold max-w-full min-w-0  break-words '>Xem thêm</span>
                                        <div className='block'>
                                            <ChevronDown className='h-[16px]' />
                                        </div>
                                        <div className='block absolute bottom-0 left-0 right-0'></div>
                                    </button>
                                </div>
                                <a href="#" className='flex float-left items-end h-[60px]  relative'>
                                    <button className='btn btn-ghost px-[16px] h-[52px] rounded-xl hover:bg-gray-700 '>
                                        <span className='text-[15px] font-semibold break-words max-w-full min-w-0'>Bài viết</span>
                                    </button>
                                </a>
                                <a href="#" className='flex float-left items-end h-[60px] relative'>
                                    <button className='btn btn-ghost px-[16px] h-[52px] rounded-xl hover:bg-gray-700 '>
                                        <span className='text-[15px] font-semibold break-words max-w-full min-w-0'>Giới thiệu</span>
                                    </button>
                                </a>
                                <a href="#" className='flex float-left items-end h-[60px] relative'>
                                    <button className='btn btn-ghost px-[16px] h-[52px] rounded-xl hover:bg-gray-700 '>
                                        <span className='text-[15px] font-semibold break-words max-w-full min-w-0'>Bạn bè</span>
                                    </button>
                                </a>
                                <a href="#" className='flex float-left items-end h-[60px] relative'>
                                    <button className='btn btn-ghost px-[16px] h-[52px] rounded-xl hover:bg-gray-700 '>
                                        <span className='text-[15px] font-semibold break-words max-w-full min-w-0'>Ảnh</span>
                                    </button>
                                </a>
                                <a href="#" className='flex float-left items-end h-[60px] relative'>
                                    <button className='btn btn-ghost px-[16px] h-[52px] rounded-xl hover:bg-gray-700 '>
                                        <span className='text-[15px] font-semibold break-words max-w-full min-w-0'>Video</span>
                                    </button>
                                </a>
                                <a href="#" className='flex float-left items-end h-[60px] relative'>
                                    <button className='btn btn-ghost px-[16px] h-[52px] rounded-xl hover:bg-gray-700 '>
                                        <span className='text-[15px] font-semibold break-words max-w-full min-w-0'>Reels</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='flex flex-col  self-center max-w-full min-w-0 relative'>
                    <div className='flex flex-col justify-center w-[48px] relative'>
                        <button className='btn btn-soft hover:bg-gray-700 rounded-lg h-[36px] px-[16px] relative'>
                            <div className='block mx-[3px]'>
                                <Ellipsis />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProflieNav
