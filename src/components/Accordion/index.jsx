import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// icons import
import add from "../../assets/icons/add.svg";
import remove from "../../assets/icons/remove.svg";

export default function Accordion({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border p-7 rounded-[32px] cursor-pointer ${
        open ? "border-primary neon" : "border-white"
      }`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex gap-3 justify-between items-center">
        <h3 className="text-xl md:text-[28px]">{question}</h3>
        {open ? (
          <Image src={remove} width={30} height={30} alt="Close" />
        ) : (
          <Image src={add} width={30} height={30} alt="Open" />
        )}
      </div>
      {open && (
        <motion.h4
          initial={{ opacity: 0, y: -10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.2,
              ease: "easeInOut",

              delay: 0.1,
            },
          }}
          viewport={{ once: true }}
          className="mt-5 md:mt-7 text-base md:text-xl"
        >
          {answer}
        </motion.h4>
      )}
    </div>
  );
}
