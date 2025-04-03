import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="w-full relative">
      <Navbar />
      <div className="w-full h-screen relative">
        <div className="w-full h-screen relative">
          <div className="w-full h-screen relative">
            <div className="w-full h-[1006px] relative">
              <img
                className="w-full h-[1006px] left-0 top-0 absolute"
                src="/background.png"
              />
              <div className="w-full h-[839px] left-0 top-[167px] absolute bg-gradient-to-b from-white/0 via-white/30 to-white" />
            </div>
            <div className="mx-auto mt-[205px] w-full flex flex-col gap-8 justify-center items-center absolute top-0 ">
              <div className="flex flex-col gap-6 relative ">
                <h1 className="self-stretch text-center justify-start text-white text-[80px] font-normal font-['Alata'] leading-[84px] relative">
                  The World's First Yogasana <br></br> Championship Software
                  <img
                    className="absolute right-10"
                    src="/SoftwareVector.svg"
                  />
                </h1>
                <p className="text-center justify-start text-[#f4f5f7] text-xl font-medium font-['Rethink_Sans'] leading-loose w-full">
                  Experience the future of competition management with Yogasana
                  Bharat—a cutting- <br></br>edge platform designed to
                  streamline every aspect of your championship.
                </p>
              </div>
              <button className="cursor-pointer h-[50px] px-5 py-4 bg-white rounded-[55px] shadow-[0px_0.75px_3.63px_rgba(89,108,148,0.04),0px_6px_29px_rgba(2,162,254,0.25)] inline-flex items-center text-right justify-center text-[#333f47] text-xl font-['Rethink_Sans'] font-semibold leading-normal">
                Get Started for Free
              </button>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto flex items-center justify-center absolute top-3/4">
          <img src="main.png"></img>
          <div className="w-full h-[964px] bg-gradient-to-b from-white/0 via-white/30 to-white absolute z-10 top-0" />
        </div>
      </div>
    </div>
  );
}

export default App;
