import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Components imports
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Countdown from "../../components/Countdown";
import Roadmap from "../../components/Roadmap";
import Accordion from "../../components/Accordion";
import CommunityBanner from "../../components/CommunityBanner";

// Sections
import Vision from "../../sections/Vision";
import TwoColText from "../../sections/TwoColText";

import nftDesign from "../../assets/nftDesigns/16.png";
import NFTOne from "../../assets/nftDesigns/20.png";
import NFTTwo from "../../assets/nftDesigns/12.png";
import NFTThree from "../../assets/nftDesigns/46.png";

// Data
import { homeNFTs } from "../../data/homeNFTs";
import { FAQData } from "../../data/FAQ";
import NFTSlideshowCube from "../../sections/NFTSlideshowCube";

export default function Home() {
  return (
    <>
      <Header />
      <div
        className="flex justify-center items-center gap-8 md:gap-20 lg:gap-80 md:flex-row container mx-auto flex-col-reverse mt-12 md:mt-36 mb-36 px-6"
        // style={{ height: `calc(100vh - 146px)` }}
      >
        {/* Content start here */}
        <div className="flex flex-col w-full md:w-6/12 lg:w-3/12">
          <motion.h3
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
            className="uppercase text-2xl md:text-[32px]"
          >
            Now introducing
          </motion.h3>
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
            className="uppercase whiteShadow text-4xl md:text-[50px]"
          >
            Cryptonymity
          </motion.h1>
          <motion.p
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
            className="mb-16 mt-7"
          >
            The first NFT to provide cryptonymity to all metaverse travellers -
            Get your identity now
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                ease: "easeInOut",
                delay: 1.1,
              },
            }}
            viewport={{ once: true }}
          >
            <Button primary filled text="Buy now" href="/" />
          </motion.div>
        </div>
        {/* NFT Card here */}
        {/* <div className="flex flex-col w-full md:w-6/12">
          <NFTSlideshowCube />
        </div> */}
        <div className="flex w-full md:w-6/12 lg:w-4/12 heroSlider">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="w-full rounded-[46px] p-4">
                <div className="flex justify-center items-center w-full rounded-[44px]">
                  <Image
                    src={NFTOne}
                    alt="NFT Design"
                    width={386}
                    height={386}
                  />
                </div>
                <div className="mt-10 mb-8 md:flex justify-between hidden ">
                  <div className="hidden md:block">
                    <h2>Ludex</h2>
                    <h4>Inferatos #12345</h4>
                  </div>
                  <h3 className="hidden md:block">1.5 ETH</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full rounded-[46px] p-4">
                <div className="flex justify-center items-center w-full rounded-[44px]">
                  <Image
                    src={NFTThree}
                    alt="NFT Design"
                    width={386}
                    height={386}
                  />
                </div>
                <div className="mt-10 mb-8 md:flex justify-between hidden ">
                  <div className="hidden md:block">
                    <h2>Inimicus</h2>
                    <h4>Inferatos #12345</h4>
                  </div>
                  <h3 className="hidden md:block">1.5 ETH</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full rounded-[46px] p-4">
                <div className="flex justify-center items-center w-full rounded-[44px]">
                  <Image
                    src={NFTTwo}
                    alt="NFT Design"
                    width={386}
                    height={386}
                  />
                </div>
                <div className="mt-10 mb-8 md:flex hidden justify-between">
                  <div className="hidden md:block">
                    <h2>Diminus</h2>
                    <h4>Inferatos #12345</h4>
                  </div>
                  <h3 className="hidden md:block">1.5 ETH</h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* COUNTDOWN SECTION */}
      <Countdown />
      {/* Two Col Text */}
      <div className="my-28 md:mt-36 px-6">
        <TwoColText />
      </div>
      {/* VISION SECTION */}
      <div className="my-28 md:my-52 px-6">
        <Vision />
      </div>
      {/* MISSION SECTION */}
      {/* <Mission /> */}
      {/* COLLECTION SECTION */}
      <div className="container mx-auto md:mb-20 mb-8 mt-28 md:mt-44 px-6 flex flex-col gap-10">
        <h2 className="text-center">Dicover the Cyptonymity Masks</h2>
        {/* <h4 className="lg:w-5/12">
          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim.
        </h4> */}
      </div>
      <div className="flex gap-10 items-center justify-center">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={4}
          centeredSlides={true}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is <= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is <= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            // when window width is <= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },

            // when window width is <= 640px
            1227: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {homeNFTs.slice(1, 7).map((nft, index) => (
            <SwiperSlide key={index}>
              <div className="w-full px-6 md:px-0">
                <div className="rounded-[46px] p-4 card">
                  <div className="flex justify-center items-center w-full rounded-[44px] select-none mt-10">
                    <Image
                      src={nft.image}
                      alt="NFT Design"
                      width={386}
                      height={386}
                    />
                  </div>
                  <div className="mt-2 mb-16 nftValue">
                    <h3>{nft.name}</h3>
                    <div className="flex justify-between">
                      <h4>Value</h4>
                      <h4>{nft.bid} ETH</h4>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* ROADMAP SECTION */}
      <div className="container mx-auto mt-16 mb-28 md:my-52 flex flex-col items-center">
        <div className="text-center max-w-xl mx-auto mb-24 px-6">
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
          >
            Infinity map
          </motion.h1>
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
            className="text-lg md:text-xl"
          >
            The Infinitymap is a timeline of our plans for the future. Join the
            journey!
          </motion.h4>
        </div>
        <Roadmap />
      </div>
      {/* FAQ SECTION */}
      <div className="container mx-auto max-w-4xl mb-28 md:mb-52 px-6">
        {/* DESKTOP VIEW */}
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
          className="text-center mb-24 hidden md:flex"
        >
          Frequently asked questions
        </motion.h1>
        {/* MOBILE VIEW */}
        <motion.h2
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
          className="text-center mb-10 flex md:hidden justify-center"
        >
          F.A.Q
        </motion.h2>
        <div className="flex flex-col gap-12">
          {FAQData.map((faq, index) => (
            <motion.div
              key={index}
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
            >
              <Accordion question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>
      </div>
      {/* COMMUNITY SECTION */}
      <div className="mb-28 px-6">
        <CommunityBanner />
      </div>
      {/* FOOTER SECTION */}
      <Footer />
    </>
  );
}
