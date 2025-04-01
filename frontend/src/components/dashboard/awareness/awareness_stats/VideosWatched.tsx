import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";

function VideosWatched() {
  return (
    // <div className="mt-4 flex w-full flex-col items-center gap-6">
    <div className="flex w-[17.5rem] items-center rounded-md border border-gray-300 p-6">
      <div className="flex items-center gap-2.5">
        <VideocamOutlinedIcon
          sx={{
            color: "purple",
          }}
        />
        <span className="text-[15px] font-medium">Videos Watched</span>
      </div>
      {/* Uncomment and convert the inline style to Tailwind if needed */}
      {/* <span className="ml-auto">15</span> */}
    </div>
    // </div>
  );
}

export default VideosWatched;
