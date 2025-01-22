import style from "./styles/login.module.css";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import Logo from "../../assets/no-background-logo.png";
import { RootState } from "../../redux/store";
import { useState } from "react";
import { togglePasswordVisibility } from "../../redux/slices/loginSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const passwordVisible = useAppSelector(
    (state) => state.login.passwordVisible
  );
  const [password, setPassword] = useState<string>("");
  const handleTogglePasswordVisibility = () => {
    dispatch(togglePasswordVisibility());
  };

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
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder="Password"
            />
            {password !== "" &&
              (passwordVisible ? (
                <BiShow
                  className={style["show-hide"]}
                  onClick={handleTogglePasswordVisibility}
                  size={25}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <BiHide
                  className={style["show-hide"]}
                  onClick={handleTogglePasswordVisibility}
                  size={25}
                  style={{ cursor: "pointer" }}
                />
              ))}
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
          You don't have an account? <Link to={"/signup"}>signup </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
