"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-200 via-orange-100 to-white">
      {/* Background glows */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-[360px] w-[360px] rounded-full bg-orange-300/30 blur-3xl sm:h-[450px] sm:w-[450px]" />
      <div className="pointer-events-none absolute bottom-0 right-[-140px] h-[420px] w-[420px] rounded-full bg-rose-300/25 blur-3xl sm:h-[520px] sm:w-[520px]" />

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center px-5 pb-12 pt-8 sm:px-8 sm:pt-12 lg:flex-row lg:items-center lg:px-12 lg:py-16">
        {/* PHOTO - first and centered on mobile */}
        <div className="order-1 flex w-full justify-center lg:order-2 lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-[82vw] max-w-[360px] sm:max-w-[410px] lg:max-w-[500px]"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 scale-[1.04] rounded-full bg-white/35 blur-md" />

              <Image
                src="/poet.jpg"
                alt="Shree Pingalshinh Patabhai Narela"
                width={600}
                height={600}
                priority
                quality={95}
                sizes="(max-width: 1024px) 82vw, 500px"
                className="relative aspect-square w-full rounded-full object-cover shadow-2xl ring-8 ring-white/40"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="order-2 z-10 mt-8 w-full text-center lg:order-1 lg:mt-0 lg:w-1/2 lg:pr-12 lg:text-left">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold text-rose-700 sm:text-base"
            >
              “शब्द मेरी पहचान, कविता मेरी जान”
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-3 font-serif text-4xl font-bold leading-tight text-rose-800 sm:text-5xl lg:text-6xl"
            >
              Shree Pingalshinh
              <span className="block">Patabhai Narela</span>
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-xl font-semibold leading-relaxed text-rose-800 sm:text-2xl"
            >
              Poet • Writer • Performer • Storyteller
            </motion.h2>

            <motion.h3
              variants={fadeUp}
              className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl"
            >
              Bhavnagar State
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-xl text-base leading-8 text-gray-600 sm:text-lg lg:mx-0"
            >
              कविताएँ जो दिल को छू जाएं, विचार जो जीवन बदल दें, और शब्द जो
              हमेशा याद रहें।
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <Link
                href="/poems"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-rose-800 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:scale-[1.03] hover:bg-rose-900"
              >
                Read Poems
              </Link>

              <button
                type="button"
                className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-rose-800 px-8 py-3 text-base font-semibold text-rose-800 transition hover:bg-white/50 hover:scale-[1.03]"
              >
                Listen 🎧
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="mx-auto mt-9 grid max-w-md grid-cols-3 divide-x divide-gray-400/40 lg:mx-0 lg:max-w-lg"
            >
              {[
                { num: "500+", label: "Poems" },
                { num: "25+", label: "Awards" },
                { num: "100+", label: "Events" },
              ].map((item) => (
                <div key={item.label} className="px-3 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    {item.num}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
