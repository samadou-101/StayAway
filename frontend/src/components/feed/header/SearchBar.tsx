import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <div className="flex h-8 w-[25rem] items-center justify-start rounded-xl border border-gray-300 px-4">
      <input
        type="text"
        placeholder="Search for friends, pages, groups"
        className="w-3/4 border-none outline-none"
      />
      <SearchIcon
        color="action"
        sx={{
          cursor: "pointer",
          marginLeft: "auto",
          "&:hover": { color: "black" },
        }}
      />
    </div>
  );
}

export default SearchBar;
