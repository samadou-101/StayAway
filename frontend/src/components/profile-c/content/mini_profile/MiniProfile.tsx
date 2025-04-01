import pic from "../../../../assets/tiger.jpeg";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiNotePencilLight } from "react-icons/pi";

interface MiniProfileProps {
  profileName: string;
  profileMiniBio: string;
  profilePictureUrl: string;
}

const MiniProfile: React.FC<MiniProfileProps> = ({
  profileName,
  profileMiniBio,
  profilePictureUrl,
}) => {
  return (
    <div className="fixed top-1/2 left-[15.8%] flex h-[60%] w-[28rem] -translate-y-[55%] items-center justify-center pt-4">
      <div className="flex h-fit w-[95%] flex-col items-center justify-center gap-6 rounded-[20px] border border-gray-300 p-4 shadow-[0px_2px_8px_5px_rgba(0,0,0,0.1)]">
        <div className="flex h-fit w-[95%] flex-col items-center justify-center gap-[0.9rem] rounded-[10px] border border-gray-300 py-4 shadow-[2px_3px_5px_1px_rgba(0,0,0,0.1)]">
          <div className="flex w-[95%] flex-col items-center">
            <div className="h-36 w-36 overflow-hidden rounded-full">
              <img
                src={profilePictureUrl}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-[0.2rem]">
              <div className="flex w-36 justify-center">
                <span className="text-[30px] font-extrabold">
                  {profileName}
                </span>
              </div>
              <div className="flex w-[80%] justify-center">
                <span className="text-[0.93rem]">{profileMiniBio}</span>
              </div>
            </div>
          </div>
          <div className="flex h-8 w-fit justify-center rounded-[10px]">
            <div className="mt-auto flex h-full w-fit items-center justify-center gap-[0.1rem] rounded-lg border border-gray-300">
              <div className="flex w-fit cursor-pointer items-center justify-between gap-[0.2rem] rounded-md p-[0.3rem]">
                <span className="text-[0.9rem] font-semibold">10k</span>
                <HiOutlineUsers />
              </div>
              <div className="h-full w-[1px] bg-black" />
              <div className="flex w-fit cursor-pointer items-center justify-between gap-[0.2rem] rounded-md p-[0.3rem]">
                <span className="text-[0.9rem] font-semibold">50</span>
                <PiNotePencilLight />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto flex w-fit gap-2">
          <div className="flex cursor-pointer items-center gap-[0.3rem] rounded-full border border-gray-300 p-[0.3rem]">
            <GroupAddOutlinedIcon
              sx={{
                transition: "all 0.2s ease-in-out",
                "&:hover": { color: "green" },
              }}
            />
          </div>
          <div className="flex cursor-pointer items-center gap-[0.3rem] rounded-full border border-gray-300 p-[0.3rem]">
            <SendOutlinedIcon
              sx={{
                transition: "all 0.2s ease-in-out",
                "&:hover": { color: "blue" },
              }}
            />
          </div>
          <div className="flex cursor-pointer items-center gap-[0.3rem] rounded-full border border-gray-300 p-[0.3rem]">
            <MoreVertOutlinedIcon
              sx={{
                transition: "all 0.2s ease-in-out",
                "&:hover": { color: "red" },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniProfile;
