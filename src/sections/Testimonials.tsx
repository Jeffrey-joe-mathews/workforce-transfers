import TestimonialsColumn from "@/components/testimonialsColumn";

const testimonials = [
  {
    text: "Workforce Transfers combines comfort, safety, and professionalism flawlessly",
    imageSrc: "avatar-1.png",
    name: "Vilas Badarinath",
    username: "@vilasbadarinath",
  },
  {
    text: "Seamless booking, punctual drivers — Workforce Transfers keeps our teams moving!",
    imageSrc: "avatar-2.png",
    name: "Srikanth B",
    username: "@SrikanthB",
  },
  {
    text: "From booking to drop-off, Workforce Transfers makes corporate travel effortless.",
    imageSrc: "avatar-3.png",
    name: "Waheed Raza",
    username: "@WaheedRaza",
  },
  {
    text: "Exceptional service and spotless vehicles — our trusted partner for employee transport.",
    imageSrc: "avatar-4.png",
    name: "Imran CA",
    username: "@ImranCA",
  },
  {
    text: "The perfect transportation partner for companies that value reliability and service.",
    imageSrc: "avatar-5.png",
    name: "Manjunath krishnappa",
    username: "@Manjunathkrishnappa",
  },
  {
    text: "Dependable transport solutions that power our business forward!",
    imageSrc: "avatar-6.png",
    name: "Rebu Samuel",
    username: "@RebuSamuel"
  }
  // {
  //   text: "The customizability and integration capabilities of this app are top-notch.",
  //   imageSrc: "avatar-6.png",
  //   name: "Riley Smith",
  //   username: "@rileysmith1",
  // },
  // {
  //   text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
  //   imageSrc: "avatar-7.png",
  //   name: "Jordan Patels",
  //   username: "@jpatelsdesign",
  // },
  // {
  //   text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
  //   imageSrc: "avatar-8.png",
  //   name: "Sam Dawson",
  //   username: "@dawsontechtips",
  // },
  // {
  //   text: "Its user-friendly interface and robust features support our diverse needs.",
  //   imageSrc: "avatar-9.png",
  //   name: "Casey Harper",
  //   username: "@casey09",
  // },
];

export type testimonialsType = typeof testimonials;

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-10 overflow-hidden p-5 flex flex-col items-center justify-center" >
      <div className="container">
         <div className="grid lg:grid-cols-2 items-center lg:gap-16" >
          <div className="flex flex-col gap-5" >
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-center bg-gradient-to-b from-black to-[#868d25] text-transparent bg-clip-text mt-6" >Testimonials</h2>
            <p className="text-[#454911] text-xl" >We take pride in delivering consistent, reliable service. But don’t just take our word for it—see what our clients have to say</p>
          </div>
          <div>
            <div className="h-[400px] lg:h-[800px] grid md:grid-cols-2 gap-5 mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]" >
            {/* <div className="flex flex-col gap-4 pb-4" >
              { testimonials.map((testimonial) => (
                <div className="bg-white border border-black/20 rounded-3xl p-6" key ={testimonial.username} >
                  <div className="flex justify-center " >
                      <Image src={`/${testimonial.imageSrc}`} alt={testimonial.username} width={300} height={300} className="size-24" />
                  </div>
                  <h4 className="text-3xl text-center mt-4" >{testimonial.name}</h4>
                  <p className="text-center text-black/60 mt-2" >{testimonial.text}</p>
                </div>
              )) }
            </div> */}
            < TestimonialsColumn testimonials={testimonials} />
            < TestimonialsColumn testimonials={testimonials.slice().reverse()} className="hidden md:flex" reverse />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
