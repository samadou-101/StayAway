import { useAppSelector } from "../../hooks/ReduxHooks";
import Header from "../dashboard/header/Header";
import Aware from "./awareness/Aware";
import style from "./styles/dashboard.module.css";
function Dashboard() {
  const isFeedVisible = useAppSelector(
    (state) => state.toggleChatOrFeed.feedVisible
  );
  return (
    <div
      className={style["dash-container"]}
      style={{ marginRight: isFeedVisible ? "0px " : "10px" }}
    >
      <Header />
      <Aware />
    </div>
  );
}

export default Dashboard;
