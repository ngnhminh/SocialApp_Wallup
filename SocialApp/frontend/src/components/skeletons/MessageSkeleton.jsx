const MessageSkeleton = () => {
    const skeletonMessages = Array(6).fill(null);
    
    return (
      <div className="flex flex-col grow-1 max-h-full overflow-y-auto shrink-1 gap-1">
        {skeletonMessages.map((_, idx) => (
          <div key={idx} className={`chat ${idx % 2 === 0 ? "chat-start" : "chat-end"}`}>
            {idx % 2 === 0 && (

              <div className="chat-image avatar">
                <div className="size-10 rounded-full">
                  <div className="skeleton w-full h-full rounded-full" />
                </div>
              </div>
            )}

            <div className="chat-header mb-1">
              <div className="skeleton h-4 w-16" />
            </div>

            <div className="chat-bubble bg-transparent p-0">
              <div className="skeleton h-14 w-[200px]" />
            </div>
          </div>

        ))}
      </div>
    );
  };
  
  export default MessageSkeleton;
  