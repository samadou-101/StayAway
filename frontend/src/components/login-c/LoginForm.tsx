import style from "./styles/login.module.css";
import { BiShow } from "react-icons/bi";
import Logo from "../../assets/no-background-logo.png";
function Login() {
  return (
    <main className={style["login-container"]}>
      <div className={style["login-form"]}>
        <span className={style["app-name"]}>
          <img src={Logo} alt="" />
          StayAway
        </span>
        <div className={style["inputs"]}>
          <label htmlFor="email">Email</label>
          <div className={style["email-container"]}>
            <input
              className={style["email"]}
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <label htmlFor="password"> Password</label>
          <div className={style["password-container"]}>
            <input
              className={style["password"]}
              type="password"
              id="password"
              placeholder="Password"
            />
            <BiShow
              className={style["show-hide"]}
              size={25}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <button className={style["login-btn"]}>Login</button>
        <div className={style["or"]}>or</div>
        <div className={style["log-with-google"]}>
          <img
            src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
            alt=""
          />
          <span>Log in with Google</span>
        </div>
        <p className={style["no-account"]}>
          You don't have an account? <a href="">signup</a>
        </p>
      </div>
    </main>
  );
}

export default Login;
