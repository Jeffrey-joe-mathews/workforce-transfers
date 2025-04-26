import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex h-full md:h-[calc(100vh-80px)] pt pt-0 pb-0 md:pt-4 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#868D2F,#EAEEFE_66%)] items-center justify-center overflow-x-clip" >
      <div className="container p-5 md:flex items-center justify-center">
        <div className="flex flex-col items-center justify-center mr-12">
          <div className="flex flex-col justify-center items-center h-max md:w-[478px]">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#868d25] text-transparent bg-clip-text mt-6" >Smarter Mobility, Powered by Tech</h1>
            <p className="text-xl text-[#454911] tracking-tight mt-6" ><span>Experience the future of car rentals and employee transportation with our intelligent, app-driven platform.</span> &nbsp;
            <span className="hidden md:inline" >From on-demand rides to scheduled employee commutes, our AI-powered system ensures real-time tracking, seamless bookings, and unmatched reliability.</span> Choose from a modern fleet, monitor every trip, and stay connected through intuitive dashboards. <span className="hidden md:inline" >Simplify travel, elevate efficiency—because smart mobility starts here.</span></p>
            <div className="flex gap-1 items-center mt-[30px] " >
              <button className="btn btn-primary" ><a href="#contact">Get in Touch</a></button>
              <button className="btn btn-text flex items-center justify-center" >
                <span className="text-lg" ><a href="#logotic">Explore</a></span>
                <span className="flex" >
                  <Image src="./arrow-right.svg" alt="->" width={22} height={22} />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center w-full md:flex-1 md:h-[648px] h-[400px] mt-0 ml-0 md:mt-0 lg:ml-12 lg:mb-20">
  <Image
    src="/heroImage.png"
    alt="Car Image"
    width={1200}
    height={800}
    priority
    className="
      w-full 
      h-full 
      object-contain 
      md:object-left md:object-cover 
      lg:object-contain 
      sm:static md:absolute
    "
  />
</div>

      </div>
    </section>
  );
};
