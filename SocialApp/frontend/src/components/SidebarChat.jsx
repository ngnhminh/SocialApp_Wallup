import { useEffect} from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarChatSkeleton from "./skeletons/SidebarChatSkeleton";
import { Ellipsis, Search, SquarePen } from "lucide-react";

const SidebarChat = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();

  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);


  if (isUsersLoading) return <SidebarChatSkeleton />;

  return (
    <aside className="h-full lg:w-[360px] w-40 border-r border-base-300 overflow-hidden hover:overflow-y-auto">
      <div className=" flex flex-col flex-1 gap-2">
        <div className="flex h-[49px] items-end justify-between">
          <span>Đoạn Chat</span>
          <div className="flex">
            <button className="btn btn-circle size-[36px] hover:bg-amber-50 ">
              <Ellipsis />
            </button>
            <button className="btn btn-circle size-[36px] hover:bg-amber-50 ">
              <SquarePen size={20} />
            </button>

          </div>
        </div>
        <div>
          <label className="input bg-base-100 rounded-3xl w-[240px] border-none  ">
            <Search className=" size-5" />
            <input type="search" className=" font-[Segoe UI Historic] text-[15px] "  required placeholder="Tìm kiếm trên FaceBook"/>
          </label>
        </div>
        <div className="flex">
          <button className="btn btn-ghost hover:bg-gray-700 rounded-3xl">
              Hộp Thư
          </button>
          <button className="btn btn-ghost hover:bg-gray-700 rounded-3xl">
              Cộng Đồng
          </button>
        </div>
        <div>
          
        {users.length === 0 && (
            <div className=" flex flex-col cursor-pointer">

              <div className=' p-2 flex items-center rounded-xl gap-3 hover:bg-base-100' >
                <div className="relative">
                  <img 
                    src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/275603720_667156341070591_6170493892786942129_n.jpg?stp=c7.2.705.705a_cp0_dst-jpg_s40x40_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeElI-6_EPX_qmXiWMm0ZsKoV6B21_LhOXxXoHbX8uE5fPMPJpLM5rRnxRYAJCCfUxOCKpPPslbNVAwKUAZqg-bL&_nc_ohc=JxWtefCWjFMQ7kNvgGCagHl&_nc_oc=AdkdhvQfjsVe8vY1Ewy52SGUlMZYbgvvEA_gbNhSHJ8oKpIB9mUnXjTHja903VOrEFdQyQld8WwkTS3S-Enwbcvo&_nc_zt=24&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=vNnEfDLtitSuk-dvOa3G-Q&oh=00_AYG4LMOODERt7UdJcIHeLKqfPkljtPyiPeZbPG5rn5YVNA&oe=67E99748"
                    alt="avt"className="size-[36px] object-cover rounded-full" />
                  <span className="absolute bottom-0 right-0 size-2 bg-green-500 rounded-full ring-2 ring-zinc-900"/>
                </div>
                <div className=" text-left ">
                  <div className="font-medium truncate">Nhật Minh</div>
                </div>
              </div>
              <div className=' p-2 flex items-center rounded-xl gap-3 hover:bg-base-100' >
                <div className="relative">
                  <img 
                    src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-1/476904842_1706261229939863_4021163920075702227_n.jpg?stp=c0.683.1365.1365a_cp0_dst-jpg_s40x40_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEzBuJY0gDBOBHiLL71RY-Eh7ZXkxIVOBuHtleTEhU4G47CJIEkoqhBuW_w55jFjH9F6iQrdMTbhNAszJLkvzyo&_nc_ohc=PpHJh-JVWxwQ7kNvgFajTg4&_nc_oc=Adny2XdMQFbTEF66xXGqisPQFyU12vInJiVp0fudJYwKMfIIl2vMVxOJW-LtOQWyGvlpsrhvmRpILErL420Fs1qt&_nc_zt=24&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=kdoY5P1blEtx2VKxVsqy-w&oh=00_AYFGWbXZaUzPCbg24MxIEg_QSC1zV8HgeEtNLLFGC2Z_nA&oe=67E98922"
                    alt="avt"className="size-[36px] object-cover rounded-full" />
                  <span className="absolute bottom-0 right-0 size-2 bg-green-500 rounded-full ring-2 ring-zinc-900"/>
                </div>
                <div className=" text-left ">
                  <div className="font-medium truncate">Hùng Phạm</div>
                </div>
              </div>
              <div className=' p-2 flex items-center rounded-xl gap-3 hover:bg-base-100' >
                <div className="relative">
                  <img 
                    src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-1/460857218_1640095099868718_8507013106183653731_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEtfvsF0gonDAvW6rRVd7QiBlhk3k_p5KoGWGTeT-nkqtHFrZz4OTOKUWATmafIXrZmnucyiiDr_hTYNP_3gF1t&_nc_ohc=psi4SaHlU7UQ7kNvgFtazvc&_nc_oc=Adn9OTeRJZxnqHnqavZp0u7KVQg_zAblHhDHbgNdjiNlncCWxckCdE2aI7SQDlShbykbtIPoNZrSmT9lQ-JS0tXA&_nc_zt=24&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=vNnEfDLtitSuk-dvOa3G-Q&oh=00_AYHEvH-joI7O4JRfS-fOAgJfoMYa9Fz8pqfmineCWB-wUA&oe=67E97567"
                    alt="avt"className="size-[36px] object-cover rounded-full" />
                  <span className="absolute bottom-0 right-0 size-2 bg-green-500 rounded-full ring-2 ring-zinc-900"/>
                </div>
                <div className=" text-left ">
                  <div className="font-medium truncate">Tài Nguyên</div>
                </div>
              </div>
              <div className=' p-2 flex items-center rounded-xl gap-3 hover:bg-base-100' >
                <div className="relative">
                  <img 
                    src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-1/427812815_3887461584875568_5636149006252658964_n.jpg?stp=c0.0.913.913a_cp0_dst-jpg_s40x40_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHocCRYCbJVPscMFl2xErSD_vR_jlfEKff-9H-OV8Qp95kOgcrvTXq1xY2ivhlD5P1Em8YmnziHDCyTOVgYjsxJ&_nc_ohc=Zyns-kxayAAQ7kNvgHJWPPO&_nc_oc=AdmxY-kB0qCaWd2xZngK-yOp3PycKw9oaDDeM7Cr5ecjydGefRXqoWpOOYUU0DtfUWNhD1eKP0DGKpIuohRE77Fv&_nc_zt=24&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=kdoY5P1blEtx2VKxVsqy-w&oh=00_AYE1k_0QJgD3Qv6H2GKs5ZVIGAqUSPlrZ_lLiahtAtIimw&oe=67E990B7"
                    alt="avt"className="size-[36px] object-cover rounded-full" />
                  <span className="absolute bottom-0 right-0 size-2 bg-green-500 rounded-full ring-2 ring-zinc-900"/>
                </div>
                <div className=" text-left ">
                  <div className="font-medium truncate">Phan Nguyễn Hoàng Phương</div>
                </div>
              </div>
              <div className=' p-2 flex items-center rounded-xl gap-3 hover:bg-base-100' >
                <div className="relative">
                  <img 
                    src="avatar.png"
                    alt="avt"className="size-[36px] object-cover rounded-full" />
                  <span className="absolute bottom-0 right-0 size-2 bg-green-500 rounded-full ring-2 ring-zinc-900"/>
                </div>
                <div className=" text-left ">
                  <div className="font-medium truncate">Quang Khánh </div>
                </div>
              </div>
              <div className=' p-2 flex items-center rounded-xl gap-3 hover:bg-base-100' >
                <div className="relative">
                  <img 
                    src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-1/481170881_1392385205261053_1061835601031594198_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG18jxSIfwgQjKGpaPvgohBwe2sjdDxdY7B7ayN0PF1jjfCNBdLjLpM_B0QiZNNvydsdwoMrUjoVpHY2-CkM3Gc&_nc_ohc=rnK3qP_dYpkQ7kNvgF6Eh-R&_nc_oc=Adm0JFDlYDeUgcgh1M14ajdkczVZt-4I4u3TLttznNVOr3p7kRuwna4UXrOiWR4ERm_aOoc69IBHqPOiMFpX5N-E&_nc_zt=24&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=kdoY5P1blEtx2VKxVsqy-w&oh=00_AYH9Oog2lEGJXLUtDRmwz1bPJ2kq6nR40IT8uLDA9kKMTQ&oe=67E97BBC"
                    alt="avt"className="size-[36px] object-cover rounded-full" />
                  <span className="absolute bottom-0 right-0 size-2 bg-green-500 rounded-full ring-2 ring-zinc-900"/>
                </div>
                <div className=" text-left ">
                  <div className="font-medium truncate">Nguyễn Hữu Lực</div>
                </div>
              </div>
              <div className=' p-2 flex items-center rounded-xl gap-3 hover:bg-base-100' >
                <div className="relative">
                  <img 
                    src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/469512877_2102586136864252_8698803620468002179_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEYi2bkiZ4b7KyRm4xYJX2Ketn85eFgg2h62fzl4WCDaIJsyiNQC_aOvXe9T7xL8Od4ZJVnYPaMKUEj3FUL1_5X&_nc_ohc=BsHjO2_gVdoQ7kNvgGBVmpL&_nc_oc=Adk0OOEXXF6YoH8FQr6nmtLWD9t1j8I2NveKAJdkysGT9HtBsZivvvKeorPl41CIFLYpldZmwWLexajuUzyM8X6-&_nc_zt=24&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=kdoY5P1blEtx2VKxVsqy-w&oh=00_AYGLu_zsCGm3z1tytZ0swegQkM0L2w8kX38Efex72JaYHg&oe=67E99194"
                    alt="avt"className="size-[36px] object-cover rounded-full" />
                  <span className="absolute bottom-0 right-0 size-2 bg-green-500 rounded-full ring-2 ring-zinc-900"/>
                </div>
                <div className=" text-left ">
                  <div className="font-medium truncate">Lê Thiên Thuận</div>
                </div>
              </div>
              <div className=' p-2 flex items-center rounded-xl gap-3 hover:bg-base-100' >
                <div className="relative">
                  <img 
                    src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-1/475808199_8769946673132827_6039043162050621070_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGSZ2wTclKCwlpjSq7lBqo8RvnmTVuE7GpG-eZNW4TsaoUBGFSGYUE7fBbshPrTYSq1UxVoacvvMzkFl3lAg4tW&_nc_ohc=5ZFeIAQMHGMQ7kNvgFlkY9k&_nc_oc=AdmBk9aqGjrJsLe7jkh7__LXiRODbD3m-4GxXcuQWIGi4A5nMwfBvjn83WduG2AAS3oL9ZrqkJ6WTsmG9MK9EpHo&_nc_zt=24&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=vNnEfDLtitSuk-dvOa3G-Q&oh=00_AYGL2xsbqkYQAtjYM6Lt52dLK01Hp8Z1ksGeBHCgLsf79w&oe=67E9684A"
                    alt="avt"className="size-[36px] object-cover rounded-full" />
                  <span className="absolute bottom-0 right-0 size-2 bg-green-500 rounded-full ring-2 ring-zinc-900"/>
                </div>
                <div className=" text-left ">
                  <div className="font-medium truncate">Nguyễn Thành Lợi</div>
                </div>
              </div>
              <div className=' p-2 flex items-center rounded-xl gap-3 hover:bg-base-100' >
                <div className="relative">
                  <img 
                    src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-1/278317600_1177863106324260_3985536775638127491_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeF9Jxj68pvEh0-G49hVftSp7CAH5E85B5XsIAfkTzkHlcBJG-TRz3FDHe2wthCpxO4LwypmtSczRqcarE3gXsLJ&_nc_ohc=Rt3dgw6zhKQQ7kNvgEavd06&_nc_oc=AdlgRJQ4dGkx1IVAoVDIQgmIZfKEKKKsQRX7-PSNQI4BtnYFi-06GUVUzCmbQHIRRr2bi2fB5IJ3S2bJO7Qm-esx&_nc_zt=24&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=vNnEfDLtitSuk-dvOa3G-Q&oh=00_AYED2Hm6QAJ9XqGMk69cAkdm9wMnAKJzyhk3BppBdvYtIg&oe=67E985EA"
                    alt="avt"className="size-[36px] object-cover rounded-full" />
                  <span className="absolute bottom-0 right-0 size-2 bg-green-500 rounded-full ring-2 ring-zinc-900"/>
                </div>
                <div className=" text-left ">
                  <div className="font-medium truncate">Quang trường</div>
                </div>
              </div>
              <div className=' p-2 flex items-center rounded-xl gap-3 hover:bg-base-100' >
                <div className="relative">
                  <img 
                    src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.15752-9/81111652_472529226788017_2122734319863595008_n.jpg?stp=cp0_dst-jpg_s50x50_tt6&_nc_cat=109&ccb=1-7&_nc_sid=935a9d&_nc_eui2=AeEfA5JoBCxwNJW9MZYRbrpAUNrHol7wQ5pQ2seiXvBDmui1lXLn_eDNcRTwP2FaHu2HZcP-Jw6xhcgr1k9TEP2_&_nc_ohc=MKNlOWHUqbQQ7kNvgHxa5cd&_nc_oc=AdkuPQ-bxdpA26qePCWYGYPqeiuBedrYRqFrQ_3zinJgi_7u1TVCQZ8K_ERstDuFMV1Xx8xKz2A4RPNkI1bKX_El&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&oh=03_Q7cD1wFHOV5s-yyw-Efq9SWGbl-sCHI2rjq81rH7NQO7DUCeEw&oe=680B1795"
                    alt="avt"className="size-[36px] object-cover rounded-full" />
                  <span className="absolute bottom-0 right-0 size-2 bg-green-500 rounded-full ring-2 ring-zinc-900"/>
                </div>
                <div className=" text-left ">
                  <div className="font-medium truncate">A8 Chuẩn Quốc Tế</div>
                </div>
              </div>
          </div>
          )}
        </div>
      </div>

    </aside>
  );
};
export default SidebarChat;
