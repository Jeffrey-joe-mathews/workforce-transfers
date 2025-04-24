import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="py-10 overflow-hidden p-5 h-full flex flex-col items-center justify-center" >
      <div className="container">
         <div className="grid lg:grid-cols-2 items-center lg:gap-16" >

          <div className="hidden lg:block">
            <div className="relative h-[400px] p-10 lg:h-[850px] grid md:grid-cols-2 gap-5 mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]" >
            <Image 
              src="/bg.svg" 
              alt="" 
              fill
              className="object-fit p-10"
              priority
              
            />

            </div>
          </div>

          <div className="flex flex-col gap-5" >
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-center bg-gradient-to-b from-black to-[#868d25] text-transparent bg-clip-text mt-6" >About</h2>
            <p className="text-[#454911] text-xl " >
              <b className="text-2xl" >Smarter Mobility. Safer Commutes. Simplified Operations.</b><br/><br/>
At <b>Workforce Transfers</b>, we’re redefining <b>employee transportation</b> through intelligent, tech-driven solutions that prioritize safety, reliability, and operational excellence. Headquartered in Bangalore, India’s thriving tech capital, we specialize in <b>seamless workforce mobility</b> for corporate clients—ensuring that your employees reach their workplaces on time, comfortably, and safely.
Built on the experience and technology infrastructure garnered from major car rental companies, Workforce Transfers <b>blends legacy excellence with next-gen innovation</b>. Our platform integrates AI-powered scheduling, real-time tracking, and mobile-first interfaces to deliver consistent, efficient service at scale—customized to meet your organizational needs.
              <br /><br />
              <b className="text-2xl">Our Vision</b><br /><br />
              To become India’s most trusted and scalable employee transportation provider, delivering smart mobility across all major metro cities.
              <br />
              <br />
              <b className="text-2xl" >Where We Operate</b><br /><br />
              Currently operational in Bangalore, we are rapidly scaling up and plan to establish full-fledged services in Delhi NCR, Mumbai, Chennai, Hyderabad, Pune, and Kolkata within the next 12 months.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
