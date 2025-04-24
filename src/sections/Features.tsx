
import { Feature } from "@/components/Feature";

const features = [
  {
    id: 1,
    title: 'Tech-Powered Platform',
    description: `From live tracking and automated routing to driver behavior analytics, our systems are designed to optimize every trip.`,
    src: './tech.svg'
    
  },
  {
    id: 2,
    title: '24/7 Operations',
    description: 'Round-the-clock support and dispatch centers ensure zero downtime for your transportation needs',
    src: './support.svg'
  },
  {
    id: 3,
    title: 'Driver Excellence',
    description: 'All chauffeurs are medically certified, police-verified, and trained in defensive driving and customer service',
    src: './driver.svg'
  },
  {
    id: 4,
    title: 'Flexible Models',
    description: 'Choose from shared or dedicated vehicles, shuttle routes, or on-demand models—scalable as your workforce grows',
    src: './flexible.svg'
  },
  {
    id: 5,
    title: 'Safety First',
    description: 'Every vehicle is GPS-enabled, and all rides are monitored through our central command system.',
    src: './safety.svg'
  },
  {
    id: 6,
    title: 'Sustainability Ready',
    description: 'We are aligned with green mobility goals and are integrating EVs and low-emission vehicles into our fleet.',
    src: './sustainable.svg'
  }
];

export const Features = () => {
  return (
    <section id="features" className="bg-white/70 text-black/70 p-5 py-[72px] flex flex-col items-center ">
      <div className="container ">
        <h2 className="text-center font-bold text-4xl md:text-6xl tracking-tighter bg-gradient-to-b from-black to-[#868d25] text-transparent bg-clip-text mt-6">Services</h2>
        <p className="text-center mt-5 text-xl px-2 md:px-40 text-black/60">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum autem esse ipsum magnam doloremque sit id temporibus numquam quidem doloribus odio consectetur, sint rerum.</p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {features.map(({ title, description, id, src }) => (
            // <div key={id} className="max-w-[450px] border border-black/40 p-5 text-center items-center rounded-xl flex flex-row sm:flex-col justify-center gap-4 hover:border-black/70">
            //   <div className="flex justify-center items-center h-20 w-20 mb-1 flex-[1] ">
            //     <Image src='/menu.svg' alt="img" width={50} height={50} className="bg-grey object-contain" />
            //   </div>
            //   <div className="flex flex-col flex-[5] justify-center items-center p-1" >
            //     <h4 className="font-bold">{title}</h4>
            //     <p className="text-black/60">{description}</p>
            //   </div>
            // </div>
            <Feature key={id} id={id} title={title} description={description} src={src} />
          ))}
        </div>
      </div>
    </section>
  );
};