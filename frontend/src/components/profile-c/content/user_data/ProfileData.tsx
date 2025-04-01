import Tabs from "../user_data/Tabs";
import Posts from "./posts/Posts";

function ProfileData() {
  return (
    <div className="scrollbar-none fixed top-[5.5rem] left-[41.5%] h-[88.55%] w-[40%] overflow-y-scroll rounded-lg border-t-0 pt-4 shadow-[0px_5px_9px_3px_rgba(0,0,0,0.1)]">
      <div className="flex w-full flex-col items-center justify-center rounded-lg bg-[#f1f5f9] p-4 pb-8">
        <Posts />
      </div>
    </div>
  );
}

export default ProfileData;
