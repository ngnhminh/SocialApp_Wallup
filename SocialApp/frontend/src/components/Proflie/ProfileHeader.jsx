import { Camera, ChevronDown, Pencil, Plus } from 'lucide-react'
import React from 'react'
import { useEffect } from "react";
import { useAuth } from "../../context/AuthProvider";

const ProfileHeader = () => {
    const { user } = useAuth();

  return (
    <div className='block'>

        <div className='flex items-stretch justify-center flex-nowrap relative'>
            <div className='flex flex-col grow-1 items-center justify-center max-w-[1095px] min-w-0   relative'>
                <div className='block overflow-hidden relative rounded-xl '>
                    <div className='block max-h-[385px] min-h-0'>
                        <img 
                            className=''
                            src="lily-z-princess.jpg" alt="" />
                    </div>
                    <div className='block absolute left-0 right-0 bottom-0 '>
                        <div className='block px-[20px] relative'>
                            <div className='flex items-stretch justify-end m-[6px] px-[12px] pt-[16px] relative'>
                                <div className='flex flex-col p-[6px] max-w-full min-w-0 relative'>
                                    <button className='btn btn-soft rounded-lg h-[36px] bg-gray-100 hover:brightness-95 border-none '>
                                        <Camera fill='' />
                                        <span className='text-gray-800'> Thêm ảnh bìa</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div className='flex items-stretch justify-center flex-nowrap pb-[16px] box-border relative'>
            <div className='flex flex-col grow-1 max-w-[1050px] min-w-0 px-[16px] box-border relative'>

                <div className='flex items-center justify-center relative'>
                    
                    <div className='block self-start mr-[16px] mt-0 absolute bottom-0 left-0 '>
                        <div className='block p-[4px]'>
                            <div className='inline-block cursor-pointer size-[168px] overflow-hidden rounded-full'>
                                <img
                                    className=' hover:brightness-110'
                                    src="IMG_7810.jpg" alt="" />
                                <button className='btn btn-circle btn-soft absolute right-[25px] bottom-[25px] z-2 hover:bg-gray-700'>
                                    <Camera />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='block w-[174px] mr-[16px]'></div>

                    <div className='flex self-center grow-1 mt-[32px] mb-[16px] '>
                        <div className='flex flex-col box-border max-w-full min-h-0 relative '>
                            <div className='block leading-[16.08px] my-[8px]'>
                                {/* Lấy tên user */}
                                {user ? (
                                    <span className='font-bold leading-[38px] text-[32px] max-w-full min-w-0 break-words text-start'>
                                        {user.fullName}
                                    </span>
                                    ) : (
                                    <span>Loading...</span>
                                    )}
                                <div className='flex flex-col items-start max-w-full pt-[8px] box-border relative '>
                                    <a href='#' className=' hover:underline text-[15px] font-normal block break-words max-w-full min-w-0'>
                                        215 người bạn
                                    </a>
                                </div>
                            </div>
                          
                        </div>
                    </div>

                    <div className='block grow-0 self-end mb-[16px] ml-[32px] mt-[32px] max-w-[400px] '>
                        <div className='flex justify-end flex-wrap -mx-[4px] -mt-[8px] '>
                            <div className='block mx-[4px] mt-[8px] '>
                                <button className='btn bg-blue-600 hover:brightness-110 rounded-lg h-[36px]'>
                                    <Plus />
                                    <span>Thêm vào tin</span>
                                </button>
                            </div>
                            <div className='block mx-[4px] mt-[8px] '>
                                <button className='btn btn-soft rounded-lg hover:bg-gray-700 h-[36px]'>
                                    <Pencil fill='gray'  />
                                    <span>Chỉnh sửa trang cá nhân</span>
                                </button>
                            </div>
                            <div className='block mx-[4px] mt-[8px] '>
                                <button className='btn btn-soft rounded-lg hover:bg-gray-700 h-[36px] p-3'>
                                    <ChevronDown />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
     
            </div>
        </div>

        <div className='flex items-stretch justify-center shrink-0 relative'>
            <div className='flex flex-col grow-1 shrink-1 max-w-[1025px] min-w-0 px-[16px]
                            box-border border-b border-gray-600 '></div>
        </div>
    </div>
  )
}

export default ProfileHeader