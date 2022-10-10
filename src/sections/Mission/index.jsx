import { motion } from "framer-motion";
import Logo from "../../components/Logo";

export default function Mission() {
  return (
    <div className="container mx-autolg:text-center lg:px-56">
      <motion.h1
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
        className="text-center text-4xl font-medium md:font-bold md:text-[50px]"
      >
        Mission
      </motion.h1>
      <motion.h4
        initial={{ opacity: 0, y: -10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            ease: "easeInOut",
            delay: 0.5,
          },
        }}
        viewport={{ once: true }}
        className="mt-8 md:mb-10 text-lg leading-8 text-center max-w-3xl mx-auto md:text-xl"
      >
        The main target and overall goal of the Inferatos is to inspire, create
        and contribute to positive changes on a global scale. We as a unit want
        to raise awareness and spread the word of betterment of humanity, nature
        and the future. Individual by individual, we are going to change groups,
        then communities, peoples, then countries until we have helped create a
        paradigm-shift, bringing in a new future of infinite life, freedom and
        hope.
      </motion.h4>
      <div className="flex justify-center">
        <Logo type="symbol" style="light" />
      </div>
    </div>
  );
}
