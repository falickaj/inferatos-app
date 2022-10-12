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
Developing a redefined encrypted identity connected to your totally unique NFT
mask, Cryptonymity allows you to create your own technological legacy through your
new identity in our Metaverse and community of technological pioneers. Being
developed on the highest quality of blockchain technology, with many future functions
to come, this art piece will appreciate the older and more experienced it gets.
Embrace your new identity, embrace Cryptonymity.
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
          The Round Table
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
The holders of the 50 first NFT's ever created by Inferatos will permanently have a
seat at the round table, where they will join in the development of the brand,
products, and general direction of the project. In addition, perks such as early-
access, pre-ICO giftings, giveaways and all future NFT-upgrades will also be given to
the 50 first.
        </motion.h4>
      </div>
    </div>
  );
}
