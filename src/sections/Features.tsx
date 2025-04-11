import Image from "next/image";

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
    id: 13,
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
]

export const Features = () => {
  return (
      <section className="bg-white/70 text-black/70 p-5 py-[72px] " >
        <div className="container">
          <h2 className=" text-center font-bold text-5xl tracking-tighter " >Services</h2>
          <p className="text-center mt-5 text-xl text-black/60" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum autem esse ipsum magnam doloremque sit id temporibus numquam quidem doloribus odio consectetur, sint rerum.</p>
          <div className="mt-16 flex flex-col gap-4" >
            {features.map(({title, description, id}) => (
              <div key={id} className=" border border-black/40 p-5 sm:p-5 md:p-5 text-center rounded-xl flex justify-center items-center sm:flex-row sm:gap-3  md:flex-col " >
                <div className="flex sm:flex-[1.5] md:inline-flex h-16 w-20 sm:h-20 sm:w-20 mr-2 p-0 md:w-auto justify-center items-center rounded-lg">
                  <Image src='/menu.svg' alt="img" width={50} height={50} className="bg-black  object-contain" />
                </div>
                <div className="sm:flex-[5] md:flex-none p-3" >
                  <h4 className=" sm:mt-4 md:mt-6 font-bold " >{title}</h4>
                  <p className="sm:mt-4 md:mt-2 text-black/60" >{description}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
  );
};
