import { Ellipsis, Forward, MessageCircle, Plus, ThumbsUp, X } from 'lucide-react'
import React, { useState } from 'react'

const Content = () => {

  const [imgSize, setImgSize] = useState({ width: 0, height: 0 })

  const handleImageLoad = (event) => {
    const { naturalWidth, naturalHeight } = event.target;
    setImgSize({ width: naturalWidth, height: naturalHeight })
  }

  return (

    <div className=" flex flex-col h-full  shrink-0 w-[590px] max-x-full min-w-[0] pt-4 max-w-full px-auto gap-3">
      {/* Status */}
      <div className='flex flex-col rounded-lg bg-base-100 px-[16px] pt-[12px] pb-[10px]  '>
        <div className='flex items-center justify-start gap-3 pb-[12px]  border-b border-gray-600 '> 
          <img src="IMG_7810.jpg" alt="avt" className=' size-[40px] inline-block rounded-full object-cover cursor-pointer hover:brightness-110 hover:opacity-95' />
          <button className="btn btn-soft rounded-3xl flex-1 font-[Segoe UI Historic] hover:bg-gray-700  text-gray-300 justify-start text-[17px]">
            Minh ơi, bạn đang làm gì thế?
          </button>
        </div>

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
      {/* Story */}
      <div className=' flex gap-2 overflow-hidden  '>

        <div className='w-[112px] h-[200px] rounded-xl  flex-none relative cursor-pointer'> 
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
      {/* Newsfeed */}
      <div className='flex flex-col p-3 gap-3 rounded-lg bg-base-100'>
        <div className='flex gap-2'>
          <a href="/">
            <img 
                className=' size-[40px] rounded-full '
                src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/474656380_1343515900162154_2330124336039611857_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=1&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeFv10sCsFMdSJlts9npm8jvnkgNO0dwON6eSA07R3A43mjUFnSZ96gVkO9nZitqWlvrRVkstWt0AkInB05DWnBV&_nc_ohc=ujIpOsK5qVoQ7kNvgHOkkUn&_nc_oc=AdkZO2fX_BlCPMQ4jAmyN1V7YKZPXbbtEYPbv6ETFJgSYe0l4O0jTgs9qJvsJVhQvqw&_nc_zt=24&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=QLyCfIL9VGnTqeG6wddIlQ&oh=00_AYEOORHxqMS2zdDGscZw8UDuC6p6y8R_DZCgAZwgyBWuVg&oe=67EABE82" 
                alt="avt" /> 
          </a>
          <div className='flex flex-col flex-1'>
              <div className='flex items-center gap-1'>
                <a href='/' className='hover:underline decoration-1'>Nguyễn Mạnh</a>
                <span className='flex gap-1'>
                  <span className='text-[15px] font-normal text-white '>
                    <span>&nbsp;</span>
                    <span>.</span>
                  </span>
                  <span className='hover:underline cursor-pointer text-[15px] font-semibold text-blue-500'>Theo dõi</span>
                </span>
              </div>
              <div className='flex items-center text-[13px] font-normal gap-1 text-white '>
                <a href='/' className='hover:underline cursor-pointer '> 23 tháng 3 lúc 16:37</a>
                <span>
                    <span>&nbsp;</span>
                    <span>.</span>
                </span>
                <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" title="Đã chia sẻ với Công khai" class=" text-gray-500 dark:text-gray-300">
                  <title>Đã chia sẻ với Công khai</title>
                  <g fill-rule="evenodd" transform="translate(-448 -544)">
                    <path d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434" transform="translate(354 143.5)"></path>
                    <path d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096" transform="translate(354 143.5)"></path>
                    <path fill-rule="nonzero" d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" transform="translate(354 143.5)"></path>
                  </g>
                </svg>
              </div>
          </div>
          <div className='flex items-center '>
            <div className='flex items-center justify-center cursor-pointer size-[36px] rounded-full hover:bg-gray-500'>
              <Ellipsis />
            </div>
            <div className='flex items-center justify-center cursor-pointer size-[36px] rounded-full hover:bg-gray-500'>
              <X />
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full'>
          <span className=' px-[12px] pt-[4px] pb-[16px] '>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam quidem, necessitatibus rerum quod consequatur maiores!
          </span>
          <a href="/">
            <div className=" flex items-center justify-center">
              <img
                src="avatar.png"
                alt="Ảnh"
                onLoad={handleImageLoad}
                className={`object-cover
                  ${imgSize.width < 500 || imgSize.height < 500 ? "w-[500px] h-auto" : "size-full"}
                `}
              />
            </div>
          </a>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='flex items-center justify-between border-b border-gray-600 p-2'>
            <div className='flex items-center cursor-pointer gap-2'>
              <div className='flex  '>
                <img 
                  className=' object-cover z-2'
                  src="https://scontent.fsgn5-14.fna.fbcdn.net/m1/v/t6/An-HX414PnqCVzyEq9OFFdayyrdj8c3jnyPbPcierija6hpzsUvw-1VPQ260B2M9EbxgmP7pYlNQSjYAXF782_vnvvpDLxvJQD74bwdWEJ0DhcErkDga6gazZZUYm_Q.png?_nc_eui2=AeFmVk4NN4lWfTkKE2gnIxMdDoczsRRn4rsOhzOxFGfiu5tCANTSta_e6LAw_hNDqHRgFH1Ibk7zPVX5uIs2C5Nb&_nc_oc=Adn0sxc3G9a9fLsOnTtc2wZwQ2PJU4zd0xY6XOYnvp7m9FtQb8lbNiN4A14o0CyncMk&ccb=10-5&oh=00_AYFeH2pGpOl7uJqbEfZBk8ZiqsqH_gou7qq9E-k1olZv9w&oe=680C7CA3&_nc_sid=7da55a" 
                  alt="like" />
                <img 
                  className=' object-cover -ml-1 z-1'
                  src="https://scontent.fsgn5-14.fna.fbcdn.net/m1/v/t6/An8VnwvdkGMXIQcr4C62IqyP-g1O5--yQu9PnL-k4yvIbj8yTSE32ea4ORp0OwFNGEWJbb86MHBaLY-SMvUKdUYJnNFcexEoUGoVzcVd50SaAIzBE-K5dxR8Y-MJn5E.png?_nc_eui2=AeHJjg4M9VFsNiUhXox976CZd1XkKQegtq93VeQpB6C2r1_WjlomGN5BLldW_p2y9koCbnXKP7fwIehLkSoLo8Yg&_nc_oc=AdmWSb5A1y-EAWyX-qGkyM5n1FKDIDvSyHt4U3nwmj1Vmc2pcFAlJd3OOLq3oIlH9H0&ccb=10-5&oh=00_AYGYruVPTAEadnw5YvRV8ipqDjX7mq_k00KYV_FyCz6IdQ&oe=680C804C&_nc_sid=7da55a" 
                  alt="tym" />
              </div>

              <span className=' hover:underline text-[15px] font-normal'>24</span>
            </div>
            <div className='flex gap-2 cursor-pointer text-[15px] font-normal'>
                  <span className=' hover:underline'>40 bình luận</span>
                  <span className=' hover:underline'>70 chia sẻ</span>
            </div>

          </div>
          <div className='flex bg-transparent'>
            <button className="btn btn-ghost hover:bg-gray-700 flex-1 px-[12px]">
              <ThumbsUp />
              Like
            </button>
            <button className="btn btn-ghost hover:bg-gray-700 flex-1 px-[12px]">
              <MessageCircle />
              Like
            </button>
            <button className="btn btn-ghost hover:bg-gray-700 flex-1 px-[12px]">
              <Forward />
              Like
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Content