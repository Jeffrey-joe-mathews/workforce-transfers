
import { Feature } from "@/components/Feature";

const features = [
  {
    id: 1,
    title: 'lorem ipsum',
    description: 'lorem ipsum dolores some features here to be added ig... welll aaaaaaaaa perfect i suppose but i need more text'
  },
  {
    id: 2,
    title: 'lorem ipsum',
    description: 'lorem ipsum dolores some features here to be added ig... welll aaaaaaaaa perfect i suppose but i need more text'
  },
  {
    id: 3,
    title: 'lorem ipsum',
    description: 'lorem ipsum dolores some features here to be added ig... welll aaaaaaaaa perfect i suppose but i need more text'
  },
  {
    id: 4,
    title: 'lorem ipsum',
    description: 'lorem ipsum dolores some features here to be added ig... welll aaaaaaaaa perfect i suppose but i need more text'
  },
  {
    id: 5,
    title: 'lorem ipsum',
    description: 'lorem ipsum dolores some features here to be added ig... welll aaaaaaaaa perfect i suppose but i need more text'
  },
  {
    id: 6,
    title: 'lorem ipsum',
    description: 'lorem ipsum dolores some features here to be added ig... welll aaaaaaaaa perfect i suppose but i need more text'
  }
];

export const Features = () => {
  return (
    <section id="features" className="bg-white/70 text-black/70 p-5 py-[72px] flex flex-col items-center ">
      <div className="container ">
        <h2 className="text-center font-bold text-4xl md:text-6xl tracking-tighter bg-gradient-to-b from-black to-[#868d25] text-transparent bg-clip-text mt-6">Services</h2>
        <p className="text-center mt-5 text-xl px-2 md:px-40 text-black/60">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum autem esse ipsum magnam doloremque sit id temporibus numquam quidem doloribus odio consectetur, sint rerum.</p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {features.map(({ title, description, id }) => (
            // <div key={id} className="max-w-[450px] border border-black/40 p-5 text-center items-center rounded-xl flex flex-row sm:flex-col justify-center gap-4 hover:border-black/70">
            //   <div className="flex justify-center items-center h-20 w-20 mb-1 flex-[1] ">
            //     <Image src='/menu.svg' alt="img" width={50} height={50} className="bg-grey object-contain" />
            //   </div>
            //   <div className="flex flex-col flex-[5] justify-center items-center p-1" >
            //     <h4 className="font-bold">{title}</h4>
            //     <p className="text-black/60">{description}</p>
            //   </div>
            // </div>
            <Feature key={id} id={id} title={title} description={description} />
          ))}
        </div>
      </div>
    </section>
  );
};