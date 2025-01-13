import Header from "../dashboard/header/Header";
import Aware from "./awareness/Aware";
import style from "./styles/dashboard.module.css";
function Dashboard() {
  return (
    <div className={style["dash-container"]}>
      <Header />
      <Aware />
    </div>
  );
}

export default Dashboard;
