import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="relative w-full min-h-screen ">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen">
        {/* Background Image & Gradient */}
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/background.png"
            alt="Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/30 to-white" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 pt-[205px] container mx-auto px-4 flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-6 max-w-[1200px]">
            <h1 className="text-center text-white text-[80px] font-normal font-['Alata'] leading-[84px] relative">
              The World's First Yogasana <br /> Championship Software
              <img
                className="absolute right-40"
                src="/SoftwareVector.svg"
                alt="Vector"
              />
            </h1>
            <p className="text-center text-[#f4f5f7] text-xl font-medium font-['Rethink_Sans'] leading-loose w-full">
              Experience the future of competition management with Yogasana
              Bharat—a cutting-edge platform designed to streamline every aspect
              of your championship.
            </p>
          </div>
          <button className="cursor-pointer h-[50px] px-5 py-4 bg-white rounded-[55px] shadow-[0px_0.75px_3.63px_rgba(89,108,148,0.04),0px_6px_29px_rgba(2,162,254,0.25)] inline-flex items-center text-right justify-center text-[#333f47] text-xl font-['Rethink_Sans'] font-semibold leading-normal">
            Get Started for Free
          </button>
        </div>
      </section>

      {/* Main App Visual */}
      <section className="relative w-full flex justify-center mt-[-15vh]">
        <div className="relative z-0 w-full flex justify-center">
          <img src="/main.png" alt="Application Interface" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-transparent via-white/30 to-white" />
      </section>

      <section className="relative w-full ">
        <div className="container relative mx-auto flex flex-col items-center">
          <h2 className="w-full max-w-[620px] text-center relative text-[#1c1b1b] text-[52px] font-normal font-['Alata'] leading-[62px] mb-16">
            Championship Excellence, Proven by{" "}
            <span className="inline-block px-2 bg-[#e6e6ff] rounded-[100px]">
              Numbers
            </span>
            <img
              src="/championVector.svg"
              className="absolute top-15 z-0 left-8"
              alt="Champion Vector"
            />
          </h2>
          <div className="w-full max-w-[759px]">
            <div className="relative bg-[#e2eaff] py-[34px] px-8 rounded-[30px]">
              <p className="text-center text-black text-lg font-normal font-['Rethink_Sans'] leading-[38px] max-w-[594px] mx-auto">
                Join the platform that's transforming competition
                management—over 250 championships organized, 3000+ athletes
                empowered, and 100,000+ events logged. Experience the future of
                Yogasana excellence today. Join now
              </p>
              <div className="absolute top-8 left-6 flex flex-row gap-0.5">
                <img src="/invertedComma1.png" alt="Quote" />
                <img src="/invertedComma1.png" alt="Quote" />
              </div>
              <div className="absolute bottom-8 right-12 flex flex-row gap-0.5">
                <img src="/invertedComma2.png" alt="Quote" />
                <img src="/invertedComma2.png" alt="Quote" />
              </div>
            </div>
          </div>

          <>
            <div className="absolute  -top-8 left-30 z-10">
              <img
                src="/Ellipse1.png"
                alt="Champion"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-35 left-0 z-10">
              <img
                src="/Ellipse2.png"
                alt="Champion"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute  top-55 left-20 z-10">
              <img
                src="/Ellipse3.png"
                alt="Champion"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute  top-95 left-0 z-10">
              <img
                src="/Ellipse4.png"
                alt="Champion"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-8 right-30 z-10">
              <img
                src="/Ellipse1.png"
                alt="Champion"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-35 right-0 z-10">
              <img
                src="/Ellipse2.png"
                alt="Champion"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute  top-55 right-20 z-10">
              <img
                src="/Ellipse3.png"
                alt="Champion"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute  top-95 right-0 z-10">
              <img
                src="/Ellipse4.png"
                alt="Champion"
                className="w-full h-auto"
              />
            </div>
          </>
        </div>
      </section>
      <section className="relative py-20 w-full flex items-center justify-center">
        <div className="w-full justify-center relative flex flex-col items-center">
          <img src="/longLine.svg" className="my-2 mb-2"></img>
          <div className=" h-[196px] absolute left-[55px] top-1/5 ">
            <div className="inline-flex flex-col justify-start items-start gap-4">
              <div className="flex flex-col justify-start items-start gap-4 relative">
                <img
                  src="/championVector.svg"
                  className="absolute top-15 right-40 min-w-[329px]"
                />
                <h1 className=" justify-start text-[#04070d] text-[52px] font-normal font-['Alata'] leading-[62px]">
                  250+ Championships <br></br> Organized
                </h1>
                <span className=" justify-start text-[#737677] text-lg font-normal font-['Rethink_Sans'] leading-7">
                  Our platform powers over 250 successful championships,
                  delivering seamless<br></br> event management and top-tier
                  competition experiences.
                </span>
              </div>
            </div>
          </div>
          <div className=" h-[196px] absolute right-[55px] top-2/5 ">
            <div className="inline-flex flex-col justify-start items-start gap-4">
              <div className="flex flex-col justify-start items-start gap-4 relative">
                <img
                  src="/championVector.svg"
                  className="absolute bottom-22 left-0 min-w-[329px]"
                />
                <h1 className=" justify-start text-[#04070d] text-[52px] font-normal font-['Alata'] leading-[62px]">
                  3,000+ Athletes<br></br> Empowered
                </h1>
                <span className=" justify-start text-[#737677] text-lg font-normal font-['Rethink_Sans'] leading-7">
                  Over 3,000 athletes trust our system to manage and celebrate
                  their achievements.<br></br> Be part of a community that’s
                  redefining excellence and driving competitive<br></br> spirit!
                </span>
              </div>
            </div>
          </div>
          <div className=" h-[196px] absolute left-[55px] top-2/3 ">
            <div className="inline-flex flex-col justify-start items-start gap-4">
              <div className="flex flex-col justify-start items-start gap-4 relative">
                <img
                  src="/championVector.svg"
                  className="absolute top-15 left-0 min-w-[210px]"
                />
                <h1 className=" justify-start text-[#04070d] text-[52px] font-normal font-['Alata'] leading-[62px]">
                  100,000+ Events<br></br> Logged
                </h1>
                <span className=" justify-start text-[#737677] text-lg font-normal font-['Rethink_Sans'] leading-7">
                  Over 3,000 athletes trust our system to manage and celebrate
                  their<br></br> achievements. Be part of a community that’s
                  redefining excellence and<br></br> driving competitive spirit!
                </span>
              </div>
            </div>
          </div>
          <button className="h-[50px] px-[25px] py-4 bg-[#1256fb] rounded-[100px] outline-1 mt-5 outline-offset-[-1px] outline-[#2b59fc] inline-flex justify-center items-center gap-2.5 text-white text-xl font-semibold font-['Rethink_Sans'] leading-normal cursor-pointer">
            Sign up for free
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
