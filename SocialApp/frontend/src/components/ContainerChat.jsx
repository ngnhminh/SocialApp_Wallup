import { Phone, Video } from 'lucide-react'
import React from 'react'
import { InfoIcon } from './icons/Icon'


// import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
// import { formatMessageTime } from "../lib/utils";

const  ContainerChat = () => {

  return (
    <div className='flex flex-col grow-1 pt-[16px] relative  '>
      <div className='flex items-stretch justify-between grow-1 min-w-[0px] max-h-[686.4px] relative '>

        <div className='flex flex-col grow-2 shrink-1 basis-[600px] max-w-full min-w-[300px] max-h-[654.4px]
                        ml-[16px] overflow-hidden rounded-lg relative box-border '>

          <div className='flex flex-col shrink-1 grow-1 relative bg-base-100 px-4'>

            <div className='block relative h-[64px] border-b border-gray-900 '>
              <div className='flex flex-nowrap items-center justify-between px-[16px] py-[12px] -mx-[6px] '>
                <button className='btn btn-ghost hover:bg-gray-600 rounded-lg gap-2'>
                  <img 
                    className=' size-[40px] rounded-full '
                    src="https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-1/275603720_667156341070591_6170493892786942129_n.jpg?stp=c7.2.705.705a_dst-jpg_s100x100_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeElI-6_EPX_qmXiWMm0ZsKoV6B21_LhOXxXoHbX8uE5fPMPJpLM5rRnxRYAJCCfUxOCKpPPslbNVAwKUAZqg-bL&_nc_ohc=nAvFTbrD7ogQ7kNvgH8f599&_nc_oc=Adkj_trFgXAMJugSX7can-PC1_M3BLjnDUzHvjY0qe9djDP6Q_GVtJmeWN2u09vmiPdnl5dPQGH9k-agxnI3aQyW&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=nK8yU_anVGoHCi-i4hMZlw&oh=00_AYHZ188A8QEYezoQbYIJwUkypZk4mIloTYHkHjxKqhGX7A&oe=67ED8BC8" alt="" />
                  <div className='flex flex-col text-left '>
                    <span className=''>Nhật Minh</span>
                    <span>Hoạt động 5 phút trước</span>
                  </div>
                </button>
                <div className='flex items-center justify-between '>
                  <button className='btn btn-circle btn-ghost hover:bg-gray-700'>
                    <Phone stroke='#a501fd' fill='#a501fd' size={23} />
                  </button>
                  <button className='btn btn-circle btn-ghost hover:bg-gray-700'>
                    <Video stroke='#a501fd' size={23} fill='#a501fd' />
                  </button>
                  <button className='btn btn-circle btn-ghost hover:bg-gray-700'>
                    <InfoIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className='flex flex-col grow-1 h-[590.4px] max-h-none max-w-none min-h-auto min-x-auto relative '>
              <div className='flex flex-col  max-w-full min-h-0 grow-1 shrink-1  relative '>
                <MessageSkeleton />
                <div className=' flex items-end py-[12px]'>
                  <MessageInput />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ContainerChat