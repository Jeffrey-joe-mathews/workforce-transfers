// import Image from "next/image";

// const features = [
//   {
//     id: 1,
//     title: 'lorem ipsum',
//     description: 'lorem ipsum dolores some features here to be added ig... welll aaaaaaaaa perfect i suppose but i need more text'
//   },
//   {
//     id: 2,
//     title: 'lorem ipsum',
//     description: 'lorem ipsum dolores some features here to be added ig... welll aaaaaaaaa perfect i suppose but i need more text'
//   },
//   {
//     id: 13,
//     title: 'lorem ipsum',
//     description: 'lorem ipsum dolores some features here to be added ig... welll aaaaaaaaa perfect i suppose but i need more text'
//   },
//   {
//     id: 4,
//     title: 'lorem ipsum',
//     description: 'lorem ipsum dolores some features here to be added ig... welll aaaaaaaaa perfect i suppose but i need more text'
//   },
//   {
//     id: 5,
//     title: 'lorem ipsum',
//     description: 'lorem ipsum dolores some features here to be added ig... welll aaaaaaaaa perfect i suppose but i need more text'
//   },
//   {
//     id: 6,
//     title: 'lorem ipsum',
//     description: 'lorem ipsum dolores some features here to be added ig... welll aaaaaaaaa perfect i suppose but i need more text'
//   }
// ]

// export const Features = () => {
//   return (
//       <section className="bg-white/70 text-black/70 p-5 py-[72px] " >
//         <div className="container">
//           <h2 className=" text-center font-bold text-5xl tracking-tighter " >Services</h2>
//           <p className="text-center mt-5 text-xl text-black/60" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum autem esse ipsum magnam doloremque sit id temporibus numquam quidem doloribus odio consectetur, sint rerum.</p>
//           <div className="mt-16 flex flex-col sm:flex-row gap-4" >
//             {features.map(({title, description, id}) => (
//               <div key={id} className=" border border-black/40 p-5 sm:p-5 md:p-5 text-center rounded-xl flex justify-center items-center sm:flex-row sm:gap-3  md:flex-col sm:flex-[1] grid-cols-1 sm:w-full" > //this part right here AI
//                 <div className="flex sm:flex-[1.5] md:inline-flex h-20 w-20 sm:h-20 sm:w-20 mr-2 p-0 md:w-auto justify-center items-center rounded-lg">
//                   <Image src='/menu.svg' alt="img" width={50} height={50} className="bg-black  object-contain" />
//                 </div>
//                 <div className="sm:flex-[5] md:flex-none p-3" >
//                   <h4 className=" sm:mt-4 md:mt-6 font-bold " >{title}</h4>
//                   <p className="sm:mt-4 md:mt-2 text-black/60" >{description}</p>
//                 </div>
//               </div>
//             ))}

//           </div>
//         </div>
//       </section>
//   );
// };

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
    <section className="bg-white/70 text-black/70 p-5 py-[72px] flex flex-col items-center ">
      <div className="container ">
        <h2 className="text-center font-bold text-5xl tracking-tighter">Services</h2>
        <p className="text-center mt-5 text-xl text-black/60">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum autem esse ipsum magnam doloremque sit id temporibus numquam quidem doloribus odio consectetur, sint rerum.</p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {features.map(({ title, description, id }) => (
            <div key={id} className="max-w-[450px] border border-black/40 p-5 text-center items-center rounded-xl flex flex-row sm:flex-col justify-center gap-4 hover:border-black/70">
              <div className="flex justify-center items-center h-20 w-20 mb-1 flex-[1] ">
                <Image src='/menu.svg' alt="img" width={50} height={50} className="bg-grey object-contain" />
              </div>
              <div className="flex flex-col flex-[5] justify-center items-center p-1" >
                <h4 className="font-bold">{title}</h4>
                <p className="text-black/60">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};