import TestimonialsColumn from "@/components/testimonialsColumn";
import Image from "next/image";

export const About = () => {
  return (
    <section className="py-10 overflow-hidden p-5 flex flex-col items-center justify-center" >
      <div className="container">
         <div className="grid lg:grid-cols-2 items-center lg:gap-16" >

          <div>
            <div className="relative  h-[400px] lg:h-[900px] grid md:grid-cols-2 gap-5 mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]" >
            <Image 
              src="/bg.svg" 
              alt="" 
              fill
              className="object-cover"
              priority
            />

            </div>
          </div>

          <div>
            <h2 className="text-6xl font-medium mt-6" >About</h2>
            <p className="text-black/70 " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio, explicabo dolore totam veritatis, eos reprehenderit animi similique voluptates fugiat officiis nulla, iure ducimus eligendi ipsam eaque. Fugit, maxime similique? Inventore dicta nostrum placeat dolore!</p>
          </div>

        </div>
      </div>
    </section>
  );
};
