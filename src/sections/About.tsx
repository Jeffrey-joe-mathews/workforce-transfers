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
            <p className="text-[#454911] text-xl " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio, explicabo dolore totam veritatis, eos reprehenderit animi similique voluptates fugiat officiis nulla, iure ducimus eligendi ipsam eaque. Fugit, maxime similique? Inventore dicta nostrum placeat dolore!</p>
          </div>

        </div>
      </div>
    </section>
  );
};
