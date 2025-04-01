import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import AwareStats from "./awareness_stats/AwareStats";

function Aware() {
  return (
    <div className="flex w-full flex-col">
      <div className="m-4 flex items-center justify-between border-b border-gray-500 pb-4">
        <div className="flex items-center">
          <span className="text-lg font-semibold">Awareness</span>
        </div>
        <div className="flex h-8 items-center gap-2">
          <QueryStatsOutlinedIcon
            sx={{
              color: "#38b000",
              cursor: "pointer",
              "&:hover": { color: "black" },
            }}
          />
        </div>
      </div>
      <AwareStats />
    </div>
  );
}

export default Aware;
