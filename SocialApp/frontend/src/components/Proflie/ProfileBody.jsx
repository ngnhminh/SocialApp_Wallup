import React, { useState,useRef} from 'react'
import { AlignJustify, ChevronDown, Forward, MessageCircle, Send, Settings, SlidersHorizontal, X } from 'lucide-react'
import { Ellipsis } from 'lucide-react';
import toast from "react-hot-toast";

const ProfileBody = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [text, setText] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null);
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (!file.type.startsWith("image/")) {
        toast.error("Please select an image file");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    };
  
    const removeImage = () => {
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    };
  


  return (
    <div className='block box-border px-[16px] mt-[16px] max-w-full w-[1063px]'>

        <div className='flex items-stretch justify-center flex-wrap -m-[8px] relative'>
            
            <div className='block basis-[360px] box-border m-[8px] max-w-[680px] min-x-0 grow-18 relative '>

                <div className='block bg-base-100 rounded-xl'>
                    <div className='block mb-[16px]'>
                        <div className='block overflow-hidden w-[424.888px] relative'>

                            <div className='flex flex-col max-w-full pb-[4px] pt-[20px] box-border relative '>
                                <div className='flex flex-col grow-1 min-h-0 relative'>
                                    <div className='flex flex-col max-w-full px-[16px] box-border relative'>
                                        <div className='flex flex-col -my-[6px]'>
                                            <div className='block my-[6px]'>
                                                <span className='block text-[20px] font-bold leading-6 max-w-full min-w-0 break-words'>Giới thiệu</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='block mb-[20px] relative'>
                                <div className='flex items-stretch justify-between -m-[6px] px-[16px] pt-[16px] '>
                                    <div className='flex flex-col grow-1 p-[6px] max-w-full'>
                                        <div className='flex flex-col justify-center'>
                                            <div className='flex justify-center px-[12px] h-[36px]'>
                                                <button className='btn btn-soft hover:bg-gray-700 rounded-lg -mx-[3px] w-[374.888px]'>
                                                    <span className='text-[15px] font-semibold leading-[20px] break-words'>Thêm tiểu sử</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-stretch justify-between -m-[6px] px-[16px] pt-[16px] '>
                                    <div className='flex flex-col grow-1 max-w-full min-w-0 p-[6px] box-border'>
                                        <ul className='block'>
                                            <div className='flex items-stretch justify-start -m-[6px] box-border'>
                                                <div className='flex flex-col p-[6px]'>
                                                    <img height="20" width="20" className='grayscale opacity-50'
                                                        src="https://static.xx.fbcdn.net/rsrc.php/v4/yS/r/jV4o8nAgIEh.png?_nc_eui2=AeG_vJ1UZtE4n9fjF0E3SKj1oQ2CZRkSj5OhDYJlGRKPkw3HaovaR4yLrnyBFnqieGe8SPt1q8XKDbLTm-AwmFKT"/>
                                                </div>
                                                <div className='flex flex-col grow-1 p-[6px] box-border '>
                                                    <div className='flex flex-col -my-[5px] '>
                                                        <div className='block my-[5px]'>
                                                            <span className='block break-words text-start max-w-full min-w-0'>
                                                                Đã học tại &nbsp;
                                                                <a href="#" className='inline text-[15px] hover:underline font-semibold text-start break-words'>
                                                                    Ngô Quyền High School
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex items-stretch justify-start -m-[6px] box-border'>
                                                <div className='flex flex-col p-[6px]'>
                                                <img className='grayscale opacity-50' alt="" height="20" width="20" 
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v4/yj/r/LPnnw6HJjJT.png?_nc_eui2=AeHHDwjZNtT1Og2nptlnppCg1cVeDE3fb8_VxV4MTd9vzyQEAZ0XYxWtQrDE3iG_NfvQajcWXXMrwS8Kw9yKoiQl"/>
                                                </div>
                                                <div className='flex flex-col grow-1 p-[6px] box-border '>
                                                    <div className='flex flex-col -my-[5px] '>
                                                        <div className='block my-[5px]'>
                                                            <span className='block break-words text-start max-w-full min-w-0'>
                                                                <a  href="#" 
                                                                    className='inline text-[15px] font-semibold text-start break-words
                                                                                text-blue-500 hover:underline '>
                                                                minhhigh_
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                        <div className='block mt-[12px]'>
                                            <div className=' inline-flex justify-center w-[392.888px]'>
                                                <button className='btn btn-soft rounded-lg hover:bg-gray-700 px-[12px] h-[36px] w-[374.888px]'>
                                                    <span className='block text-[15px] font-semibold break-words '>Chỉnh sửa chi tiết</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-stretch justify-between -m-[6px] px-[16px] pt-[16px] relative '>
                                    <div className='flex flex-col grow-1 p-[6px] box-border max-w-full relative'>
                                        <div className='block -mt-[16px] relative'>

                                            <div className='block w-[392.888px] -mb-[50px] -mt-[10px] pb-[50px] pt-[10px] overflow-hidden '>

                                                <div className='flex -mb-[20px] pb-[32px] pt-[8px] box-border w-[480.888px] overflow-auto scroll-p-[48px]'>
                                                    <div className='flex items-stretch mx-[4px] box-border w-[122.95px] '>
                                                        <div className='flex flex-col grow-1 basis-full max-w-full min-h-0'>
                                                            <div className='flex flex-col shrink-0 relative'>
                                                                <a href="#" className=''>
                                                                    <div className='block h-0 w-[122.95px] pt-[218.575px] overflow-hidden realtive'>
                                                                        <div className='block absolute top-0 bottom-0 overflow-hidden right-0 left-0 rounded-lg'>
                                                                            <img height="100%" width="122.95px"
                                                                                className='hover:scale-102 hover:brightness-95 transition-all duration-100' 
                                                                                src="https://scontent.fsgn15-1.fna.fbcdn.net/v/t15.5256-10/367397914_1293532851523875_3256040401168136726_n.jpg?stp=dst-jpg_p296x100_tt6&amp;_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=c3bc4c&amp;_nc_eui2=AeFsM8qdmbthl0KVsZaHOM9TgoSS3q5jMNiChJLermMw2MXI9xFfsKLLswZqTpK4-358EvPbGvDZ8PHuA9mflET5&amp;_nc_ohc=kqa9vl0zkUgQ7kNvgGQrceq&amp;_nc_oc=Adn5X-BvKtUqfq3Gn_E8Y9LDqqh0ES0nU6V10cTlbMEGHcoM-aRiARawJrv5efxmmiSNe86gQfB8nVs3pRSWTesC&amp;_nc_zt=23&amp;_nc_ht=scontent.fsgn15-1.fna&amp;_nc_gid=l-9Eun8S-WMwqoxCkrXFHA&amp;oh=00_AYFCf33Gk0J9EWasoc3kAnc9B_O0WCL1C2TmlPOW0EAZKQ&amp;oe=67EED244"/>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className='flex flex-col items-center pt-[8px] box-border'>
                                                                <span className='block text-[13px] font-semibold text-center break-words pb-[1px]'>
                                                                📷
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='block bg-base-100 rounded-xl'>
                    <div className='block mb-[16px]'>
                        <div className='block w-[424.888px] overflow-hidden relative'>
                            <div className='flex flex-col pb-[4px] pt-[20px] max-w-full shrink-0 relative '>
                                <div className='flex flex-col grow-1'>
                                    <div className='flex flex-col px-[16px] box-border'>
                                        <div className='flex flex-col -my-[6px]'>
                                            <div className='block my-[6px]'>
                                                <span className='block text-[20px] font-bold leading-[24px] max-w-full min-w-0 break-words'>
                                                    <div className='flex items-center justify-between '>
                                                        <div className='flex flex-col grow-1 relative'>
                                                            <a href="#" className=' hover:underline'>Ảnh</a>
                                                        </div>
                                                        <div className='flex flex-col self-start justify-center ml-[8px]'>
                                                            <button className='btn btn-ghost text-[15px] hover:bg-gray-700 rounded-md'>
                                                                <span className='text-blue-500'>Xem tất cả ảnh</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='block mb-[20px]'>
                                <div className='flex items-stretch justify-between -m-[6px] px-[16px] pt-[16px] box-border relative '>
                                    <div className='flex flex-col grow-1 max-w-full min-w-0 p-[6px] box-border relative'>
                                        <div className='grid grid-cols-3 grid-rows-3 -mx-[4px] rounded-xl overflow-hidden '>

                                            <div className='flex w-[132.288px] mb-[4px] '>
                                                <div className='block mr-[4px] overflow-hidden relative '>
                                                    <a href="#" className='block pb-[128.288px] w-[128.288px] relative '>
                                                        <div className='block absolute top-0 bottom-0 right-0 left-0 '>
                                                            <img 
                                                                className=' size-[128.288px] '
                                                                src="https://scontent.fsgn15-1.fna.fbcdn.net/v/t1.6435-9/50940765_516389622217763_4834656337906368512_n.jpg?stp=c120.0.593.593a_dst-jpg_s160x160_tt6&_nc_cat=101&ccb=1-7&_nc_sid=30a509&_nc_eui2=AeFeB6-i9SnzsoX894y-vLMxHOgHkTnhd-8c6AeROeF376phuhlBdBPwGI7ewSWJB6_2bcH8VF8n-1Cp3nrNs7e5&_nc_ohc=5YCwkZoaDh4Q7kNvgFBfs90&_nc_oc=Adm1mqt8OFgtDaxnnBV53hzJ2QwRQHF9kx0rE6ImxFStAj6u1LzHFfWetlzjMAGX1vOOsh8wq1IFEjfkRdkwPb9f&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=l-9Eun8S-WMwqoxCkrXFHA&oh=00_AYF7JogZPsEj8bM3EedULT-y4bZVCqQ2JDLEmLk8xqU8aA&oe=68106608" 
                                                                alt="" />
                                                            <div class="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='flex w-[132.288px] mb-[4px] '>
                                                <div className='block mr-[4px] overflow-hidden relative '>
                                                    <a href="#" className='block pb-[128.288px] w-[128.288px] relative '>
                                                        <div className='block absolute top-0 bottom-0 right-0 left-0 '>
                                                            <img 
                                                                className=' size-[128.288px] '
                                                                src='https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/481999435_2004658313390879_230456344688563553_n.jpg?stp=c0.7.799.799a_dst-jpg_s160x160_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e09983&_nc_eui2=AeEDNR-WQwRPbg7v5DRFtKsb6Snk7VPf1m3pKeTtU9_WbaU5VbxEle0ZtmVr4fGf2yXlGV0q7cEINawLeVDa-l1H&_nc_ohc=DKwGnJXIbaAQ7kNvgHZW7aG&_nc_oc=AdkJPA4HaCzjhQDkCVEUZdyxBT9Y6numuWRbwG8Ist1jy0ibgX1dBYz2QhmQgutahg5nFpQ7a_Xe2VnoD4lAHgUu&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=l-9Eun8S-WMwqoxCkrXFHA&oh=00_AYEQHz1sCbUXhbG-jrIvkcQDrPBakqD9_ouhv36JOqQiMg&oe=67EEA618'
                                                                alt="" />
                                                            <div class="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='flex w-[132.288px] mb-[4px] '>
                                                <div className='block mr-[4px] overflow-hidden relative '>
                                                    <a href="#" className='block pb-[128.288px] w-[128.288px] relative '>
                                                        <div className='block absolute top-0 bottom-0 right-0 left-0 '>
                                                            <img 
                                                                className=' size-[128.288px]'
                                                                src='https://scontent.fsgn15-1.fna.fbcdn.net/v/t1.6435-9/146495685_1047208909135829_7410021469237496848_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e09983&_nc_eui2=AeGx7uDAa9dyUNRsC4CBn9aggNu3N5LfQ-yA27c3kt9D7Ia4u7mY3UQgJZBDOk-FqW-sQJjjXOXVqAqVmvG65IPW&_nc_ohc=Rt12QV9ItEEQ7kNvgFX7N8V&_nc_oc=Adkkid2dOooiSFR-Lr-IR9auBoeCq-VaYDPHIa9SU9W-w76dkTAFidGO-X7mADy2RfWqkJAukgUq-n8At9r6ErGf&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=l-9Eun8S-WMwqoxCkrXFHA&oh=00_AYEaGwRwk-EASfy0CgMWJfNJ3OlFtL5QzDSXy98Msxtygw&oe=681066A4'
                                                                alt="" />
                                                            <div class="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='flex w-[132.288px] mb-[4px] '>
                                                <div className='block mr-[4px] overflow-hidden relative '>
                                                    <a href="#" className='block pb-[128.288px] w-[128.288px] relative '>
                                                        <div className='block absolute top-0 bottom-0 right-0 left-0 '>
                                                            <img 
                                                                className=' size-[128.288px] '
                                                                src='https://scontent.fsgn15-1.fna.fbcdn.net/v/t1.6435-9/78690566_714795872377136_5748965088933445632_n.jpg?stp=c0.169.1536.1536a_dst-jpg_s160x160_tt6&_nc_cat=111&ccb=1-7&_nc_sid=30a509&_nc_eui2=AeHLOJA-u91qfFfHYN-9ccaWFTCj1H5axwwVMKPUflrHDNUwjg2r3_fpizhppAUHw_gF_c9FCyo2J6wP40P-OtUE&_nc_ohc=mk4igrY-VvsQ7kNvgHy9OBP&_nc_oc=AdknD7vwD10q13XHTC_JoQYiDeA_on9kaKOCCI1SdzQas5dTAiomwEUKZxi6cLBNxseWmqYnRxZEFXLAAS6MMErH&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=l-9Eun8S-WMwqoxCkrXFHA&oh=00_AYFVctcdgwxWbFO_eZS3NyGAkhB7wKnc6ZcECLotZqK9oQ&oe=68104CF6'
                                                                alt="" />
                                                            <div class="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='flex w-[132.288px] mb-[4px] '>
                                                <div className='block mr-[4px] overflow-hidden relative '>
                                                    <a href="#" className='block pb-[128.288px] w-[128.288px] relative '>
                                                        <div className='block absolute top-0 bottom-0 right-0 left-0 '>
                                                            <img 
                                                                className=' size-[128.288px] '
                                                                src='https://scontent.fsgn15-1.fna.fbcdn.net/v/t1.6435-9/59522991_568004970389561_2868521009600790528_n.jpg?stp=c180.0.720.720a_dst-jpg_s160x160_tt6&_nc_cat=100&ccb=1-7&_nc_sid=30a509&_nc_eui2=AeE4tYajksZMYxroxOa7s1mNs66WmfM_24OzrpaZ8z_bg8LRWJdDN0YaUI-xgaNXhX7h8fDRtkKcg4Ze-hLFo1Zn&_nc_ohc=14DT5IGKkD0Q7kNvgFjx7ji&_nc_oc=AdlhL4Xf9A4QoVdyRqJEKrPia32VW8M__H10FSqB-pIA0hjXldsItX7gmm5E80rlqUyDrvv6KyOWcQyVCAmESX2Q&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=l-9Eun8S-WMwqoxCkrXFHA&oh=00_AYH9Rdxdn_J4EqBibi-rMGa7Yi8dsoJqriCZ9XUWrvO6Gw&oe=6810646B'
                                                                alt="" />
                                                            <div class="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='flex w-[132.288px] mb-[4px] '>
                                                <div className='block mr-[4px] overflow-hidden relative '>
                                                    <a href="#" className='block pb-[128.288px] w-[128.288px] relative '>
                                                        <div className='block absolute top-0 bottom-0 right-0 left-0 '>
                                                            <img 
                                                                className=' size-[128.288px] '
                                                                src='https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/484817002_2012197379303639_5958930977464826073_n.jpg?stp=c0.148.1599.1599a_dst-jpg_s160x160_tt6&_nc_cat=100&ccb=1-7&_nc_sid=8a6525&_nc_eui2=AeG_gLVSVFv-CgNTarIlXKHC2zpzOxhPIKDbOnM7GE8goALtn-KeStUVXzOukK8meUhKqQTJO1kX9LjQIraNDXot&_nc_ohc=BAMoZBzmWFsQ7kNvgG-QQsf&_nc_oc=AdlXg1x4vNTN30baZENd6hDbn9_AiCxc80u-shkhnS9jgEKvVeE7cWzGU4Gve-zry8zQqZDUDe0iCdb4uB0VYFhx&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=l-9Eun8S-WMwqoxCkrXFHA&oh=00_AYEIbVwhUZSv9h8S7dI3HYFN3OzQABQ61frFxQQWK4Wgvw&oe=67EEC556'
                                                                alt="" />
                                                            <div class="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='flex w-[132.288px] mb-[4px] '>
                                                <div className='block mr-[4px] overflow-hidden relative '>
                                                    <a href="#" className='block pb-[128.288px] w-[128.288px] relative '>
                                                        <div className='block absolute top-0 bottom-0 right-0 left-0 '>
                                                            <img 
                                                                className=' size-[128.288px] '
                                                                src='https://scontent.fsgn15-1.fna.fbcdn.net/v/t1.6435-9/83016924_757932608063462_2037199835710357504_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=103&ccb=1-7&_nc_sid=8a6525&_nc_eui2=AeGdHdMNhbfyZ1MTgYcj6SoQNiGo7hHykz02IajuEfKTPYTDaohCX5ephUddKKYHnidT9N4spSf1R7IK9C1C2qQs&_nc_ohc=k0t5SQatSagQ7kNvgEdANGq&_nc_oc=AdnxsNeF0oiycjfLJoIeTi9Ch87Aiq5gsYuqfLPpJMekHtuNtMAne6gdaLsHaCXuWWqr1KCNlGOzCeBXFw1UsShh&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=l-9Eun8S-WMwqoxCkrXFHA&oh=00_AYHzMj_BGn-s1ss_AT33l_yAJcv3_KvUGWYmJHb5OwXYcg&oe=6810515A'
                                                                alt="" />
                                                            <div class="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='flex w-[132.288px] mb-[4px] '>
                                                <div className='block mr-[4px] overflow-hidden relative '>
                                                    <a href="#" className='block pb-[128.288px] w-[128.288px] relative '>
                                                        <div className='block absolute top-0 bottom-0 right-0 left-0 '>
                                                            <img 
                                                                className=' size-[128.288px] '
                                                                src='https://scontent.fsgn15-1.fna.fbcdn.net/v/t1.6435-9/77414077_727044704485586_5924395892881752064_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=100&ccb=1-7&_nc_sid=8a6525&_nc_eui2=AeGqZ7KTdr33IcqZV8U-NbgXyAXOEic2q-fIBc4SJzar5-pK24GUiuoeX6kB_zWUAGTivZfGh8CRFUGmOhxkHrSr&_nc_ohc=G4kVZ_D_TFEQ7kNvgGVDnsg&_nc_oc=AdnkThlnXFv4X0s0potBOfqQjhOh1ZjBZL92A1CDPverfO3ec-BrguuXhrdG6ufO45RgGUX7H1Mhnmxsb_wmi6E6&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=l-9Eun8S-WMwqoxCkrXFHA&oh=00_AYEXM6BF_eDDX5f01QXAiL9qBpFv1Cf9FmRJvf7QSOSuOA&oe=68106902'
                                                                alt="" />
                                                            <div class="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='flex w-[132.288px] mb-[4px] '>
                                                <div className='block mr-[4px] overflow-hidden relative '>
                                                    <a href="#" className='block pb-[128.288px] w-[128.288px] relative '>
                                                        <div className='block absolute top-0 bottom-0 right-0 left-0 '>
                                                            <img 
                                                                className=' size-[128.288px] '
                                                                src='https://scontent.fsgn15-1.fna.fbcdn.net/v/t1.6435-9/76688956_714904165699640_7347475844043898880_n.jpg?stp=c0.169.1536.1536a_dst-jpg_s160x160_tt6&_nc_cat=107&ccb=1-7&_nc_sid=8a6525&_nc_eui2=AeExdpWyhrlHgfG9NQ05oHAVi_75io4AjYWL_vmKjgCNhZt5hiuBiHDzVU7WYZOKfvXl0oBkvQ4p3GTXLl9zaaZt&_nc_ohc=yv2vil7M02AQ7kNvgEcQzUY&_nc_oc=AdnftBymHeTdJ2EHnK9n4W3S5T8BH1w8VREi81Zu6iP9ILIXxclZvgDh3xT8D69R9vLolGPZ8F5dxpFHfJ6_yl0w&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=l-9Eun8S-WMwqoxCkrXFHA&oh=00_AYHCxB3rfz14wq0zZ92fm2AcNOQbiWI8j5ieselqFXFpCA&oe=68106741'
                                                                alt="" />
                                                            <div class="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='block bg-base-100 rounded-xl'>
                    <div className='block mb-[16px]'>
                        <div className='block w-[424.888px] overflow-hidden relative'>
                            <div className='flex flex-col pb-[4px] pt-[20px] max-w-full shrink-0 relative '>
                                <div className='flex flex-col grow-1'>
                                    <div className='flex flex-col px-[16px] box-border'>
                                        <div className='flex flex-col -my-[6px]'>
                                            <div className='block my-[6px]'>
                                                <span className='block max-w-full min-w-0 break-words'>
                                                    <div className='flex items-end justify-between '>
                                                        <div className='flex flex-col grow-1 relative'>
                                                            <a href="#" className=' hover:underline text-[20px] font-bold leading-[24px]'>Bạn bè</a>
                                                            <span className=' text-md font-normal'>215 người bạn</span>
                                                        </div>
                                                        <div className='flex flex-col self-start justify-center ml-[8px]'>
                                                            <button className='btn btn-ghost text-[15px] hover:bg-gray-700 rounded-md'>
                                                                <span className='text-blue-500'>Xem tất bạn bè</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='block mb-[20px]'>
                                <div className='flex items-stretch justify-between -m-[6px] px-[16px] pt-[16px] box-border relative '>
                                    <div className='flex flex-col grow-1 max-w-full min-w-0 p-[6px] box-border relative'>
                                        <div className='grid grid-cols-3 grid-rows-3 -mx-[4px] rounded-xl overflow-hidden '>

                                            <div className='flex flex-col mb-[12px] '>
                                                <div className='block mr-[4px] overflow-hidden relative '>
                                                    <a href="#" className='block pb-[123.625px] w-[123.625px] relative '>
                                                        <div className='block absolute top-0 bottom-0 right-0 left-0 '>
                                                            <img 
                                                                className=' size-[123.625px] rounded-[8px] '
                                                                src='https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-1/455271103_3513577235602346_4871043218038029112_n.jpg?stp=dst-jpg_s148x148_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7da99a&_nc_eui2=AeHHzt0utlM6wwMgoWfdXt8XUD-hNT6vIlVQP6E1Pq8iVVCoVY-b1ehyMWtryQWxzoQPLBb2OS5oGx1vLvkr4v08&_nc_ohc=_gS-kK2rciEQ7kNvgGZADq9&_nc_oc=Adl7tjy67DASPX_hdgUBIFbs33lMTo7400zf2p01LNHwxLyb7baOIGocKK2n7t8IRjFZKdNdTsw8UJrx6msbBeQL&_nc_zt=24&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=8b4tCRAELuhFVgge3i46qQ&oh=00_AYFWGY8FHYgd2O9IYzq1yWkHrwLy-HfM2-IObpTvYELTBg&oe=67EEAB74'
                                                                alt="" />
                                                            <div class="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='flex flex-col mt-[8px] min-h-[30px]'>
                                                    <span className='block'>
                                                        <a href="#" className='inline'>
                                                            <span className=' font-semibold text-[13px] break-words max-w-full min-w-0 block'>
                                                                Đỗ Nguyễn Mĩ An
                                                            </span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className='flex flex-col mb-[12px] '>
                                                <div className='block mr-[4px] overflow-hidden relative '>
                                                    <a href="#" className='block pb-[123.625px] w-[123.625px] relative '>
                                                        <div className='block absolute top-0 bottom-0 right-0 left-0 '>
                                                            <img 
                                                                className=' size-[123.625px] rounded-[8px] '
                                                                src='https://scontent.fsgn15-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s148x148&_nc_cat=1&ccb=1-7&_nc_sid=40e2b2&_nc_eui2=AeEffgjlu03qAV4sxym_bzwEWt9TLzuBU1Ba31MvO4FTUIVyRbTNstwLQb1l4vh3HEYfDtm4OVa7WXXgzdM_meD1&_nc_ohc=a1K6_KaoqeEQ7kNvgFKZdZk&_nc_oc=AdleCTMBOUinvmPi2NIpYQdWV3vIsmQBHVKywvNDVxL4l4PCy8gNNCPogrXkZAvbVAmnvRkcOs4TcvnxTPmf-qEi&_nc_zt=24&_nc_ht=scontent.fsgn15-1.fna&oh=00_AYE3gZJnkaWmKQkph6iV3ss1Z_glGoe8GyNj7vXefT5mLg&oe=68105B7A'
                                                                alt="" />
                                                            <div class="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='flex flex-col mt-[8px] min-h-[30px]'>
                                                    <span className='block'>
                                                        <a href="#" className='inline'>
                                                            <span className=' font-semibold text-[13px] break-words max-w-full min-w-0 block'>
                                                                Dao Anh Thuy Vy
                                                            </span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='flex flex-col mb-[12px] '>
                                                <div className='block mr-[4px] overflow-hidden relative '>
                                                    <a href="#" className='block pb-[123.625px] w-[123.625px] relative '>
                                                        <div className='block absolute top-0 bottom-0 right-0 left-0 '>
                                                            <img 
                                                                className=' size-[123.625px] rounded-[8px] '
                                                                src='https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-1/244483283_996339491234239_1306338252208253747_n.jpg?stp=c315.0.810.810a_dst-jpg_s148x148_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7da99a&_nc_eui2=AeGEH1jQDgsanYURgicCxrDSRqInHjThKIdGoiceNOEoh97H7FOEMw6f_qJkYtimJWM-buskIQNu4gnMxpCaOcgM&_nc_ohc=HzTIclSmO70Q7kNvgH9ODUr&_nc_oc=AdkSMTcmY4_HkhBSRz9BmeZhCRoyvSxu3-4M92zAEubwHAKuxgX8MLhzc5RkjvwGWvdkk7POx8ukqDzrK88h8neF&_nc_zt=24&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=8b4tCRAELuhFVgge3i46qQ&oh=00_AYHg_nzDjAkw203pEmMWRNmGf3ALYV7mQBRkl7oAilbhnw&oe=67EEC059'
                                                                alt="" />
                                                            <div class="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='flex flex-col mt-[8px] min-h-[30px]'>
                                                    <span className='block'>
                                                        <a href="#" className='inline'>
                                                            <span className=' font-semibold text-[13px] break-words max-w-full min-w-0 block'>
                                                                Thành Huy
                                                            </span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='flex flex-col mb-[12px] '>
                                                <div className='block mr-[4px] overflow-hidden relative '>
                                                    <a href="#" className='block pb-[123.625px] w-[123.625px] relative '>
                                                        <div className='block absolute top-0 bottom-0 right-0 left-0 '>
                                                            <img 
                                                                className=' size-[123.625px] rounded-[8px] '
                                                                src='https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-1/486706579_1422271382471503_2467449358876807489_n.jpg?stp=dst-jpg_s148x148_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7da99a&_nc_eui2=AeGXSoqTnyAth5zkyMQrWSTtqTePTVpueqCpN49NWm56oMfN5Gzzazt-7rl2AXMKLW73cg8qv7KWpEN13gW1C9K5&_nc_ohc=OiuwXvHctd4Q7kNvgGrnegc&_nc_oc=AdmaQ7J9iT3aKXcueS4eB6izWc6SIV5ykl0V8NxyAartYVwoaMFdhIbRXZjHcDmWCE3KzRH-bqFlqS-JX3wP3KpY&_nc_zt=24&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=8b4tCRAELuhFVgge3i46qQ&oh=00_AYHdXgFN27TAsroUfpqTATKHm1cRPp5WO7Qqndchszbv3Q&oe=67EED846'
                                                                alt="" />
                                                            <div class="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='flex flex-col mt-[8px] min-h-[30px]'>
                                                    <span className='block'>
                                                        <a href="#" className='inline'>
                                                            <span className=' font-semibold text-[13px] break-words max-w-full min-w-0 block'>
                                                                Nguyễn Khả Á Trân
                                                            </span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='flex flex-col mb-[12px] '>
                                                <div className='block mr-[4px] overflow-hidden relative '>
                                                    <a href="#" className='block pb-[123.625px] w-[123.625px] relative '>
                                                        <div className='block absolute top-0 bottom-0 right-0 left-0 '>
                                                            <img 
                                                                className=' size-[123.625px] rounded-[8px] '
                                                                src='https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-1/480660673_1149166623376778_5058836761850690721_n.jpg?stp=cp6_dst-jpg_s148x148_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7da99a&_nc_eui2=AeE0USQYODF06lO3bVSkwLbynWE9l0pYr9-dYT2XSliv34sFmU_XPTBCqRvcu5zvU6wwA6lw7tHS6425_h3KPp_W&_nc_ohc=QnvODUKRHekQ7kNvgFG8rx9&_nc_oc=AdnAUJbMuBlAgoR1luZ_-ET6RePxYvMAlu9YalXuv3xWANMLyxPmXY8DZzN7d1Ax0UmLklDtsHm6rLfkIXvX-3c4&_nc_zt=24&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=8b4tCRAELuhFVgge3i46qQ&oh=00_AYGO36-nn-xkQnQ-PEKjZpRt32Gya118oV3vR8hng9cnjQ&oe=67EEB8D7'
                                                                alt="" />
                                                            <div class="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='flex flex-col mt-[8px] min-h-[30px]'>
                                                    <span className='block'>
                                                        <a href="#" className='inline'>
                                                            <span className=' font-semibold text-[13px] break-words max-w-full min-w-0 block'>
                                                                Kim Hằng
                                                            </span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='flex flex-col mb-[12px] '>
                                                <div className='block mr-[4px] overflow-hidden relative '>
                                                    <a href="#" className='block pb-[123.625px] w-[123.625px] relative '>
                                                        <div className='block absolute top-0 bottom-0 right-0 left-0 '>
                                                            <img 
                                                                className=' size-[123.625px] rounded-[8px] '
                                                                src='https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-1/474929930_3788635194688170_5354318133636303769_n.jpg?stp=cp6_dst-jpg_s148x148_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7da99a&_nc_eui2=AeFtbLlOeyy-7-j8Js2m0DSmNxSzAVjPwSg3FLMBWM_BKPVoFMY32WbA10PjaYTJDfSeYk5_WRjOgXXEaU6OYYQs&_nc_ohc=5mZm24WEsr4Q7kNvgFocTHv&_nc_oc=AdlBQkaEZqABCJRySSwLV0QO6q4um9Deeoogrz057uo1OntpowtVNjoVrwCFRJgoks0dhcU8phttCI5oqqLXVxKH&_nc_zt=24&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=8b4tCRAELuhFVgge3i46qQ&oh=00_AYETvOxBHTalLX5p6FoT4Hxx7SugaZsMs9hBFTkIJo4b2g&oe=67EEB3F5'
                                                                alt="" />
                                                            <div class="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='flex flex-col mt-[8px] min-h-[30px]'>
                                                    <span className='block'>
                                                        <a href="#" className='inline'>
                                                            <span className=' font-semibold text-[13px] break-words max-w-full min-w-0 block'>
                                                                Cẩm Minh
                                                            </span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='flex flex-col mb-[12px] '>
                                                <div className='block mr-[4px] overflow-hidden relative '>
                                                    <a href="#" className='block pb-[123.625px] w-[123.625px] relative '>
                                                        <div className='block absolute top-0 bottom-0 right-0 left-0 '>
                                                            <img 
                                                                className=' size-[123.625px] rounded-[8px] '
                                                                src='https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-1/472234220_2777097542452391_5285029639606210469_n.jpg?stp=dst-jpg_s148x148_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7da99a&_nc_eui2=AeGLzKFTk1PkQBtznzmOysPjpLIYPkFg1gekshg-QWDWB24YVm3AFx0z95FQCuinaoiCr2SNZwARcPbnapQunqpQ&_nc_ohc=FEZtKCglgYUQ7kNvgFSXpTA&_nc_oc=AdkY6a6JArjfwgK7kXz6BVQgpvehd_HrUcSTxL5sFaSSn7PbysyHINtYy5e1KbCGuVmqmA-iK6Z6fCGdtjZVURsI&_nc_zt=24&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=8b4tCRAELuhFVgge3i46qQ&oh=00_AYGzlTwyKjWVFtbP1fx-qQvWuI-nEUCLDpokmaTYRuW-9A&oe=67EED485'
                                                                alt="" />
                                                            <div class="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='flex flex-col mt-[8px] min-h-[30px]'>
                                                    <span className='block'>
                                                        <a href="#" className='inline'>
                                                            <span className=' font-semibold text-[13px] break-words max-w-full min-w-0 block'>
                                                                Lê Tứ
                                                            </span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='flex flex-col mb-[12px] '>
                                                <div className='block mr-[4px] overflow-hidden relative '>
                                                    <a href="#" className='block pb-[123.625px] w-[123.625px] relative '>
                                                        <div className='block absolute top-0 bottom-0 right-0 left-0 '>
                                                            <img 
                                                                className=' size-[123.625px] rounded-[8px] '
                                                                src='https://scontent.fsgn15-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s148x148&_nc_cat=1&ccb=1-7&_nc_sid=40e2b2&_nc_eui2=AeEffgjlu03qAV4sxym_bzwEWt9TLzuBU1Ba31MvO4FTUIVyRbTNstwLQb1l4vh3HEYfDtm4OVa7WXXgzdM_meD1&_nc_ohc=a1K6_KaoqeEQ7kNvgFKZdZk&_nc_oc=AdleCTMBOUinvmPi2NIpYQdWV3vIsmQBHVKywvNDVxL4l4PCy8gNNCPogrXkZAvbVAmnvRkcOs4TcvnxTPmf-qEi&_nc_zt=24&_nc_ht=scontent.fsgn15-1.fna&oh=00_AYE3gZJnkaWmKQkph6iV3ss1Z_glGoe8GyNj7vXefT5mLg&oe=68105B7A'
                                                                alt="" />
                                                            <div class="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='flex flex-col mt-[8px] min-h-[30px]'>
                                                    <span className='block'>
                                                        <a href="#" className='inline'>
                                                            <span className=' font-semibold text-[13px] break-words max-w-full min-w-0 block'>
                                                                Shiro
                                                            </span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='flex flex-col mb-[12px] '>
                                                <div className='block mr-[4px] overflow-hidden relative '>
                                                    <a href="#" className='block pb-[123.625px] w-[123.625px] relative '>
                                                        <div className='block absolute top-0 bottom-0 right-0 left-0 '>
                                                            <img 
                                                                className=' size-[123.625px] rounded-[8px] '
                                                                                src='https://scontent.fsgn15-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s148x148&_nc_cat=1&ccb=1-7&_nc_sid=40e2b2&_nc_eui2=AeEffgjlu03qAV4sxym_bzwEWt9TLzuBU1Ba31MvO4FTUIVyRbTNstwLQb1l4vh3HEYfDtm4OVa7WXXgzdM_meD1&_nc_ohc=a1K6_KaoqeEQ7kNvgFKZdZk&_nc_oc=AdleCTMBOUinvmPi2NIpYQdWV3vIsmQBHVKywvNDVxL4l4PCy8gNNCPogrXkZAvbVAmnvRkcOs4TcvnxTPmf-qEi&_nc_zt=24&_nc_ht=scontent.fsgn15-1.fna&oh=00_AYE3gZJnkaWmKQkph6iV3ss1Z_glGoe8GyNj7vXefT5mLg&oe=68105B7A'
                                                                alt="" />
                                                            <div class="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='flex flex-col mt-[8px] min-h-[30px]'>
                                                    <span className='block'>
                                                        <a href="#" className='inline'>
                                                            <span className=' font-semibold text-[13px] break-words max-w-full min-w-0 block'>
                                                                Vũ Ngọc
                                                            </span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>

                            

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer aria-label='Facebook' className='block'>
                    <span className='block text-[13px] font-semibold break-words max-w-full min-w-0'>
                        <ul className='inline space-x-0.5'>
                            <li className='inline'>
                                <a href="#">Quyền riêng tư</a>
                                <span>.</span>
                            </li>
                            <li className='inline'>
                                <a href="#">Điều khoản</a>
                                <span>.</span>
                            </li>
                            <li className='inline'>
                                <a href="#">Quảng Cáo</a>
                                <span>.</span>
                            </li>
                            <li className='inline'>
                                <a href="#">Lựa Chọn Quảng cáo</a>
                                <span>.</span>
                            </li>
                            <li className='inline'>
                                <a href="#">Cookie</a>
                                <span>.</span>
                            </li>
                            <li className='inline'>
                                <a href="#">Xem thêm</a>
                                <span>.</span>
                            </li>
                        </ul>
                        Meta © 2025
                    </span>
                </footer>
            </div>

            <div className='block basis-[500px] grow-25 m-[8px] box-border max-w-[680px] min-w-0 relative '>
                
                <div className='block mb-[16px] bg-base-100 rounded-xl '>
                    <div className='block overflow-hidden w-[590.112px]'>
                        <div className='flex flex-col items-stretch px-[16px] pb-[12px] pt-[15px]'>

                            <div className=' flex items-start grow-1 w-[558.112px] cursor-pointer'>
                                <a href="#" className='flex items-stretch mr-[8px] box-border relative hover:brightness-105 '>
                                    <div className='block rounded-full overflow-hidden'>
                                        <img 
                                            className=' size-[40px] object-cover'
                                            src="IMG_7810.jpg" alt="" />
                                    </div>
                                </a>
                                <div className='flex items-center justify-start grow-1 h-[40px] py-[8px] px-[12px] bg-gray-700 hover:brightness-105  relative rounded-3xl '>
                                    <div className='block  w-[486.112px] break-words'>
                                        <span className=' text-[17px] leading-[22.78px]'>Bạn đang nghĩ gì</span>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-wrap justify-around h-[40px] mt-[12px] pt-[8px] 
                                            border-t border-gray-600 box-content gap-1 '>

                                <button className='btn btn-ghost basis-0 grow-1 shrink-1 min-w-fit min-h-0  p-[8px] box-border
                                                hover:bg-gray-700 rounded-xl relative '>
                                    <div className='flex items-center justify-center grow-1 leading-[12.8004px] overflow-hidden '>
                                        <span className='flex grow-0 mr-[8px]'>
                                            <img height="24" width="24" alt="" 
                                                className="" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png?_nc_eui2=AeFqDwA6fw6iTrTQGAumwQtNueRic5Ym8Wm55GJzlibxaVnALaFOd322f5n2N5UNg6ipEqYOv6duLAizpKffawNX"/>
                                        </span>
                                        <span className='block leading-[19.9995px] max-w-full min-w-0 text-[15px] font-semibold break-words'>
                                            <span className='block  text-nowrap overflow-hidden leading-[19.9995px] max-w-full min-w-0 text-[15px] font-semibold break-words'>
                                                Video trực tiếp
                                            </span>
                                        </span>
                                    </div>
                                </button>

                                <button className='btn btn-ghost basis-0 grow-1 shrink-1 min-w-fit min-h-0  p-[8px] box-border
                                                hover:bg-gray-700 rounded-xl relative '>
                                    <div className='flex items-center justify-center grow-1 leading-[12.8004px] overflow-hidden '>
                                        <span className='flex grow-0 mr-[8px]'>
                                            <img height="24" width="24" alt="" 
                                                className="" referrerpolicy="origin-when-cross-origin" src='https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeEMroBTsaHpzLJ6ruiXw-qikBVQC4m7dx6QFVALibt3HqX_qmSrEWxAO-b0Aobdcw9t5lK_kiRCl6YSOsNxS8pQ'/>
                                        </span>
                                        <span className='block leading-[19.9995px] max-w-full min-w-0 text-[15px] font-semibold break-words'>
                                            <span className='block  text-nowrap overflow-hidden leading-[19.9995px] max-w-full min-w-0 text-[15px] font-semibold break-words'>
                                                Ảnh/Video
                                            </span>
                                        </span>
                                    </div>
                                </button>

                                <button className='btn btn-ghost basis-0 grow-1 shrink-1 min-w-fit min-h-0  p-[8px] box-border
                                                hover:bg-gray-700 rounded-xl relative '>
                                    <div className='flex items-center justify-center grow-1 leading-[12.8004px] overflow-hidden '>
                                        <span className='flex grow-0 mr-[8px]'>
                                            <img height="24" width="24" alt="" 
                                                className="" referrerpolicy="origin-when-cross-origin"
                                                src='https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/pkbalDbTOVI.png?_nc_eui2=AeENK4any3f7B1k0P1pDNJMrxUvOOua_OjbFS8465r86NmmeQwWTWdpHQ6-ZmYW_xz7lC16iArnKa3sx8xNdf1oy' />
                                        </span>
                                        <span className='block leading-[19.9995px] max-w-full min-w-0 text-[15px] font-semibold break-words'>
                                            <span className='block  text-nowrap overflow-hidden leading-[19.9995px] max-w-full min-w-0 text-[15px] font-semibold break-words'>
                                                Sự kiện trong đời
                                            </span>
                                        </span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='block mb-[16px] bg-base-100 rounded-xl '>

                    <div className='block w-[590.112px] pt-2 overflow-hidden'>

                        <div className='flex items-stretch justify-between -m-[6px] px-[16px] box-border relative '>

                            <div className='flex flex-col self-center shrink-0 p-[6px] box-border relative '>
                                <div className='flex flex-col my-[6px]'>
                                    <div className='block my-[6px]'>
                                        <span className='block text-[20px] font-bold leading-[24px] break-words text-start'>
                                            Bài viết
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col self-center shrink-0 p-[6px] relative  '>
                                <div className='flex py-[8px]'>

                                    <div className='inline-flex flex-col justify-center w-[88.075px] bg-gray-700 rounded-lg '>
                                        <div className='btn btn-soft h-[36px] px-[12px] hover:bg-gray-700 rounded-lg relative '>
                                            <div className='flex items-center justify-center -mx-[3px] w-[70.075px] '>
                                                <div className='flex items-center shrink-0 mx-[3px] relative '>
                                                    <SlidersHorizontal size={16} />
                                                </div>
                                                <div className='flex items-center shrink-0 mx-[3px] relative '>
                                                    <span>Bộ lọc</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='inline-flex flex-col justify-center w-[152.125px] box-content ml-[8px] '>
                                        <button className='btn btn-soft h-[36px] px-[12px] hover:bg-gray-700 rounded-lg relative '>
                                            <div className='flex items-center justify-center -mx-[3px] w-[70.075px] '>
                                                <div className='flex items-center shrink-0 mx-[3px] relative '>
                                                    <Settings size={16} />
                                                </div>
                                                <div className='flex items-center shrink-0 mx-[3px] relative '>
                                                    <span>Quản lý bài viết</span>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='block border-t border-gray-600'></div>

                        <div className='flex items-stretch justify-between mx-[16px] mt-1 box-content relative '>
                            <div className='flex flex-col grow-1 relative'>
                                <a href="#" className='flex'>
                                    <div className='flex items-center justify-center text-blue-600 h-[40px] w-[279.062px] min-h-[16px] relative'>
                                        <div className='block mr-[4px] '>
                                            <AlignJustify />
                                        </div>
                                        <span className='text-[15px] font-semibold block break-words leading-[20px]'>
                                            Chế độ xem danh sách
                                        </span>
                                        <div className='block bg-blue-600 h-[3px] absolute bottom-0 right-0 left-0'></div>
                                    </div>
                                </a>
                            </div>
                            <div className='flex flex-col grow-1 relative'>
                                <a href="#" className='flex'>
                                    <button className='btn btn-ghost hover:bg-gray-700 rounded-lg h-[40px] w-[279.062px] min-h-[16px] relative'>
                                        <div className='flex flex-col mr-[4px] '>
                                            <i className="inline-block size-4 bg-no-repeat filter invert" 
                                                style={{
                                                    fill: "white",
                                                    backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v4/yI/r/MHWISMefH0t.png?_nc_eui2=AeHTcbWJgotwPjCh7ZnSd-yJDGPiywJHNyoMY-LLAkc3KlvVJdWWiFFRZEzawrqRd74SqO6QuowgplFPaff-W6HL')",
                                                    backgroundPosition: "0 -211px"
                                                }}>
                                            </i>
                                        </div>
                                        <span className='text-[15px] font-semibold block break-words leading-[20px]'>
                                            Chế độ xem lưới
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='block bg-base-100 rounded-xl'>
                    <div className='block w-[590.112px] mb-[16px] overflow-hidden relative'>

                        <div className='flex items-start mb-[12px] px-[12px] pt-[12px] h-[48px] '>

                            <div className='flex mr-[8px]'>
                                <div className='block size-[40px] overflow-hidden rounded-full'>
                                    <a href="#">
                                        <img 
                                            className=' object-cover'
                                            src="IMG_7810.jpg" alt="" />
                                    </a>
                                </div>
                            </div>

                            <div className='block grow-1'>
                                <div className='flex flex-col -my-[5px]'>
                                    <div className='flex items-center my-[5px]'>
                                        <span className='inline text-[15px] font-semibold leading-[20px] break-words '>
                                            Hải Minh
                                        </span>
                                    </div>
                                    <div className='flex items-center my-[5px] h-[9px] box-border '>
                                        <span className='inline text-[12px] font-normal leading-[20px] break-words '>
                                            <span>25 tháng 2, 2024</span>
                                            <span>&nbsp; . &nbsp;</span>
                                            <span>
                                                <img    
                                                    className="inline-block filter invert" alt="Bạn bè" height="12" width="12" 
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v4/yJ/r/zPcex_q0TM1.png?_nc_eui2=AeFf6A6nRCYgn6vHdbuSntc5_tC9Vssymsf-0L1WyzKaxxfrQR2zPcHO0g0sptCBv4AKqT375EUtC689Crte1vzF"/>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='flex self-start p-[8px] box-border'>
                                <button className='btn btn-circle btn-ghost hover:bg-gray-700 size-[36px]'>
                                    <Ellipsis />
                                </button>
                                
                            </div>
                        </div>

                        <div className='block'>
                            <div className='block'>
                                <div className='block px-[12px] pb-[16px] pt-[4px]'>
                                    <div className='flex flex-col -my-[5px]'>
                                        <div className='block my-[5px]'>
                                            <span className='block text-[15px] font-normal leading-[20px] break-words text-start'>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta debitis nobis vel aperiam laboriosam nostrum omnis fuga quaerat officiis necessitatibus quos, iusto culpa tempora consequatur exercitationem rem veniam voluptas fugit.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='block relative'>
                                <a href="#">
                                    <div className='flex flex-col overflow-hidden w-[590.112px]'>
                                        <div className='flex items-center justify-center max-x-full min-x-[500px] '>
                                            <img height="640" width="500" alt="Không có mô tả ảnh." 
                                                className=" object-cover"
                                                src="https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/484817002_2012197379303639_5958930977464826073_n.jpg?stp=dst-jpg_s640x640_tt6&amp;_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=833d8c&amp;_nc_eui2=AeG_gLVSVFv-CgNTarIlXKHC2zpzOxhPIKDbOnM7GE8goALtn-KeStUVXzOukK8meUhKqQTJO1kX9LjQIraNDXot&amp;_nc_ohc=8Bz-2ttvFOwQ7kNvgGTzAvB&amp;_nc_oc=AdkC11oLu3WnAW8ok3X83t9BX9gCtY55B2OcZN3mpTXBlHnG2SpelKEMYy-JH1g-mUTc46x8NHPLgpdSxlg4syMn&amp;_nc_zt=23&amp;_nc_ht=scontent.fsgn15-1.fna&amp;_nc_gid=e4IInKDzWxXF-8jr5CjImA&amp;oh=00_AYHrJlZ9DiYUXd0NpUwE2Z-CfHG9LbbusMc6uWDJtAjdtw&amp;oe=67EF6E16"/>
                                            </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className='block space-y-1'>

                            <div className='block'>
                                <div className='block'>

                                    <div className='flex items-center justify-end mx-[12px] pb-[6px] pt-[8px] leading-[20px] border-b border-gray-600'>
                                        <div className='flex grow-1 items-center overflow-hidden '>
                                            <span className='flex items-center pl-[4px]'>
                                                <span className='size-[18px] -ml-[4px] z-2'>
                                                    <img 
                                                        className="" height="18" role="presentation" width="18" 
                                                        src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"></img>
                                                </span>
                                                <span className='size-[18px] -ml-[4px] z-1'>
                                                    <img 
                                                        className="" height="18" width="18" 
                                                        src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9963 8c0 4.4179-3.5811 7.9993-7.9986 7.9993-4.4176 0-7.9987-3.5814-7.9987-7.9992 0-4.4179 3.5811-7.9992 7.9987-7.9992 4.4175 0 7.9986 3.5813 7.9986 7.9992Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M7.9996 5.9081c-.3528-.8845-1.1936-1.507-2.1748-1.507-1.4323 0-2.4254 1.328-2.4254 2.6797 0 2.2718 2.3938 4.0094 4.0816 5.1589.3168.2157.7205.2157 1.0373 0 1.6878-1.1495 4.0815-2.8871 4.0815-5.159 0-1.3517-.993-2.6796-2.4254-2.6796-.9811 0-1.822.6225-2.1748 1.507Z' fill='%23fff'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23E11731' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23E11731' stop-opacity='.1'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3986' y1='2.4007' x2='13.5975' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF74AE'/%3E%3Cstop offset='.5001' stop-color='%23FA2E3E'/%3E%3Cstop offset='1' stop-color='%23FF5758'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.001.0009h15.9992v15.9984H-.001z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"/>
                                                
                                                </span>
                                                <span className='size-[18px] -ml-[4px] z-0'>
                                                   <img 
                                                        className="" height="18" width="18" 
                                                        src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9953 7.9996c0 4.418-3.5816 7.9996-7.9996 7.9996S-.004 12.4176-.004 7.9996 3.5776 0 7.9957 0c4.418 0 7.9996 3.5815 7.9996 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M15.9953 7.9996c0 4.418-3.5816 7.9996-7.9996 7.9996S-.004 12.4176-.004 7.9996 3.5776 0 7.9957 0c4.418 0 7.9996 3.5815 7.9996 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.8'/%3E%3Cpath d='M12.5278 8.1957c.4057.1104.6772.4854.623.9024-.3379 2.6001-2.5167 4.9012-5.1542 4.9012s-4.8163-2.3011-5.1542-4.9012c-.0542-.417.2173-.792.623-.9024.8708-.237 2.5215-.596 4.5312-.596 2.0098 0 3.6605.359 4.5312.596Z' fill='%234B280E'/%3E%3Cpath d='M11.5809 12.3764c-.9328.9843-2.1948 1.6228-3.5841 1.6228-1.3892 0-2.6512-.6383-3.5839-1.6225a1.5425 1.5425 0 0 0-.016-.0174c.4475-1.0137 2.2-1.3599 3.5999-1.3599 1.4 0 3.1514.3468 3.5998 1.3599l-.0157.0171Z' fill='url(%23paint3_linear_15251_63610)'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.3049 5.8793c.1614-1.1485-.6387-2.2103-1.7872-2.3717l-.0979-.0138c-1.1484-.1614-2.2103.6388-2.3717 1.7872l-.0163.1164a.5.5 0 0 0 .9902.1392l.0163-.1164c.0846-.6016.6408-1.0207 1.2424-.9362l.0978.0138c.6016.0845 1.0207.6407.9362 1.2423l-.0164.1164a.5.5 0 0 0 .9903.1392l.0163-.1164ZM2.6902 5.8793c-.1614-1.1485.6387-2.2103 1.7872-2.3717l.0979-.0138c1.1484-.1614 2.2103.6388 2.3717 1.7872l.0164.1164a.5.5 0 1 1-.9903.1392l-.0163-.1164c-.0846-.6016-.6408-1.0207-1.2423-.9362l-.098.0138c-.6015.0845-1.0206.6407-.936 1.2423l.0163.1164a.5.5 0 0 1-.9902.1392l-.0164-.1164Z' fill='%231C1C1D'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23FF5758' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FF5758' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5272 10.9202) scale(10.1818)'%3E%3Cstop stop-color='%23FFF287'/%3E%3Cstop offset='1' stop-color='%23FFF287' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.396' y1='2.3999' x2='13.5954' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFF287'/%3E%3Cstop offset='1' stop-color='%23F68628'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint3_linear_15251_63610' x1='5.1979' y1='10.7996' x2='5.245' y2='14.2452' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF60A4'/%3E%3Cstop offset='.2417' stop-color='%23FA2E3E'/%3E%3Cstop offset='1' stop-color='%23BC0A26'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.002 0h16v15.9992h-16z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"></img>
                                                </span>
                                            </span>
                                            <div>
                                                <span className='font-normal pl-[4px] text-gray-300'>Bạn, Quang Khánh, Văn Linh và 368 người khác</span>
                                            </div>
                                        </div>
                                        <div className='flex items-stretch justify-between -m-[6px] py-[5px] relative'>
                                            <span className='flex items-center font-normal pr-[4px] text-gray-300'> 5 bình luận </span>
                                        </div>
                                    </div>
                                    
                                    <div className='flex items-center justify-between mx-[12px] pb-[6px] pt-[8px] leading-[20px] border-b border-gray-600'>
                                        <button className='btn btn-ghost grow-1 h-[32px] hover:bg-gray-700'>
                                            <img 
                                                className="" height="18" width="18" 
                                                src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9963 8c0 4.4179-3.5811 7.9993-7.9986 7.9993-4.4176 0-7.9987-3.5814-7.9987-7.9992 0-4.4179 3.5811-7.9992 7.9987-7.9992 4.4175 0 7.9986 3.5813 7.9986 7.9992Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M7.9996 5.9081c-.3528-.8845-1.1936-1.507-2.1748-1.507-1.4323 0-2.4254 1.328-2.4254 2.6797 0 2.2718 2.3938 4.0094 4.0816 5.1589.3168.2157.7205.2157 1.0373 0 1.6878-1.1495 4.0815-2.8871 4.0815-5.159 0-1.3517-.993-2.6796-2.4254-2.6796-.9811 0-1.822.6225-2.1748 1.507Z' fill='%23fff'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23E11731' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23E11731' stop-opacity='.1'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3986' y1='2.4007' x2='13.5975' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF74AE'/%3E%3Cstop offset='.5001' stop-color='%23FA2E3E'/%3E%3Cstop offset='1' stop-color='%23FF5758'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.001.0009h15.9992v15.9984H-.001z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"/>
                                            <span className='text-red-500'>Yêu thích</span>        
                                        </button>
                                        <button className='btn btn-ghost grow-1 h-[32px] hover:bg-gray-700'>
                                            <MessageCircle />
                                            <span className=''>Bình luận</span>        
                                        </button>
                                        <button className='btn btn-ghost grow-1 h-[32px] hover:bg-gray-700'>
                                            <Forward />
                                            <span className=''>Chia sẻ</span>        
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='block mx-[12px] mb-[4px]'></div>

                            <div className='block mx-[16px]'>
                                <div className='flex items-center text-start h-[32px] cursor-pointer'>
                                    <span className='font-normal pr-[4px] text-gray-300' >Xem thêm bình luận</span>
                                </div>
                            </div>

                            <div className='block'>
                                <div className='flex items-start pl-[12px] pt-[4px]'>
                                    <div className='block mr-[6px] mt-[2px]'>
                                        <img
                                            className=' size-[32px] rounded-full object-cover'
                                            src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-1/453843110_1516769685626019_6257118906584018810_n.jpg?stp=cp0_dst-jpg_s32x32_tt6&_nc_cat=106&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeGGK42dN8NofiUQtCaicHudVARSmBhjzd9UBFKYGGPN34sBZas5BfLlRFKYH9Tq-s09VIzJdFsp5w9CfZ8b6FQ1&_nc_ohc=fZJJdCsr18wQ7kNvgGZWCLZ&_nc_oc=Adln3L_cIrSxGaz6kxlH6qptZMif2UwxR9kfaw5Fac8k1_l1Y0jG-ua_079_5w50SRI&_nc_zt=24&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=w6iUqRudMaEvtE8z0DjXkw&oh=00_AYGpH1USZ3zygImfCeGypOfIt0oTY4_HkK-1H01TFWMPVg&oe=67F06E90" alt="" />
                                    </div>
                                    <div className='flex flex-col grow-1 pr-[16px]'>
                                        <div className='block'>
                                            <div className='flex flex-col size-fit text-wrap h-fit px-[12px] py-[8px] leading-[16px] rounded-2xl bg-gray-700   '>
                                                <a href="#">
                                                    <span className='inline text-[13px] font-semibold'>Minh Đức</span>
                                                </a>
                                                <span className='text-[15px] font-normal py-[4px] '>Ô bạn Duy Thắng đi rồi cơ à</span>
                                            </div>
                                        </div>
                                        <div className='inline-flex p-[3px] mx-[4px] h-[15px] min-h-[15px] box-border'>
                                            <span className='text-[12px] font-semibold leading-[12px] cursor-pointer'>
                                                <span className='px-[8px] hover:underline'>1 năm</span>
                                                <span className='px-[8px] hover:underline'>Thích</span>
                                                <span className='px-[8px] hover:underline'>Phản hồi</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col shrink-0 my-[8px] max-w-full relative'>
                                <div className='flex px-[12px]'>
                                    <div className='block mr-[6px] mt-[2px] box-content'>
                                        <a href="#" className='relative' >
                                            <img
                                                className='size-[32px] rounded-full object-cover' 
                                                src="IMG_7810.jpg" alt="" />
                                            <ChevronDown className="absolute bottom-0 right-0 size-3 bg-gray-700 rounded-full" />
                                        </a>
                                    </div>

                                    <div className='flex flex-col items-start gap-2 grow-1 '>
                               
                                        <label 
                                            className={`input rounded-2xl w-full border-none !outline-none transition-all duration-300${
                                                    isExpanded ? "flex flex-col h-full items-start" : ""}`}
                                            onClick={() => setIsExpanded(true)}
                                            // onBlur={() => setIsExpanded(false)}
                                            >
                                            <input type="text" placeholder="Viết bình luận ..." 
                                                className='grow-1' value={text}
                                                onChange={(e) => setText(e.target.value)} />
                                            <input type="file" accept="image/*" className="hidden"
                                                ref={fileInputRef}
                                                onChange={handleImageChange}
                                            />
                                            <div className={`block ${isExpanded ? "flex justify-between w-full" : ""}`}>
                                                <div className='block'>
                                                    <button className="btn btn-ghost btn-circle hover:bg-gray-700" >
                                                        <i className="w-4 h-4 filter invert" 
                                                        style={{
                                                            backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/ETqWQ46BPZV.png?_nc_eui2=AeFVm6iA5w719JPLf1VjI6hKm0K8MjzVYICbQrwyPNVggKhg2yflg5kAJScTLnUbh8jGfLmxTiYScsaSn93PhtVG')",
                                                            backgroundPosition: "0px -201px",
                                                            backgroundSize: "auto"
                                                        }}>
                                                        </i>
                                                    </button>

                                                    <button className="btn btn-ghost btn-circle hover:bg-gray-700" >
                                                        <i className="w-4 h-4 filter invert" 
                                                        style={{
                                                            backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/ETqWQ46BPZV.png?_nc_eui2=AeFVm6iA5w719JPLf1VjI6hKm0K8MjzVYICbQrwyPNVggKhg2yflg5kAJScTLnUbh8jGfLmxTiYScsaSn93PhtVG')",
                                                            backgroundPosition: "0px -269px",
                                                            backgroundSize: "auto"
                                                        }}>
                                                        </i>
                                                    </button>

                                                    <button className={`btn btn-ghost btn-circle hover:bg-gray-700 
                                                            ${imagePreview ? "text-emerald-500" : "text-zinc-400"}`}
                                                            onClick={() => fileInputRef.current?.click()} >
                                                        <i className="w-4 h-4 filter invert" 
                                                        style={{
                                                            backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/ETqWQ46BPZV.png?_nc_eui2=AeFVm6iA5w719JPLf1VjI6hKm0K8MjzVYICbQrwyPNVggKhg2yflg5kAJScTLnUbh8jGfLmxTiYScsaSn93PhtVG')",
                                                            backgroundPosition: "0px -235px",
                                                            backgroundSize: "auto"
                                                        }}>
                                                        </i>
                                                    </button>

                                                    <button className="btn btn-ghost btn-circle hover:bg-gray-700" >
                                                        <i className="w-4 h-4 filter invert" 
                                                        style={{
                                                            backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/ETqWQ46BPZV.png?_nc_eui2=AeFVm6iA5w719JPLf1VjI6hKm0K8MjzVYICbQrwyPNVggKhg2yflg5kAJScTLnUbh8jGfLmxTiYScsaSn93PhtVG')",
                                                            backgroundPosition: "0px -286px",
                                                            backgroundSize: "auto"
                                                        }}>
                                                        </i>
                                                    </button>
                                                    
                                                    <button className="btn btn-ghost btn-circle hover:bg-gray-700" >
                                                        <i className="w-4 h-4 filter invert" 
                                                        style={{
                                                            backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/ETqWQ46BPZV.png?_nc_eui2=AeFVm6iA5w719JPLf1VjI6hKm0K8MjzVYICbQrwyPNVggKhg2yflg5kAJScTLnUbh8jGfLmxTiYScsaSn93PhtVG')",
                                                            backgroundPosition: "0px -388px",
                                                            backgroundSize: "auto"
                                                        }}>
                                                        </i>
                                                    </button>
                                                </div>
                                                {isExpanded && (
                                                    <button
                                                        type="submit"
                                                        className="cursor-pointer size-[32px] text-blue-700"
                                                        disabled={!text.trim() && !imagePreview}>
                                                        <Send size={16} strokeWidth={5} />
                                                    </button>
                                                )}
                                            </div>
                                        </label>
                                        {imagePreview && (
                                            <div className="mb-3 flex items-center gap-2">
                                            <div className="relative">
                                                <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
                                                />
                                                <button
                                                onClick={removeImage}
                                                className="btn btn-circle absolute -top-1.5 -right-1.5 size-5 rounded-full bg-base-200"
                                                type="button">
                                                    <X className="size-3" />
                                                </button>
                                            </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileBody