import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Epic({ title, description, icon, done }) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="flex max-w-4xl justify-start"
      onClick={() => setShow(!show)}
    >
      <div
        className="flex justify-center items-center flex-col md:flex-row pr-10"
        style={{ height: "calc(100% + 40px)" }}
      >
        {done ? (
          <>
            <div className="bg-primary neon h-px w-16 hidden md:flex lg:w-28"></div>
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-xl md:rounded-2xl bg-primary neon flex flex-shrink-0 justify-center items-center select-none">
              <Image src={icon} alt="Icon" width={39} height={39} />
            </div>
            <div className="bg-primary neon w-px h-full md:hidden"></div>
          </>
        ) : (
          <>
            <div className="bg-gray h-px w-16 hidden md:flex lg:w-28"></div>
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-xl md:rounded-2xl bg-gray flex flex-shrink-0 justify-center items-center select-none">
              <Image src={icon} alt="Icon" width={39} height={39} />
            </div>
            <div className="bg-gray shadow-lg  w-px h-full md:hidden"></div>
          </>
        )}
      </div>
      <div className="mt-0 md:pt-10">
        <motion.h3
          initial={{ opacity: 0, x: -10 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.4,
              ease: "easeInOut",
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}
          className="text-xl font-normal md:font-bold md:text-[28px]"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.4,
              ease: "easeInOut",
              delay: 0.8,
            },
          }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          {description}
        </motion.p>
        {/* Mobile show */}
        {show && (
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.4,
                ease: "easeInOut",
                delay: 0,
              },
            }}
            viewport={{ once: true }}
            className="block md:hidden"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
