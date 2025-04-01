import Post from "../../../../feed/posts/Post";

function Posts() {
  // Sample data for demonstration; replace with real data as needed
  const samplePosts = [
    {
      profileName: "user 123",
      profileID: "123",
      profileMiniBio: "Just vibing",
      profilePictureUrl:
        "https://imgcdn.stablediffusionweb.com/2024/9/8/9bc3b58a-aca9-4f88-9ecc-6ea2217f7790.jpg",
      pContent: "Enjoying a sunny day! #nature #vibes",
      likes: 42,
      comments: "12",
      shares: 5,
    },
    {
      profileName: "user 123",
      profileID: "123",
      profileMiniBio: "Just vibing",
      profilePictureUrl:
        "https://imgcdn.stablediffusionweb.com/2024/9/8/9bc3b58a-aca9-4f88-9ecc-6ea2217f7790.jpg",
      pContent: "New project in the works... stay tuned!",
      likes: 28,
      comments: "8",
      shares: 3,
    },
    {
      profileName: "user 123",
      profileID: "123",
      profileMiniBio: "Just vibing",
      profilePictureUrl:
        "https://imgcdn.stablediffusionweb.com/2024/9/8/9bc3b58a-aca9-4f88-9ecc-6ea2217f7790.jpg",
      pContent: "Coffee is life ☕",
      likes: 15,
      comments: "5",
      shares: 2,
    },
    {
      profileName: "user 123",
      profileID: "123",
      profileMiniBio: "Just vibing",
      profilePictureUrl:
        "https://imgcdn.stablediffusionweb.com/2024/9/8/9bc3b58a-aca9-4f88-9ecc-6ea2217f7790.jpg",
      pContent: "Throwback to last summer 🌊",
      likes: 60,
      comments: "20",
      shares: 10,
    },
    {
      profileName: "user 123",
      profileID: "123",
      profileMiniBio: "Just vibing",
      profilePictureUrl:
        "https://imgcdn.stablediffusionweb.com/2024/9/8/9bc3b58a-aca9-4f88-9ecc-6ea2217f7790.jpg",
      pContent: "Trying out some new recipes tonight!",
      likes: 35,
      comments: "10",
      shares: 4,
    },
  ];

  return (
    <div className="w-full space-y-6">
      {samplePosts.map((post, index) => (
        <div
          key={index}
          className="w-full rounded-xl border border-gray-300 bg-white shadow-[0px_2px_6px_rgba(0,0,0,0.05)] transition-shadow duration-200 hover:shadow-[0px_4px_12px_rgba(0,0,0,0.1)]"
        >
          <Post
            profileName={post.profileName}
            profileID={post.profileID}
            profileMiniBio={post.profileMiniBio}
            profilePictureUrl={post.profilePictureUrl}
            pContent={post.pContent}
            likes={post.likes}
            comments={post.comments}
            shares={post.shares}
          />
        </div>
      ))}
    </div>
  );
}

export default Posts;
