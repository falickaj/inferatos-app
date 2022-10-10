import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

// Components imports
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CommunityBanner from "../../components/CommunityBanner";
import Mission from "../../sections/Mission";

// Assets imports
import Logo from "../../assets/logo/LogoLight.svg";

export default function About() {
  return (
    <>
      <Head>
        <title>Inferatos | About</title>
      </Head>
      <Header />
      <div className="container mx-auto mt-32 mb-16 md:mb-24 md:mt-40 px-6">
        <motion.div
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
          className="hidden md:flex items-center justify-center mb-24 mt-16"
        >
          <Image src={Logo} alt="Inferatos Logo 3D" height={319} width={874} />
        </motion.div>
        <div className="flex gap-10 md:gap-16 flex-col text-center items-center">
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
            className="block md:hidden"
          >
            About us
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
            className="max-w-3xl text-lg md:text-xl"
          >
            We have been summoned by Cosmos, all that’s been, is and will ever
            be. She told us that almost all are dormant, and that only a
            selected few are still connected to the source. We are the ones,
            called upon, now here to summon you. We are ready to reclaim the
            universal power, to fight darkness and oblivion, and thus liberate
            the mind and spirit. We are an international team, gathered in Oslo
            City Center, the vibrant heart of Norway.{" "}
          </motion.h4>
          <motion.h4
            initial={{ opacity: 0, y: -10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                ease: "easeInOut",
                delay: 0.8,
              },
            }}
            viewport={{ once: true }}
            className="max-w-3xl text-lg md:text-xl"
          >
            Diversity, creativity, charm and charisma, a team with no
            nationality, no religion, and no ethnicity, we believe only in the
            power of self-proclaimed identity, not what’s been given by society.
            We believe our mask movement will make all of us forget our enforced
            identity, and make us remember our forgotten self, your true you,
            and that everybody is equal with one shared soul and mind.
          </motion.h4>
        </div>
        {/* MISSION SECTION */}
        <div className="mt-16">
          <Mission />
        </div>
        {/* ENTER THE FUTURE SECTION */}
        {/* <motion.h2
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
          className="text-center mt-7 md:mt-36"
        >
          Enter the future.
        </motion.h2> */}
      </div>
      <div className="mb-28 px-6">
        <CommunityBanner />
      </div>
      <Footer />
    </>
  );
}
