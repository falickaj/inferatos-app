import Link from "next/link";
import Logo from "../../components/Logo";

export default function Footer() {
  return (
    <div className="container mx-auto px-6">
      {/* TOP PART */}
      <div className="flex mb-16 flex-col gap-10 md:flex-row">
        {/* FIRST COLUMN */}
        <div className="w-8/12">
          <Logo type="logotype" style="light" />
          <h4 className="mt-10 mb-20">
            Powered by INF Group AS
            <br />
            Based in Oslo City,
            <br />
            Norway
          </h4>
          <Link href="mailto:contact@inferatos.com" passHref>
            <a className="border-b border-white inline-block">
              <h4>contact@inferatos.com</h4>
            </a>
          </Link>
        </div>
        {/* RIGHT SIDE */}
        <div className="flex justify-between w-full gap-10 flex-col lg:w-4/12 sm:flex-row md:justify-between">
          {/* SECOND COLUMN */}
          <div>
            <h3 className="mb-16">Quick Links</h3>
            <ul className="flex flex-col gap-6">
              <li>
                <Link href="/">
                  <a>
                    <h4>Home</h4>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/collection">
                  <a>
                    <h4>Collection</h4>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/coin">
                  <a>
                    <h4>Coin</h4>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>
                    <h4>About us</h4>
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  <a>
                    <h4>Contact</h4>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          {/* THIRD COLUMN */}
          <div>
            <h3 className="mb-16">Community</h3>
            <ul className="flex flex-col gap-6">
              <li>
                <Link href="https://twitter.com/inferatos">
                  <a target="_blank">
                    <h4>Twitter</h4>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://discord.gg/UAVuM68TZm">
                  <a target="_blank">
                    <h4>Discord</h4>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.tiktok.com/@inferatos">
                  <a target="_blank">
                    <h4>TikTok</h4>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/inferatos/">
                  <a target="_blank">
                    <h4>Instagram</h4>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* BOTTOM PART */}
      <div className="border-t border-gray flex text-center flex-col items-center justify-between py-16 md:flex-row">
        <h4>INFERATOS 2022 © All rights reserved</h4>
        <ul className="flex gap-8 ">
          <li>
            <Link href="/privacy">
              <a className="border-b border-white inline-block">
                <h4>Terms of Use</h4>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/privacy">
              <a className="border-b border-white inline-block">
                <h4>Privacy Policy</h4>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
