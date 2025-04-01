import SearchIcon from "@mui/icons-material/Search";

function Search() {
  return (
    <div className="flex h-10 w-[17.5rem] items-center gap-2 overflow-hidden rounded-[20px] border border-gray-500 pr-3 pl-3">
      <input
        type="text"
        placeholder="Search..."
        className="border-none bg-transparent outline-none"
      />
      <SearchIcon
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

export default Search;
