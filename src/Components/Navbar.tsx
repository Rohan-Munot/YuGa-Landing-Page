function Navbar() {
  return (
    <nav className="font-[Alata] flex text-sm absolute z-10 w-full items-center justify-center">
      <div className="flex gap-[180px] w-full h-[60px] px-10 py-3 bg-white rounded-[111px] flex-ro justify-centerw items-center mx-[60px] mt-12">
        <span className=" justify-center text-[#333f47] text-[28px] font-normal leading-normal">
          YuGa
        </span>
        <div className="flex flex-row gap-[180px] w-full justify-around">
          <div className="flex flex-row gap-10 justify-center items-center">
            <a
              href="#"
              className="text-center justify-center text-[#333f47] text-base font-medium font-['Rethink_Sans'] leading-normal"
            >
              Features
            </a>
            <a
              href="#"
              className="text-center justify-center text-[#333f47] text-base font-medium font-['Rethink_Sans'] leading-normal"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-center justify-center text-[#333f47] text-base font-medium font-['Rethink_Sans'] leading-normal"
            >
              About
            </a>
            <a
              href="#"
              className="text-center justify-center text-[#333f47] text-base font-medium font-['Rethink_Sans'] leading-normal"
            >
              Pricing
            </a>
          </div>
          <div className="flex flex-row gap-6">
            <button className="cursor-pointer h-9 px-4 py-2 bg-[#222222] rounded-[444px] shadow-[0px_0.7512931227684021px_3.6312501430511475px_0px_rgba(89,108,148,0.04),0px_6px_29px_0px_rgba(2,162,254,0.25)] outline-1 outline-offset-[-0.50px] outline-[#dfe3e8] inline-flex justify-center items-center gap-2">
              <div className="justify-start text-white text-sm font-semibold font-['Rethink_Sans'] leading-tight">
                Talk To Sales
              </div>
            </button>
            <button className="cursor-pointer h-9 px-4 py-2 rounded-[444px] shadow-[0px_5px_22.700000762939453px_0px_rgba(0,0,0,0.15)]  outline-1 outline-offset-[-0.50px] outline-[#333f47] inline-flex justify-center items-center gap-2">
              <div className="justify-start text-[#333f47] text-sm font-semibold font-['Rethink_Sans'] leading-tight">
                Get Started For Free
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
