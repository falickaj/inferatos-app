import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import motion
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination, Autoplay } from "swiper";

import NFTOne from "../../assets/nftDesigns/20.png";
import NFTTwo from "../../assets/nftDesigns/12.png";

export default function NFTSlideshowCube() {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="w-full rounded-[46px] p-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: 1.4,
                },
              }}
              viewport={{ once: true }}
              className="flex justify-center items-center w-full rounded-[44px]"
            >
              <Image src={NFTOne} alt="NFT Design" width={386} height={386} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                  delay: 1.4,
                },
              }}
              viewport={{ once: true }}
              className="mt-10 mb-8 flex justify-between"
            >
              <div>
                <h2>Ludex</h2>
                <h4>Inferatos </h4>
              </div>
              <h3>0.0 ETH</h3>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full rounded-[46px] p-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: 1.4,
                },
              }}
              viewport={{ once: true }}
              className="flex justify-center items-center w-full rounded-[44px]"
            >
              <Image src={NFTTwo} alt="NFT Design" width={386} height={386} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                  delay: 1.4,
                },
              }}
              viewport={{ once: true }}
              className="mt-10 mb-8 flex justify-between"
            >
              <div>
                <h2>Diminus</h2>
                <h4>Inferatos </h4>
              </div>
              <h3>0.0 ETH</h3>
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
