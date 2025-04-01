import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

function PostsSeen() {
  return (
    // <div className="mt-4 flex w-full flex-col items-center gap-6">
    <div className="flex w-[17.5rem] items-center rounded-md border border-gray-300 p-6">
      <div className="flex items-center gap-2.5">
        <VisibilityOutlinedIcon
          sx={{
            color: "blue",
          }}
        />
        <span className="text-[15px] font-medium">Posts Seen</span>
      </div>
    </div>
    // </div>
  );
}

export default PostsSeen;
