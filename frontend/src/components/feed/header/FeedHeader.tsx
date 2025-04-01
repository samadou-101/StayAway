import NewPost from "./NewPost";
import SearchBar from "./SearchBar";

function FeedHeader() {
  return (
    <div className="flex h-[4.2rem] w-full items-center justify-between border-b border-gray-300 px-32">
      <SearchBar />
      <NewPost />
    </div>
  );
}

export default FeedHeader;
