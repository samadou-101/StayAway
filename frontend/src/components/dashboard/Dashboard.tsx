import { useAppSelector } from "../../hooks/ReduxHooks";
import Header from "../dashboard/header/Header";
import Aware from "./awareness/Aware";

function Dashboard() {
  const isFeedVisible = useAppSelector(
    (state) => state.toggleChatOrFeed.feedVisible,
  );
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[19.5rem] border-l border-gray-500 ${
        isFeedVisible ? "mr-0" : "mr-[10px]"
      }`}
    >
      <Header />
      <Aware />
    </div>
  );
}

export default Dashboard;
