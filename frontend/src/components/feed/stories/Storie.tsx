function Storie() {
  return (
    <div
      className="relative flex h-16 w-16 items-center justify-center rounded-full object-cover"
      style={{
        background:
          "conic-gradient(#098952 0%, #fa7e1e 25%, #d62976 50%, #962fbf 75%, #4f5bd5 100%)",
      }}
    >
      <div className="absolute flex h-[90%] w-[90%] cursor-pointer items-center justify-center rounded-full border-[3px] border-white bg-white">
        <img
          src="https://imgcdn.stablediffusionweb.com/2024/9/8/9bc3b58a-aca9-4f88-9ecc-6ea2217f7790.jpg"
          alt=""
          className="h-full w-full rounded-full object-cover"
        />
      </div>
    </div>
  );
}

export default Storie;
