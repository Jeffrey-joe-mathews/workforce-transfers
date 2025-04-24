// components/Services.tsx
'use client'

import React from 'react'
import Image from "next/image"

// const services = [
//   {
//     id: 1,
//     title: "Chauffeur Drive Services",
//     description: "At Workforce Transfers, we offer premium chauffeur-driven car rental solutions designed for both corporate and personal travel needs. Our tech-enabled platform ensures seamless booking, real-time tracking, and professional service—whether it's for a boardroom arrival, executive movement, or airport transfer. Our diverse fleet includes economy cars, multi-utility vans, executive sedans, SUVs, and a curated selection of luxury vehicles from brands like BMW, Mercedes-Benz, and Audi—offering unmatched comfort and style for your leadership teams or VIP guests. Whether you require a car for a few hours, full-day use, or monthly hire, our trained chauffeurs, real-time dashboards, and customizable packages guarantee a smooth, secure, and professional experience—every time.",
//     src: "/chauffeur.jpg" // Add proper image paths
//   },
//   {
//     id: 2,
//     title: "Airport Transfer Services",
//     description: "At Workforce Transfers, we specialize in reliable, cost-effective airport transfer solutions tailored for corporate and business travel. Whether it's a single executive or an entire team, our chauffeur-driven vehicles ensure timely pickups and drop-offs to and from the airport—24/7. Our well-maintained fleet includes everything from mid-size sedans to multi-utility vehicles and premium cars, all offered at competitive, economical rates without compromising on comfort or service quality. For VIPs and senior management, we also provide super luxury vehicle options on request. With real-time tracking, flight monitoring, and trained chauffeurs, we ensure a seamless and stress-free experience from doorstep to terminal.",
//     src: "/airport.jpg"
//   },
//   {
//     id: 3,
//     title: "Employee Transportation Services",
//     description: "At Workforce Transfers, we provide end-to-end employee transportation solutions designed to meet the needs of modern workplaces. Whether it's shift-based travel, fixed-route shuttles, or dynamic routing for hybrid teams, our service ensures your workforce commutes safely, punctually, and cost-effectively. Powered by a smart mobility platform, we offer: Automated route optimization to reduce travel time and costs Real-time vehicle tracking and live trip monitoring Safe and verified chauffeurs trained in defensive driving and soft skills Customizable fleet including economy cars, MUVs, and buses based on your workforce size Our solutions are ideal for BPOs, IT Parks, manufacturing units, and corporates requiring round-the-clock or scheduled transportation. With centralized billing, performance dashboards, and dedicated account management, Workforce Transfers ensures your employee mobility is smooth, secure, and always on time.",
//     src: "/employee.jpg"
//   },
//   {
//     id: 4,
//     title: "Special Events Transportation",
//     description: "At Workforce Transfers, we offer customized chauffeur-driven services for corporate events, VIP movements, offsite meetings, conferences, and executive gatherings. Whether it’s a half-day commitment, full-day assignment, or inter-city travel, we provide tailored mobility solutions to match the scale and importance of your event. Our versatile fleet includes everything from executive sedans to super luxury vehicles such as Mercedes-Benz, BMW, and Audi, available with or without fuel as per your requirement. With professionally trained chauffeurs, on-ground coordination, and flexible rental plans, we ensure your special event transportation is seamless, punctual, and leaves a lasting impression—every time.",
//     src: "/events.jpg"
//   }
// ]

