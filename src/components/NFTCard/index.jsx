import Image from "next/image";

export default function NFTCard({ image, name, bid }) {
  return (
    <div className="rounded-[46px] p-4 card">
      <div className="flex justify-center items-center w-full rounded-[44px] select-none">
        <Image src={image} alt="NFT Design" width={386} height={386} />
      </div>
      <div className="mt-10 mb-8">
        <h3>{name}</h3>
        <div className="flex justify-between value">
          <h4>Value</h4>
          <h4>{bid} ETH</h4>
        </div>
      </div>
    </div>
  );
}
