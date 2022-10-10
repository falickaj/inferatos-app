import { motion } from "framer-motion";
export default function TwoColText() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row">
      <div className="w-full md:w-6/12 md:pr-6">
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
          className="text-center md:text-left text-4xl font-medium md:font-bold md:text-[50px]"
        >
          Cryptonymity
        </motion.h2>
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
          className="mt-8 text-lg leading-8 text-center md:text-left max-w-3xl mx-auto md:text-xl"
        >
Like covering your face with a mask, our NFT&#39;s will in the future give our holders the ability to cover
online tracks, allowing them to move through the internet with a masked identity. That&#39;s why we
are currently in development of building an all new NFT function with blockchain technology,
allowing our NFT holders to explore and travel the metaverse while enjoying very own protected
identity. Net proceeds will go to further the development and improvement of Cryptonymity.
        </motion.h4>
      </div>
      <div className="w-full mt-16 md:mt-0 md:w-6/12 md:pl-6">
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
          className="text-center md:text-left text-4xl font-medium md:font-bold md:text-[50px]"
        >
          The 50 sacred
        </motion.h2>
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
          className="mt-8 text-lg leading-8 text-center md:text-left max-w-3xl mx-auto md:text-xl"
        >
The holders of the first 50, those called infinitum, will forever be viewed as sacred to the project with
perks giving them a definite place in the future of the Inferatos. Early access, pre-ICO coin giftings, all
future NFT-upgrades, VIP giveaways and a seat at the round table are only some of the perks the 50
sacred will enjoy, with these rights permanently connected to the mask whomever its holder might
be.
        </motion.h4>
      </div>
    </div>
  );
}
