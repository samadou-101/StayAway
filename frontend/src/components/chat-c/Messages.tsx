import FeedHeader from "../feed/header/FeedHeader";
import CProfile from "../../assets/tiger.jpeg";
import { FcVideoCall } from "react-icons/fc";
import { IoIosCall } from "react-icons/io";
import { CgMoreVerticalO } from "react-icons/cg";
import MessageOptions from "./MessageOptions";
import ActualChat from "./ActualChat";

function Messages() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-[#c4d7e7] to-[#e0eaf0] p-0">
      <div className="flex h-full w-full overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        {/* Sidebar */}
        <div className="hidden h-full w-1/4 bg-white md:block">
          {/* Sidebar content can be added here */}
        </div>

        {/* Main chat area */}
        <div className="flex h-full w-full flex-col border-l border-gray-100 bg-white md:w-[75%]">
          {/* Chat header */}
          <div className="flex h-14 min-h-[3.5rem] w-full items-center justify-between border-b border-gray-100 px-4 py-2 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 overflow-hidden rounded-full ring-2 ring-blue-100">
                <img
                  src={CProfile}
                  alt="Profile"
                  className="h-full w-full cursor-pointer object-cover"
                />
              </div>
              <div className="hidden md:block">
                <h3 className="font-medium text-gray-800">Tiger Chat</h3>
                <p className="text-xs text-gray-500">Online</p>
              </div>
            </div>

            <div className="flex w-fit items-center gap-5">
              <FcVideoCall className="h-5 w-5 cursor-pointer opacity-80 hover:opacity-100" />
              <IoIosCall className="h-5 w-5 cursor-pointer text-blue-500 opacity-80 hover:opacity-100" />
              <CgMoreVerticalO className="h-5 w-5 cursor-pointer text-gray-600 opacity-80 hover:opacity-100" />
            </div>
          </div>

          {/* Chat content area - made scrollable */}
          <div className="flex h-[calc(100%-7rem)] flex-col justify-between">
            {/* Chat messages - made scrollable */}
            <div className="flex-grow overflow-y-auto p-4">
              <ActualChat />
            </div>

            {/* Enhanced Message input */}
            <div className="border-t border-gray-100 bg-white">
              <MessageOptions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
