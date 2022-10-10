import Head from "next/head";
import Image from "next/image";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

// Components imports
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CommunityBanner from "../../components/CommunityBanner";

// Assets imports
import CoinLogo from "../../assets/images/coin.png";

export default function Coin() {
  return (
    <>
      <Head>
        <title>Inferatos | Coin</title>
      </Head>
      <Header />

      <div className="container mx-auto -mt-14 px-6">
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
          className="flex items-center justify-center mb-10 md:mb-24 mt-16"
        >
          <div className="block md:hidden mt-10">
            <Image src={CoinLogo} height={400} width={711} alt="Coin Logo" />
          </div>
          <div className="hidden md:flex justify-center">
            <ReactPlayer
              url={["videos/coinspin.mp4"]}
              width="70%"
              height="70%"
              controls={false}
              playing={true}
              loop={true}
              muted={true}
              volume={0}
              fallback={
                <Image
                  src={CoinLogo}
                  height={400}
                  width={711}
                  alt="Coin Logo"
                />
              }
            />
          </div>
        </motion.div>
        <div className="text-center flex flex-col gap-7 mb-10 md:mb-24">
          <motion.h1
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
            className="text-4xl md:text-[50px]"
          >
            Introducing <span className="hidden md:inline-block">the new</span>{" "}
            <span className="whiteShadow">InCash</span> Coin
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                ease: "easeInOut",
                delay: 0.6,
              },
            }}
            viewport={{ once: true }}
            className="text-xl md:text-4xl"
          >
            - Bringing cash to the new era -
          </motion.h2>
        </div>
        <div className="flex gap-10 md:gap-16 flex-col text-center items-center">
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
            For the last decades banks and governments has imposed threatening
            regulations and laws on cash, privacy and economic freedom. This has
            in many ways compromised the beauty of freedom and individual
            rights. Inferatos believes that your spending is your business, that
            your information belongs to you, and that your privacy is yours to
            govern.
          </motion.h4>
          <motion.h4
            initial={{ opacity: 0, y: -10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                ease: "easeInOut",
                delay: 0.7,
              },
            }}
            viewport={{ once: true }}
            className="max-w-3xl text-lg md:text-xl"
          >
            Therefor we are introducing InCash as a modernised crypto substitute
            to traditional cash such as Dollars, Pounds, Rubles, Crowns or
            Rupies. InCash is a new Cryptocurrency that allow users to do their
            spending completely anonymously across platforms, returning the
            power of spending-data to the consumer.
          </motion.h4>
          <motion.h4
            initial={{ opacity: 0, y: -10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                ease: "easeInOut",
                delay: 0.7,
              },
            }}
            viewport={{ once: true }}
            className="max-w-3xl text-lg md:text-xl"
          >
            Having our tech team in close cooperation with our team of
            economists to supervise, monitor and administrate the Inferatos
            InCash and its stability and good health. We aim to move into the
            future offering the current struggling Cryptomarket a new stabile
            and reliable alternative, while constantly working on FinTech and
            DeFi development.
          </motion.h4>
        </div>
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
          className="text-center mt-10 md:mt-36 max-w-4xl mx-auto mb-28 md:mb-36 text-lg md:text-4xl"
        >
          By the principal of Cryptonymity, InCash offers a freer market to a
          freer consumer.
        </motion.h4>
      </div>

      <div className="mb-28 px-6">
        <CommunityBanner />
      </div>
      <Footer />
    </>
  );
}
