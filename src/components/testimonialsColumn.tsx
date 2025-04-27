'use client'
import { type testimonialsType } from "@/sections/Testimonials";
import Image from "next/image";
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'
import { Fragment } from "react";

export default function TestimonialsColumn( props: {testimonials : testimonialsType, className?:string, reverse?:boolean } ) {
    const {testimonials, className, reverse} = props;
    return (
        <motion.div
        initial={{
            y: reverse ? '-50%' : 0,
        }}
        animate={{
            y: reverse ? 0 :"-50%",
            
        }}
        transition={{
            duration:20,
            repeat:Infinity,
            ease:"linear",
        }}

         className={twMerge("flex flex-col gap-4 pb-4", className)} >
            { Array.from({ length:2 }).map((_, i) => (
                <Fragment key={i} >
                    { testimonials.map((testimonial) => (
                      <div className="bg-white border border-black/20 rounded-3xl p-6" key ={testimonial.username} >
                        <div className="flex justify-center " >
                          <Image src={`/${testimonial.imageSrc}`} alt={testimonial.username} width={300} height={300} className="size-24 rounded-[50%]" />
                        </div>
                        <h4 className="text-3xl text-center mt-4" >{testimonial.name}</h4>
                        <p className="text-center text-black/60 mt-2" >{testimonial.text}</p>
                      </div>
                    )) }

                </Fragment>
            )) }
          </motion.div>
    );
}