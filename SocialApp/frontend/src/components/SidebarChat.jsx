import { useEffect} from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarChatSkeleton from "./skeletons/SidebarChatSkeleton";
import { ChevronDown, Ellipsis, Search, SquarePen } from "lucide-react";

const SidebarChat = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();

  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);


  if (isUsersLoading) return <SidebarChatSkeleton />;

  return (
    <aside className="flex flex-col h-[calc(100vh-56px)] w-[360px] bg-base-100 relative">
      <div className=" flex flex-col flex-1 gap-2">

        <div className="flex items-end justify-between mx-[16px] mt-[20px] ">
          <span className=" text-[24px] font-bold ">Đoạn Chat</span>
          <div className="flex gap-3">
            <button className="btn btn-circle size-[36px] bg-gray-600 hover:bg-gray-500 ">
              <Ellipsis />
            </button>
            <button className="btn btn-circle size-[36px] bg-gray-600 hover:bg-gray-500 ">
              <SquarePen size={20} />
            </button>
          </div>
        </div>

        <div className="block relative pt-[12px] px-[16px] ">
          <label className="input bg-base-100 rounded-3xl grow-1 border-none  ">
            <Search className=" size-5" />
            <input type="search" className=" font-[Segoe UI Historic] text-[15px]"  required placeholder="Tìm kiếm trên Message"/>
          </label>
        </div>

        <div className="flex justify-start items-center gap-1 ">
          <button className="btn btn-ghost hover:bg-gray-700 rounded-3xl">
              Hộp Thư
          </button>
          <button className="btn btn-ghost hover:bg-gray-700 rounded-3xl">
              Cộng Đồng
          </button>
        </div>

        <div className="block relative">
          
          {users.length === 0 && (
            <div className="flex flex-col basis-full overflow-x-hidden overflow-y-auto overscroll-y-contain relative ">

              <div className=' p-2 flex items-center rounded-xl gap-3 hover:bg-base-100 relative group' >
                <div className="block relative">
                  <img 
                    src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/275603720_667156341070591_6170493892786942129_n.jpg?stp=c7.2.705.705a_cp0_dst-jpg_s40x40_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeElI-6_EPX_qmXiWMm0ZsKoV6B21_LhOXxXoHbX8uE5fPMPJpLM5rRnxRYAJCCfUxOCKpPPslbNVAwKUAZqg-bL&_nc_ohc=JxWtefCWjFMQ7kNvgGCagHl&_nc_oc=AdkdhvQfjsVe8vY1Ewy52SGUlMZYbgvvEA_gbNhSHJ8oKpIB9mUnXjTHja903VOrEFdQyQld8WwkTS3S-Enwbcvo&_nc_zt=24&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=vNnEfDLtitSuk-dvOa3G-Q&oh=00_AYG4LMOODERt7UdJcIHeLKqfPkljtPyiPeZbPG5rn5YVNA&oe=67E99748"
                    alt="avt"className="size-[56px] object-cover rounded-full" />
                  <span className="absolute bottom-0 right-0 size-2 bg-green-500 rounded-full ring-2 ring-zinc-900"/>
                </div>
                <div className=" text-left flex flex-col">
                  <div className="font-medium truncate">Nhật Minh</div>
                  <div className="text-[13px] text-white block ">
                    <span>ok fen </span>
                    <span>.</span>
                    <span>1 phút</span>
                  </div>
                </div>
                <div className="hidden group-hover:block absolute right-0 -translate-x-1/2 ">
                  <button className="btn btn-circle bg-gray-600 ">
                    <Ellipsis />
                  </button>
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
