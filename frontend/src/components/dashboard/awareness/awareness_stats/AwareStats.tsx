import PostsSeen from "./PostsSeen";
import TimeSpent from "./TimeSpent";
import VideosWatched from "./VideosWatched";

function AwareStats() {
  return (
    <div className="mt-4 flex w-full flex-col items-center gap-6">
      <TimeSpent />
      <PostsSeen />
      <VideosWatched />
    </div>
  );
}

export default AwareStats;
