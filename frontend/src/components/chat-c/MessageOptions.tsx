import { HiOutlineEmojiHappy } from "react-icons/hi";
import { GrAttachment } from "react-icons/gr";
import { FaMicrophone } from "react-icons/fa6";
import { SlPicture } from "react-icons/sl";
import { VscSend } from "react-icons/vsc";

function MessageOptions() {
  return (
    <div className="flex w-full items-center justify-between px-3 py-2">
      <div className="flex w-full items-center gap-3">
        <HiOutlineEmojiHappy className="h-5 w-5 cursor-pointer text-gray-500 transition-colors duration-200 hover:text-gray-700" />
        <div className="relative flex-grow">
          <input
            type="text"
            className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm transition-all duration-200 outline-none focus:border-blue-300 focus:bg-white focus:shadow-sm"
            placeholder="Type a message..."
          />
        </div>
        <GrAttachment className="h-5 w-5 cursor-pointer text-gray-500 transition-colors duration-200 hover:text-gray-700" />
        <SlPicture className="h-5 w-5 cursor-pointer text-gray-500 transition-colors duration-200 hover:text-gray-700" />
        <FaMicrophone className="h-5 w-5 cursor-pointer text-gray-500 transition-colors duration-200 hover:text-gray-700" />
      </div>
      <div className="ml-3 flex items-center justify-center">
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white transition-all duration-200 hover:bg-blue-600">
          <VscSend className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default MessageOptions;
