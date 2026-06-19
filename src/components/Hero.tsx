"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, staggerContainer } from "./motion";

export default function Hero() {
 return (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-200 via-orange-100 to-white">

    <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-orange-300 blur-3xl opacity-30 rounded-full" />
<div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-rose-300 blur-3xl opacity-20 rounded-full" />
     <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-orange-300 blur-3xl opacity-40 rounded-full" />
<div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-rose-300 blur-3xl opacity-30 rounded-full" />
     
     
      {/* 🌈 BACKGROUND GLOW */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-rose-200 blur-3xl rounded-full top-20 left-10 opacity-40"
      />

      <div className="w-full lg:w-1/2 px-6 lg:px-20 z-10">

        {/* STAGGER TEXT */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >

          <motion.p variants={fadeUp} className="text-rose-700 font-medium">
            “शब्द मेरी पहचान, कविता मेरी जान”
          </motion.p>



           <motion.h2
            variants={fadeUp}
            className="text-4xl text-rose-800 mt-4 font-semibold"
          >
            Shree Pingalshinh Patabhai Narela
          </motion.h2>

           <motion.h2
            variants={fadeUp}
            className="text-2xl text-rose-800 mt-4 font-semibold"
          >
            Poet • Writer • Performer • Storyteller
          </motion.h2>


          <motion.h3
            variants={fadeUp}
            className="text-2xl lg:text-6xl font-bold mt-4"
          >
          Bhavnagar State
          </motion.h3>
         
          <motion.p
            variants={fadeUp}
            className="text-gray-600 mt-6 max-w-xl"
          >
            कविताएँ जो दिल को छू जाएं, विचार जो जीवन बदल दें, और शब्द जो हमेशा याद रहें।
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={fadeUp}
            className="flex gap-4 mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-rose-800 text-white px-6 py-3 rounded-full shadow-lg"
            >
              Read Poems
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-rose-800 text-rose-800 px-6 py-3 rounded-full"
            >
              Listen 🎧
            </motion.button>
          </motion.div>

          {/* STATS */}
          <motion.div
            variants={fadeUp}
            className="flex gap-10 mt-10"
          >
            {[
              { num: "500+", label: "Poems" },
              { num: "25+", label: "Awards" },
              { num: "100+", label: "Events" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold">{item.num}</h3>
                <p className="text-gray-500">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* 🖼 IMAGE SECTION */}
      <div className="w-full lg:w-1/2 flex justify-center relative">

        {/* FLOAT ANIMATION IMAGE */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="relative z-10"
        >
          <Image
  src="/poet.jpg"
  alt="Poet"
  width={500}
  height={500}
  priority
  quality={90}
  sizes="(max-width: 768px) 100vw, 500px"
  className="rounded-full"
/>
        </motion.div>

      </div>
    </section>
  );
}