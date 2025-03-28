import { Search, Ellipsis } from "lucide-react";

const ContactsSkeleton = () => {
  // Create 8 skeleton items
  const skeletonContacts = Array(6).fill(null);

  return (
    <aside
      className="h-full lg:w-[360px] w-40 border-r border-base-300 
    flex flex-col transition-all duration-200 px-3 overflow-y-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between pt-[20px] pb-[4px]">
          <span className=" text-gray-200 text-[17px]">Người liên hệ</span>
          <div className="flex cursor-pointer gap-3">
            <div className="flex items-center justify-center size-[32px] rounded-full hover:bg-gray-600">
              <Search size={17}/>
            </div>
            <div className="flex items-center justify-center size-[32px] rounded-full hover:bg-gray-600">
              <Ellipsis size={22} />
            </div>
          </div>
        </div>
      {/* Skeleton Contacts */}
      <div className=" w-full py-3">
        {skeletonContacts.map((_, idx) => (
          <div key={idx} className="w-full p-3 flex items-center gap-3">
            {/* Avatar skeleton */}
            <div className="relative mx-auto lg:mx-0">
              <div className="skeleton size-10 rounded-full" />
            </div>

            {/* User info skeleton - only visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0 flex-1">
              <div className="skeleton h-3 w-32 mb-2" />
              <div className="skeleton h-2 w-16" />
            </div>
          </div>
        ))}
      </div>

      <div className=" border-b border-gray-600"></div> 

      {/* Header */}
      <span className=" text-gray-200 text-[17px] pt-[20px] pb-[4px]">Nhóm chat</span>

      {/* Skeleton Contacts */}
      <div className=" w-full py-3">
        {skeletonContacts.map((_, idx) => (
          <div key={idx} className="w-full p-3 flex items-center gap-3">
            {/* Avatar skeleton */}
            <div className="relative mx-auto lg:mx-0">
              <div className="skeleton size-10 rounded-full" />
            </div>

            {/* User info skeleton - only visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0 flex-1">
              <div className="skeleton h-3 w-32 mb-2" />
              <div className="skeleton h-2 w-16" />
            </div>
          </div>
        ))}
      </div>

    </aside>
  );
};

export default ContactsSkeleton;
