import { motion } from "framer-motion";
import Link from "next/link";
import useCountDown from "../../hooks/useCountDown";

export default function Countdown() {
  const [days, hours, minutes, seconds] = useCountDown("2022-11-10T00:00:00");
  return (
    <div className="container mx-auto px-6">
      <div className="flex items-center flex-row gap-12 text-center md:flex-row justify-between">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.4,
              ease: "easeInOut",
              delay: 0.2,
            },
          }}
          viewport={{ once: true }}
          className="uppercase text-3xl md:text-7xl"
        >
          Launched
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 2,
              ease: "easeInOut",
              delay: 2,
            },
          }}
          viewport={{ once: true }}
          className="w-16 h-16 border-[16px] md:w-28 md:h-28 rounded-full md:border-[27px] border-primary animate-pulse neon"
        ></motion.div>
      </div>
      {/* Timer */}
      <div className="flex flex-row items-center md:gap-10 mt-12 mb-14 md:mb-36 justify-between md:flex-row lg:flex-nowrap">
        {/* <div className="flex flex-col lg:w-3/12">
          <span className="text-[48px] md:text-[150px] leading-none">
            0
          </span>
          <h2 className="text-base md:text-4xl">Days</h2>
        </div>
        <div className="flex flex-col lg:w-3/12 lg:items-center">
          <span className="text-[48px] md:text-[150px] leading-none">
            0
          </span>
          <h2 className="text-base md:text-4xl">Hours</h2>
        </div>
        <div className="flex flex-col lg:w-3/12 lg:items-center">
          <span className="text-[48px] md:text-[150px] leading-none">
            0
          </span>
          <h2 className="text-base md:text-4xl">Minutes</h2>
        </div>
        <div className="flex flex-col lg:w-3/12 lg:items-end">
          <span className="text-[48px] md:text-[150px] leading-none">
            0
          </span>
          <h2 className="text-base md:text-4xl">Seconds</h2>
        </div> */}
      </div>
      {/* Date */}
      <div className="flex tems-center flex-row justify-between">
        <h2 className="text-sm font-normal md:font-bold md:text-3xl">
          10 November 2022
        </h2>
        <Link href="https://discord.gg/UAVuM68TZm">
          <a target="_blank" className="flex gap-4 md:gap-10 items-center">
            <span className="w-8 h-[2px] md:w-20 md:h-1 bg-white rounded-full"></span>
            <h3 className="text-sm font-normal md:font-bold md:text-3xl">
              Get Notified
            </h3>
          </a>
        </Link>
      </div>
    </div>
  );
}
