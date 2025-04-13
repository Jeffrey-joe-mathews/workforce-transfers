'use client'

import Image from "next/image";
import { motion } from 'framer-motion'

export const LogoTicker = () => {
  return <section className="py-8 bg-white" >
    <div className="container">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]" >
      <div className="flex gap-14 flex-none">
        <Image src='/logo-acme.png' alt="Acme Logo" width={400} height={200} className="logo-ticker-image" />
        <Image src='/logo-apex.png' alt="Acme Logo" width={400} height={200} className="logo-ticker-image" />
        <Image src='/logo-celestial.png' alt="Acme Logo" width={400} height={200} className="logo-ticker-image" />
        <Image src='/logo-echo.png' alt="Acme Logo" width={400} height={200} className="logo-ticker-image" />
        <Image src='/logo-pulse.png' alt="Acme Logo" width={400} height={200} className="logo-ticker-image" />
        <Image src='/logo-quantum.png' alt="Acme Logo" width={400} height={200} className="logo-ticker-image" />
      </div>
      </div>
    </div>
  </section>;
};
