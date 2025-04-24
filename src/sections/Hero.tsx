import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex h-full md:h-[calc(100vh-80px)] pt pt-8 pb-20 md:pt-4 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#868D2F,#EAEEFE_66%)] items-center justify-center overflow-x-clip" >
      <div className="container p-5 md:flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center h-max md:w-[478px]">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#868d25] text-transparent bg-clip-text mt-6" >Smarter Mobility, Powered by Tech</h1>
            <p className="text-xl text-[#454911] tracking-tight mt-6" >Experience the future of car rentals and employee transportation with our intelligent, app-driven platform. From on-demand rides to scheduled employee commutes, our AI-powered system ensures real-time tracking, seamless bookings, and unmatched reliability. Choose from a modern fleet, monitor every trip, and stay connected through intuitive dashboards. Simplify travel, elevate efficiency—because smart mobility starts here.</p>
            <div className="flex gap-1 items-center mt-[30px] " >
              <button className="btn btn-primary" ><a href="#contact">Get in Touch</a></button>
              <button className="btn btn-text flex items-center justify-center" >
                <span className="text-lg" ><a href="#about">Explore</a></span>
                <span className="flex" >
                  <Image src="./arrow-right.svg" alt="->" width={22} height={22} />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="sm:mt-20 md:flex-[1] md:mt-0 md:h-[648px] lg:mb-20 relative items-center justify-center" >
          {/* <Image src="/heroImage.png" alt="Car Image" layout="fill" objectFit="cover" objectPosition="center" className="lg:h-screen h-72 w-max" /> */}
          <Image
            src="/heroImage.png"
            alt="Car Image"
            width={1200}
            height={800}       
            className="w-full h-auto object-cover md:absolute md:h-full md:max-w-none"
          />
        </div>
      </div>
    </section>
  );
};
