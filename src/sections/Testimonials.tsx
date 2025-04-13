import TestimonialsColumn from "@/components/testimonialsColumn";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: "avatar-1.png",
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: "avatar-2.png",
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: "avatar-3.png",
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: "avatar-4.png",
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: "avatar-5.png",
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: "avatar-6.png",
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: "avatar-7.png",
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: "avatar-8.png",
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: "avatar-9.png",
    name: "Casey Harper",
    username: "@casey09",
  },
];

export type testimonialsType = typeof testimonials;

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-10 overflow-hidden p-5 flex flex-col items-center justify-center" >
      <div className="container">
         <div className="grid lg:grid-cols-2 items-center lg:gap-16" >
          <div className="flex flex-col gap-5" >
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-center bg-gradient-to-b from-black to-[#868d25] text-transparent bg-clip-text mt-6" >Testimonials</h2>
            <p className="text-[#454911] text-xl" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio, explicabo dolore totam veritatis, eos reprehenderit animi similique voluptates fugiat officiis nulla, iure ducimus eligendi ipsam eaque. Fugit, maxime similique? Inventore dicta nostrum placeat dolore!</p>
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
