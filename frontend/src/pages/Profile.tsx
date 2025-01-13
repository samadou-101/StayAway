import MiniProfile from "../components/profile-c/content/mini_profile/MiniProfile";
import ProfileData from "../components/profile-c/content/user_data/ProfileData";
import Tabs from "../components/profile-c/content/user_data/Tabs";
import ProfileHeader from "../components/profile-c/header/ProfileHeader";
function Profile() {
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
          <MiniProfile />
          <Tabs />
          <ProfileData />
        </div>
      </div>
    </>
  );
}

export default Profile;
