import HistoryToggleOffOutlinedIcon from "@mui/icons-material/HistoryToggleOffOutlined";

function TimeSpent() {
  return (
    // <div className="mt-4 flex w-full flex-col items-center gap-6">
    <div className="flex w-[17.5rem] items-center rounded-md border border-gray-300 p-6">
      <div className="flex items-center gap-2.5">
        <HistoryToggleOffOutlinedIcon
          sx={{
            color: "orange",
          }}
        />
        <span className="text-[15px] font-medium">Time Spent</span>
      </div>
    </div>
    // </div>
  );
}

export default TimeSpent;
