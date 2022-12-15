import { motion } from "framer-motion";
import Image from "next/image";
import YouTube from "@u-wave/react-youtube";
import { useState } from "react";

import charlie from "../../assets/images/charlieChaplin.jpeg";
import playButton from "../../assets/icons/play_arrow.svg";

export default function Vision() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div className="container mx-auto flex items-center flex-col lg:flex-row gap-10">
      {/* Left Side */}
      <div className="w-full lg:w-6/12">
        <h1 className="text-center text-4xl font-medium md:font-bold md:text-left md:text-[50px]">
          Vision
        </h1>
        <h4 className="text-lg leading-8 text-center md:text-left md:text-xl mt-7 md:mb-8 lg:pr-10">
        Since the world is moving towards a more monitored daily life, we want to be the
voice of the people and offer solutions that proved them with more privacy, free
speech, and security.<br/><br/>
            Our vision as an IT development company is to use
development as a tool of change and start a positive movement for tech, spirit, and
mind, and unite the three not for profits but for sustainable humane growth.<br/><br/>
Therefore, we pledge to donate 25% of our net NFT-proceeds to organizations
aligned with our values.
        </h4>
        <h3 className="hidden md:flex">Be the Change.</h3>
      </div>
      {/* Right Side */}
        <h3 className="flex md:hidden text-center">
            Be the Change.
        </h3>
      <div className="w-full lg:w-6/12">
        <div className="aspect-video bg-gray rounded-md md:rounded-[60px] border-8 border-white overflow-hidden relative">
          {isPlaying ? (
            <YouTube
              video="06HFzJV5GZU"
              width="100%"
              height="100%"
              autoplay
              showRelatedVideos={false}
              annotations={false}
              modestBranding={true}
              controls={true}
              muted={false}
              paused={isPaused}
            />
          ) : (
            <>
              <div
                className="absolute bg-black/50 z-20 w-full h-full flex items-center justify-center"
                onClick={() => setIsPlaying(true)}
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 p-4 md:w-[131px] md:h-[131px] rounded-full flex items-center justify-center bg-black/50 cursor-pointer"
                >
                  <Image
                    src={playButton}
                    width={50}
                    height={50}
                    alt="Play Video"
                  />
                </motion.span>
              </div>
              <Image
                src={charlie}
                alt="Charlie Chaplin"
                layout="responsive"
                className="z-10"
              />
            </>
          )}
        </div>
      </div>
      {/* Lets fight mobile only */}

    </div>
  );
}
