import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

function NewPost() {
  return (
    <div className="flex h-8 w-[11.2rem] cursor-pointer items-center gap-4 rounded-full bg-indigo-600 pl-4">
      <span className="font-medium text-white transition-all duration-200 ease-in-out">
        Add New Post
      </span>
      <AddOutlinedIcon
        sx={{
          color: "white",
          transition: "0.2s ease-in-out",
          "&:hover": { color: "black" },
          cursor: "pointer",
        }}
      />
    </div>
  );
}

export default NewPost;
