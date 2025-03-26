import { Plus } from 'lucide-react'
import React from 'react'

const Content = () => {
  return (
  <div className=" px-[32px] flex flex-1 md:px-auto md:mx-auto  bg-base-200 ">
    <div className=" flex flex-col shrink-0 w-[590px] pt-4 max-w-full px-auto mx-auto overflow-y-auto overflow-x-hidden gap-3">

        <div className='flex flex-col rounded-lg bg-base-100 px-[16px] pt-[12px] pb-[10px] '>
          <div className='flex items-center justify-start gap-3 '> 
            <img src="IMG_7810.jpg" alt="avt" className=' size-[40px] inline-block rounded-full object-cover cursor-pointer hover:brightness-110 hover:opacity-95' />
            <button className="btn btn-soft rounded-3xl flex-1 font-[Segoe UI Historic] hover:bg-gray-700  text-gray-300 justify-start text-[17px]">
              Minh ơi, bạn đang làm gì thế?
            </button>
          </div>

          <div className="  pt-[12px] border-b border-gray-600"></div>

          <div className='flex items-center pt-[12px] justify-between '> 
            <button className="btn bg-transparent rounded-lg border-none shadow-none hover:bg-gray-700 flex-1 flex items-center">
              <img 
              src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png?_nc_eui2=AeFqDwA6fw6iTrTQGAumwQtNueRic5Ym8Wm55GJzlibxaVnALaFOd322f5n2N5UNg6ipEqYOv6duLAizpKffawNX" 
              alt="video" />
              Video trực tiếp
            </button>
            <button className="btn bg-transparent rounded-lg border-none shadow-none hover:bg-gray-700 flex-1 flex items-center">
              <img 
              src='https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeEMroBTsaHpzLJ6ruiXw-qikBVQC4m7dx6QFVALibt3HqX_qmSrEWxAO-b0Aobdcw9t5lK_kiRCl6YSOsNxS8pQ'
              alt="image" />
              Ảnh/Video
            </button>
            <button className="btn bg-transparent rounded-lg border-none shadow-none hover:bg-gray-700 flex-1 flex items-center">
              <img 
              src='https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeGVXpMts6UpAVMG2v5C9vjFfPQ6N5_OUfV89Do3n85R9RcT96OCYub6fZadwfKzckctvPC2PgyvPhjHIncKwOFd'
              alt="imotion" />
              Cảm xúc/hoạt động
            </button>
          </div>
        </div>

        <div className=' flex gap-2 '>

          <div className='w-[112px] h-[200px] rounded-xl  flex-none relative overflow-hidden cursor-pointer'> 
            <div className=' size-full hover:scale-102 hover:brightness-90 transition-all duration-300 '
                    style={{
                      backgroundImage: 'url("IMG_7810.jpg")',
                      backgroundPosition: "center",
                      backgroundSize: "cover"
                    }}>
            </div>
            <div className='w-full absolute bottom-0'>
              <div className='flex justify-center bg-base-100  box-border px-[16px] pt-[28px] pb-[12px] relative '>
                  <div className='flex items-center justify-center size-[32px] rounded-full bg-blue-600 absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 '>
                    <Plus strokeWidth={2.5} />
                  </div>
                  <span className='text-[13px] font-semibold'>Tạo tin</span>
              </div>
            </div>
          </div>

          <div className='w-[112px] h-[200px] rounded-xl  flex-none overflow-hidden cursor-pointer relative'> 
            <div className='rounded-full border-blue-600 border-4 size-[40px] m-[12px] absolute top-0 z-10'
                style={{
                  backgroundImage: 'url("https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/469864732_2295104150845595_5236054652328865944_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFDevbCVpOaZjXKEVyzEZusWrmrqba1zIlauauptrXMie305yOcm_1u21T4i2Agw9VMC-opebTTK-X7B2ro5eKd&_nc_ohc=42VuIy02XFMQ7kNvgGk_4o7&_nc_oc=Adk2kXAa98v8JmbfdXsR0V1hqW7SE1bvIWFjMM08ERsspDFNSIpNW2tyiTyXyZFsfzM&_nc_zt=24&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=XxWW4EMx7jMqMN_C-8B5YA&oh=00_AYEmaQdQLlaRqiat2UmmNqhbMvSf6xIv8jo9WhAd6kFdKg&oe=67EA260F")',
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}>
            </div>
            <div className=' size-full hover:scale-102 hover:brightness-90 transition-all duration-300 bg-gray-600'
                    // style={{
                    //   backgroundImage: 'url("avatar.png")',
                    //   backgroundPosition: "center",
                    //   backgroundSize: "cover"
                    // }}
                    >
            </div>
            <div className=' flex w-full px-[16px] pt-[28px] pb-[12px]  absolute bottom-0'>
              <span className='text-[13px] font-semibold -ml-1'>Yến Hoàng</span>
            </div>
          </div>

          <div className='w-[112px] h-[200px] rounded-xl  flex-none overflow-hidden cursor-pointer relative'> 
            <div className='rounded-full border-blue-600 border-4 size-[40px] m-[12px] absolute top-0 z-10'
                style={{
                  backgroundImage: 'url("https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/480699156_1852008362277900_2101197090274934605_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHaZ0Chzr0xQCATcPkfGT-jsVfKWmXwClyxV8paZfAKXGMTn6RJv-D-QhA2Js6Jcbvkh1O6ZBC1vU6NzPZotpoW&_nc_ohc=8x5I2fMH1EUQ7kNvgGaI5y7&_nc_oc=AdkJOhWMsXGtak1j8tylxRs8ALME7MOFBhHmKx-ieggrOgRhS6-7djXkAlpOEgPvA7Y&_nc_zt=24&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=XxWW4EMx7jMqMN_C-8B5YA&oh=00_AYEdUmGEYIfzWwjs7irLB0vCamcH5MEfPrPeOOrPWZb7tw&oe=67EA3A26")',
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}>
            </div>
            <div className=' size-full hover:scale-102 hover:brightness-90 transition-all duration-300 bg-gray-600 '
                    // style={{
                    //   backgroundImage: 'url("IMG_7810.jpg")',
                    //   backgroundPosition: "center",
                    //   backgroundSize: "cover"
                    // }}
                    >
            </div>
            <div className=' flex w-full px-[16px] pt-[28px] pb-[12px]  absolute bottom-0'>
              <span className='text-[13px] font-semibold -ml-1'>Thanh Hiền</span>
            </div>
          </div>

          <div className='w-[112px] h-[200px] rounded-xl  flex-none overflow-hidden cursor-pointer relative'> 
            <div className='rounded-full border-blue-600 border-4 size-[40px] m-[12px] absolute top-0 z-10'
                style={{
                  backgroundImage: 'url("https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-1/350031677_188457927489704_658359158597550827_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHGCTDBoxA8HCVLedw-9vPqGkqffbo_WQgaSp99uj9ZCMwCzhcgwd0iq77s4mMr46bmbdcr8IrU5Rp7GoCUtlMb&_nc_ohc=4ZwUkWw0ybUQ7kNvgETwYEM&_nc_oc=AdkHYtMDtgO87x5_EY1U3Z12Wn4b0BcdmMjxWv4R4MM9mgC-0Kep8U8svHl-2dZa0sI&_nc_zt=24&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=dPY4PVwiQOnfZ7QpzTFQtg&oh=00_AYEIT2PiGQWUAcU0WyBmUI95BU_QOrQNthlwUByiRTRNIg&oe=67EA2B86")',
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}>
            </div>
            <div className=' size-full hover:scale-102 hover:brightness-90 transition-all duration-300 bg-gray-600 '
                    // style={{
                    //   backgroundImage: 'url("IMG_7810.jpg")',
                    //   backgroundPosition: "center",
                    //   backgroundSize: "cover"
                    // }}
                    >
            </div>
            <div className=' flex w-full px-[16px] pt-[28px] pb-[12px]  absolute bottom-0'>
              <span className='text-[13px] font-semibold -ml-1'>Hà Thụy Kim Thương</span>
            </div>
          </div>

          <div className='w-[112px] h-[200px] rounded-xl  flex-none overflow-hidden cursor-pointer relative'> 
            <div className='rounded-full border-blue-600 border-4 size-[40px] m-[12px] absolute top-0 z-10'
                style={{
                  backgroundImage: 'url("https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.6435-1/110062383_1118965381832945_9043834540577868627_n.jpg?stp=c28.28.805.805a_cp0_dst-jpg_s40x40_tt6&_nc_cat=104&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeFiA1Z58vVWUVeg0dqc6Vb91n3weisfjh_WffB6Kx-OH7hGrGsurfqjYHAag1s_zC19TuaHojIcUV00v-hJp7YL&_nc_ohc=37iBjDysZ1cQ7kNvgElQ1H0&_nc_oc=AdmTxh-lLHRZ84BolQ5NQu05_1WTxMEAYdczmGSI-DrKruY49jsS-U_YqihhD2rIXZ8&_nc_zt=24&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=dPY4PVwiQOnfZ7QpzTFQtg&oh=00_AYEa5_EElU5zpUkjohXAQp-VlAs9SPEm5fkZKj-L-4THPw&oe=680BB2E5")',
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}>
            </div>
            <div className=' size-full hover:scale-102 hover:brightness-90 transition-all duration-300 bg-gray-600 '
                    // style={{
                    //   backgroundImage: 'url("IMG_7810.jpg")',
                    //   backgroundPosition: "center",
                    //   backgroundSize: "cover"
                    // }}
                    >
            </div>
            <div className=' flex w-full px-[16px] pt-[28px] pb-[12px]  absolute bottom-0'>
              <span className='text-[13px] font-semibold -ml-1'>Vũ Minh Kiệt</span>
            </div>
          </div>

        </div>
    </div>
  </div>
  )
}

export default Content