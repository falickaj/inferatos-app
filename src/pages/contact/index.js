import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CommunityBanner from "../../components/CommunityBanner";
import ContactForm from "../../components/ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Inferatos | Contact</title>
      </Head>
      <Header />
      <div className="container mx-auto max-w-2xl text-center mt-32 mb-16 md:mb-24 md:mt-40 px-6">
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
        >
          Get in touch
        </motion.h2>
        <motion.h4
          initial={{ opacity: 0, y: -5 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}
          className="text-lg md:text-xl"
        >
          We believe in the power of ideas, as all materialistic things are
          manifested thoughts. We welcome all ideas, proposals, feedback, or
          anything you would like to share! Speak soon.
        </motion.h4>
      </div>
      <motion.div
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
        className="container mx-auto max-w-5xl"
      >
        <ContactForm />
      </motion.div>
      <div className="my-28 md:mb-28 md:mt-52 px-6">
        <CommunityBanner />
      </div>
      <Footer />
    </>
  );
}
