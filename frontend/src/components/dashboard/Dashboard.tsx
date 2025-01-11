import Header from "../dashboard/header/Header";
import style from "./styles/dashboard.module.css";
function Dashboard() {
  return (
    <div className={style["dash-header"]}>
      <Header />
    </div>
  );
}

export default Dashboard;
