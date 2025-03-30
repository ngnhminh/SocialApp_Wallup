import { Search, Ellipsis,SquarePen } from "lucide-react";

const ContactsSkeleton = () => {
  // Create 8 skeleton items
  const skeletonContacts = Array(6).fill(null);

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
        <label className="input bg-base-100 rounded-3xl grow-1 border-none !outline-none ">
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
        
        {/* Skeleton Contacts */}
        <div className=" w-full py-3">
        {skeletonContacts.map((_, idx) => (
          <div key={idx} className="w-full p-3 flex items-center gap-3">
            {/* Avatar skeleton */}
            <div className="relative mx-auto lg:mx-0">
              <div className="skeleton size-[56px] rounded-full" />
            </div>

            {/* User info skeleton - only visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0 flex-1">
              <div className="skeleton h-[24px] w-32 mb-2" />
              <div className="skeleton h-3 w-16" />
            </div>
          </div>
        ))}
        </div>
        </div>
    </div>

  </aside>
  );
};

export default ContactsSkeleton;
