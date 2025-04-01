import logo from "../../../assets/no-background-logo.png";

function Logo() {
  return (
    <div className="flex h-16 w-full items-center justify-center gap-2.5 border-b border-gray-500">
      <div className="h-12 w-12 overflow-hidden rounded-full">
        <img className="w-full object-cover" src={logo} alt="Logo" />
      </div>
      <span className="text-3xl font-bold">StayAway</span>
    </div>
  );
}

export default Logo;
