function Tabs() {
  return (
    <div className="fixed top-[5.5rem] left-[41.5%] z-[999] flex w-[40%] flex-row items-start justify-center rounded-lg rounded-b-none border border-b-0 border-gray-300 bg-[#dadadb]">
      <input
        type="radio"
        name="tab"
        id="tab1"
        className="peer/tab1 absolute z-[99] h-fit w-[130px] opacity-0 outline-none"
      />
      <label
        className="relative flex h-7 w-[130px] cursor-pointer items-center justify-center text-[0.9rem] font-semibold text-black opacity-80"
        htmlFor="tab1"
      >
        About
      </label>
      <input
        type="radio"
        name="tab"
        id="tab2"
        className="peer/tab2 absolute z-[99] h-fit w-[130px] opacity-0 outline-none"
      />
      <label
        className="relative flex h-7 w-[130px] cursor-pointer items-center justify-center text-[0.9rem] font-semibold text-black opacity-80"
        htmlFor="tab2"
      >
        Followers
      </label>
      <input
        type="radio"
        name="tab"
        id="tab3"
        className="peer/tab3 absolute z-[99] h-fit w-[130px] opacity-0 outline-none"
      />
      <label
        className="relative flex h-7 w-[130px] cursor-pointer items-center justify-center text-[0.9rem] font-semibold text-black opacity-80"
        htmlFor="tab3"
      >
        Posts
      </label>
      <input
        type="radio"
        name="tab"
        id="tab4"
        className="peer/tab4 absolute z-[99] h-fit w-[130px] opacity-0 outline-none"
      />
      <label
        className="relative flex h-7 w-[130px] cursor-pointer items-center justify-center text-[0.9rem] font-semibold text-black opacity-80"
        htmlFor="tab4"
      >
        Images
      </label>
      <div className="absolute left-[16%] h-full w-[8.1rem] cursor-pointer rounded-[10px] border border-[rgba(0,0,0,0.2)] bg-transparent shadow-[0px_4px_10px_rgba(0,0,0,0.1),inset_0px_1px_3px_rgba(255,255,255,0.2)] transition-all duration-300 ease-in-out peer-checked/tab1:left-[16%] peer-checked/tab2:left-[33%] peer-checked/tab3:left-[50%] peer-checked/tab4:left-[67%]"></div>
    </div>
  );
}

export default Tabs;
