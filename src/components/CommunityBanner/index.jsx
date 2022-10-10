import Button from "../../components/Button";
import { motion } from "framer-motion";

export default function CommunityBanner() {
  return (
    <div className="container mx-auto flex flex-col justify-between items-center text-center gap-10 px-9 py-12 md:px-16 md:py-20 bg-gray rounded-[53px] md:flex-row">
      <motion.h2
        initial={{ opacity: 0, x: 20 }}
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
        className="text-2xl md:text-4xl"
      >
        Claim your seat in the community
      </motion.h2>
      <motion.div
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
      >
        <Button
          primary
          filled
          text="Connect"
          href="https://discord.gg/HErYueTJ"
        />
      </motion.div>
    </div>
  );
}
