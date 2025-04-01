import Logo from "./header/Logo.tsx";
import Search from "./header/Search.tsx";
import Nav from "./nav/Nav";
import ProfileLogout from "./profile/ProfileLogout";

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-[19.5rem] border-r border-gray-500">
      <Logo />
      <div className="flex flex-col p-4 pt-7">
        <Search />
        <Nav />
        <ProfileLogout />
      </div>
    </div>
  );
}

export default Sidebar;
