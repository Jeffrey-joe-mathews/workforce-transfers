'use client'

import Image from "next/image";
import { motion } from 'framer-motion'

export const LogoTicker = () => {
  return <section id="logotic" className="py-8 bg-white flex flex-col justify-center items-center " >
    <div className="container">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]" >
      <motion.div 
      className="flex gap-14 flex-none pr-14 will-change-transform" 
      animate={{
        translateX:"-50%",
      }}
      transition={{
        duration: 20,
        repeat:Infinity,
        ease:"linear",
        repeatType:"loop"
      }}
       >
        {/* First set */}
        <Image src='/logo-acme.png' alt="Acme Logo" width={400} height={200} className="logo-ticker-image" />
        <Image src='/logo-apex.png' alt="Acme Logo" width={400} height={200} className="logo-ticker-image" />
        <Image src='/logo-celestial.png' alt="Acme Logo" width={400} height={200} className="logo-ticker-image" />
        <Image src='/logo-echo.png' alt="Acme Logo" width={400} height={200} className="logo-ticker-image" />
        <Image src='/logo-pulse.png' alt="Acme Logo" width={400} height={200} className="logo-ticker-image" />
        <Image src='/logo-quantum.png' alt="Acme Logo" width={400} height={200} className="logo-ticker-image" />

        {/* repeated set */}
        <Image src='/logo-acme.png' alt="Acme Logo" width={400} height={200} className="logo-ticker-image" />
        <Image src='/logo-apex.png' alt="Acme Logo" width={400} height={200} className="logo-ticker-image" />
        <Image src='/logo-celestial.png' alt="Acme Logo" width={400} height={200} className="logo-ticker-image" />
        <Image src='/logo-echo.png' alt="Acme Logo" width={400} height={200} className="logo-ticker-image" />
        <Image src='/logo-pulse.png' alt="Acme Logo" width={400} height={200} className="logo-ticker-image" />
        <Image src='/logo-quantum.png' alt="Acme Logo" width={400} height={200} className="logo-ticker-image" />

      </motion.div>
      </div>
    </div>
  </section>;
};

