import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Pagination from "../../components/Pagination";
import CommunityBanner from "../../components/CommunityBanner";

// Data
import { nftDesigns } from "../../data/NFTs";

export default function Collection({ nftsList, page, numberOfNfts }) {
  return (
    <>
      <Head>
        <title>Inferatos | Collection</title>
      </Head>
      <Header />
      <div className="container mx-auto max-w-2xl text-center mt-28 mb-14 md:mt-40 md:mb-24 px-6">
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
          The cryptonymity collection
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
        >
          Connect to your new self.
        </motion.h4>
      </div>
      <div className="container mx-auto flex items-center justify-center flex-wrap gap-y-10 px-6">
        {nftsList.map((nft, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                ease: "easeInOut",
                delay: index * 0.1,
              },
            }}
            viewport={{ once: true }}
            className="w-6/12 lg:w-4/12 flex justify-center"
          >
            {/* <NFTCard name={nft.name} bid={nft.bid} image={nft.image} /> */}
            <div className="rounded-[46px] p-4 card">
              <div className="flex justify-center items-center w-full rounded-[44px] select-none">
                <Image
                  src={nft.image}
                  alt="NFT Design"
                  width={386}
                  height={386}
                />
              </div>
              <div className="mt-10 mb-8">
                <h3 className="text-xl font-normal text-center md:text-left md:text-[28px] md:font-bold">
                  {nft.name}
                </h3>
                <div className="flex justify-center md:justify-between value">
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="container mx-auto mt-28 md:mt-36 flex justify-center px-10">
        <Pagination page={page} numberOfNfts={numberOfNfts} />
      </div>
      <div className="mb-28 mt-28 md:mt-52 px-6">
        <CommunityBanner />
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = +page === 1 ? 0 : (page - 1) * 12;
  return {
    props: {
      nftsList: nftDesigns.slice(start, start + 12),
      page: +page,
      numberOfNfts: nftDesigns.length,
    },
  };
}
