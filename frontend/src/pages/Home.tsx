import Feed from "../components/feed/Feed";
import Sidebar from "../components/sidebar/Sidebar";
import Dashboard from "../components/dashboard/Dashboard";
import Messages from "../components/chat-c/Messages";
import { useAppSelector } from "../hooks/ReduxHooks";

function Home() {
  const isFeedVisible = useAppSelector(
    (state) => state.toggleChatOrFeed.feedVisible,
  );
  return (
    <>
      <Sidebar />
      <div
        className={`flex flex-col items-center pl-[19.5rem] ${
          isFeedVisible ? "pr-[19.5rem]" : "pr-[20.1rem]"
        } h-full`}
      >
        {isFeedVisible ? <Feed /> : <Messages />}
      </div>
      <Dashboard />
    </>
  );
}

export default Home;
