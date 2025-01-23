import { useParams } from "react-router";
import MiniProfile from "../components/profile-c/content/mini_profile/MiniProfile";
import ProfileData from "../components/profile-c/content/user_data/ProfileData";
import Tabs from "../components/profile-c/content/user_data/Tabs";
import ProfileHeader from "../components/profile-c/header/ProfileHeader";
const Profile: React.FC = () => {
  const { id } = useParams();
  let profileName = "";
  let profileMiniBio = "";
  let profilePictureUrl = "";
  if (id === "123") {
    profileName = "user 123";
    profileMiniBio = "";
    profilePictureUrl =
      " https://imgcdn.stablediffusionweb.com/2024/9/8/9bc3b58a-aca9-4f88-9ecc-6ea2217f7790.jpg";
  }
  return (
    <>
      {/* <Sidebar /> */}
      <ProfileHeader />
      <div
        className="profile-page-container"
        style={{
          display: "flex",
          minHeight: "100vh",
          // backgroundColor: "gray",
          // flexDirection: "column",
          gap: "1rem",
          paddingLeft: "15.95%",
          paddingRight: "15.85%",
        }}
      >
        <div
          className="profile-content"
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            marginTop: "4.5rem",
            // borderRadius: "20px",
            paddingLeft: "28rem",
            // backgroundColor: "#E0E7FF",
          }}
        >
          <MiniProfile
            profileName={profileName}
            profileMiniBio={profileMiniBio}
            profilePictureUrl={profilePictureUrl}
          />
          <Tabs />
          <ProfileData />
        </div>
      </div>
    </>
  );
};

export default Profile;
