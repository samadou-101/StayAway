import { BiShow, BiHide } from "react-icons/bi";
import Logo from "../../assets/no-background-logo.png";
import { RootState } from "../../redux/store";
import { useState } from "react";
import { togglePasswordVisibility } from "../../redux/slices/loginSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login: React.FC = () => {
  interface Inputs {
    email: string;
    password: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useAppDispatch();
  const passwordVisible = useAppSelector(
    (state) => state.login.passwordVisible,
  );
  const [password, setPassword] = useState<string>("");
  const handleTogglePasswordVisibility = () => {
    dispatch(togglePasswordVisibility());
  };

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-[#f1f5f9] pb-40">
      <div className="flex w-fit flex-col items-center gap-4 rounded-lg bg-white p-4 px-12 pb-8 shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
        <span className="flex items-center gap-[0.4rem] pb-2 text-[2.5rem] font-bold">
          <img src={Logo} alt="" className="h-14 w-14 rounded-full" />
          StayAway
        </span>
        <div className="flex w-72 flex-col gap-[0.7rem]">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <div className="flex w-full items-center justify-between rounded-[7px] border border-gray-300 bg-white">
            <input
              className="w-full rounded-[7px] border-none p-[0.3rem] outline-none"
              {...register("email", { required: "Email required!" })}
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <div className="flex w-full items-center justify-between rounded-[7px] border border-gray-300 bg-white pr-[0.2rem]">
            <input
              className="w-[90%] border-none bg-transparent p-[0.3rem]"
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder="Password"
            />
            {password !== "" &&
              (passwordVisible ? (
                <BiShow
                  className="cursor-pointer"
                  onClick={handleTogglePasswordVisibility}
                  size={25}
                />
              ) : (
                <BiHide
                  className="cursor-pointer"
                  onClick={handleTogglePasswordVisibility}
                  size={25}
                />
              ))}
          </div>
        </div>
        <button className="w-full cursor-pointer rounded-[7px] border border-gray-300 p-[0.3rem] font-semibold">
          Login
        </button>
        <div className="relative w-fit text-gray-500 before:absolute before:top-[60%] before:w-12 before:-translate-x-[120%] before:border before:border-gray-500 before:content-[''] after:absolute after:top-[60%] after:w-12 after:translate-x-[20%] after:border after:border-gray-500 after:content-['']">
          or
        </div>
        <div className="flex w-full cursor-pointer justify-center gap-2 rounded-[7px] border border-gray-300 p-1">
          <img
            src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
            alt=""
            className="h-6 w-6 rounded-full"
          />
          <span>Log in with Google</span>
        </div>
        <p className="no-account">
          You don't have an account?{" "}
          <Link to={"/signup"} className="text-[#0077b6]">
            signup
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
