import image from "../../../assets/no-background-logo.png";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

function ProfileLogout() {
  return (
    <div className="mt-[100%] flex h-[4.3rem] w-[17.5rem] items-center gap-2 pr-4">
      <div className="h-10 w-10 overflow-hidden rounded-full">
        <img
          src={image}
          className="h-full w-full cursor-pointer"
          alt="Profile"
        />
      </div>
      <span className="cursor-pointer font-semibold">Profile Name</span>
      <LogoutOutlinedIcon
        color="action"
        sx={{
          marginLeft: "auto",
          cursor: "pointer",
          "&:hover": { color: "black" },
        }}
      />
    </div>
  );
}

export default ProfileLogout;