const services = [
  {
    id: 1,
    title: "Chauffeur Drive Services",
    src: "/chaffeur.jpeg",
    content: (
      <>
        <h1></h1>
        <p>
          At Workforce Transfers, we offer <strong>premium chauffeur-driven car rental solutions</strong> for both corporate and personal travel. Our platform provides:
        </p>
        Seamless booking
        Real-time tracking
        Professional service for executive travel and airport transfers
        <p>
          Choose from a diverse fleet:
        </p>
        <ul className="list-none list-inside my-2">
          <li>Economy cars</li>
          <li>Multi-utility <strong>vans</strong> (MUVs)</li>
          <li>Executive <strong>Sedan</strong> and <strong>SUVs</strong></li>
          <li>Luxury vehicles from <strong>BMW, Mercedes-Benz, and Audi</strong></li>
        </ul>
        <p>
          Whether it's <strong>hourly, full-day, or monthly hire</strong>, our trained chauffeurs and customizable packages guarantee a <strong>smooth and secure experience</strong>.
        </p>
      </>
    )
  },
  {
    id: 2,
    title: "Airport Transfer Services",
    src: "/airport.png",
    content: (
      <>
        <p>
          Workforce Transfers delivers <strong>reliable, cost-effective airport transfers</strong> for corporate travel—anytime, anywhere.
        </p>
        <ul className="list-disc list-inside my-2">
          <li>Timely pickups & drop-offs 24/7</li>
          <li>Fleet includes sedans, MUVs, and luxury options</li>
          <li><strong>Real-time tracking</strong> and <strong>flight monitoring</strong></li>
        </ul>
        <p>
          Ideal for individual executives or teams, with <strong>VIP upgrades available on request</strong>. We ensure your journey from doorstep to terminal is <strong>seamless and stress-free</strong>.
        </p>
      </>
    )
  },
  {
    id: 3,
    title: "Employee Transportation Services",
    src: "/employee.jpeg",
    content: (
      <>
        <p>
          We provide <strong>end-to-end employee transportation solutions</strong> tailored for modern workplaces.
        </p>
        <ul className="list-disc list-inside my-2">
          <li>Shift-based travel and fixed-route shuttles</li>
          <li><strong>Automated route optimization</strong> to cut time and costs</li>
          <li>Real-time vehicle tracking and monitoring</li>
          <li>Safe, trained chauffeurs with soft skills</li>
        </ul>
        <p>
          Our fleet includes <strong>economy cars, MUVs, and buses</strong>—customized for your workforce size. Ideal for <strong>BPOs, IT parks, and manufacturing units</strong>.
        </p>
        <p>
          With centralized billing and performance dashboards, we ensure your team travels <strong>punctually, securely, and efficiently</strong>.
        </p>
      </>
    )
  },
  {
    id: 4,
    title: "Special Events Transportation",
    src: "/events.png",
    content: (
      <>
        <p>
          Offering <strong>customized chauffeur-driven solutions</strong> for:
        </p>
        <ul className="list-disc list-inside my-2">
          <li>Corporate events & offsite meetings</li>
          <li>VIP movements and executive gatherings</li>
          <li>Conferences & inter-city business travel</li>
        </ul>
        <p>
          Fleet options include <strong>executive sedans</strong> to <strong>super luxury vehicles</strong> (BMW, Audi, Mercedes-Benz), with or without fuel.
        </p>
        <p>
          Backed by <strong>trained chauffeurs</strong>, on-ground coordination, and flexible rental plans, we ensure your events run <strong>on time and leave a lasting impression</strong>.
        </p>
      </>
    )
  }
];


// export const Services = () => {
//   return (
//     <section id="services" className="py-12 px-4 bg-gray-100">
//       {services.map((service, index) => (
//         <div
//           key={service.id}
//           className={`flex flex-col md:flex-row items-center justify-center gap-8 mb-16 ${
//             index % 2 !== 0 ? 'md:flex-row-reverse' : ''
//           }`}
//         >
//           {/* Image */}
//             <Image
//               src={service.src}
//               alt={service.title}
//               width={400}
//               height={400}
//               className="rounded-lg shadow-md border border-black w-full md:w-1/2"
//             />
//           {/* Text */}
//           <div className="w-full p-5 flex flex-col justify-center md:w-1/2 lg:w-xl">
//             <h3 className='text-2xl font-bold' >{service.title}</h3>
//             {service.content}
//           </div>
//         </div>
//       ))}
//     </section>
//   )
// };

export const Services = () => {
  return (
    <section id="services" className="py-16 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto space-y-24">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col-reverse md:flex-row items-center gap-12 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Text Block */}
            <div className="w-full md:w-1/2 text-left space-y-4">
              <h3 className="text-3xl font-bold text-gray-800">{service.title}</h3>
              <div className="text-gray-700 text-base md:text-lg leading-relaxed">
                {service.content}
              </div>
            </div>

            {/* Image Block */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={service.src}
                alt={service.title}
                width={500}
                height={350}
                className="rounded-md shadow-md border border-black object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

