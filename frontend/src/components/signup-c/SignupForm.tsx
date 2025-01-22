import style from "./styles/signup.module.css";
import Logo from "../../assets/no-background-logo.png";
import { BiHide, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import { togglePasswordVisibility } from "../../redux/slices/signupSlice";

function SignupForm() {
  const [password, setPassword] = useState<string>("");

  const passwordVisible = useAppSelector(
    (state) => state.signup.passwordVisible
  );
  const dispatch = useAppDispatch();
  const handleTogglePasswordVisibility = () => {
    dispatch(togglePasswordVisibility());
  };

  return (
    <main className={style["signup-container"]}>
      <div className={style["signup-form"]}>
        <span className={style["app-name"]}>
          <img src={Logo} alt="" />
          StayAway
        </span>
        <div className={style["inputs"]}>
          <label htmlFor="username">Username</label>
          <div className={style["username-container"]}>
            <input
              className={style["username"]}
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
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
        <button className={style["signup-btn"]}>Signup</button>
        <div className={style["or"]}>or</div>
        <div className={style["log-with-google"]}>
          <img
            src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
            alt=""
          />
          <span>Signup with Google</span>
        </div>
        <p className={style["no-account"]}>
          You don't have an account? <Link to={"/login"}>login</Link>
        </p>
      </div>
    </main>
  );
}

export default SignupForm;
