import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";

import Logo from "../../components/Logo";
import Button from "../../components/Button";

import menuMobile from "../../assets/icons/menu.svg";
import closeMobile from "../../assets/icons/close.svg";

const menu = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Collection",
    href: "/collection",
  },
  {
    name: "Coin",
    href: "/coin",
  },
  {
    name: "About us",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="container mx-auto px-6 mt-6 flex justify-between items-center md:mt-8">
        <Link href="/">
          <a>
            <Logo type="logo" style="light" />
          </a>
        </Link>
        {/* Mobile */}
        <div className="block lg:hidden">
          <Image
            src={menuMobile}
            alt="menu"
            className="w-8 h-8 cursor-pointer p-4"
            onClick={() => setIsOpen(true)}
          />
        </div>
        {/* Menu Desktop*/}
        <nav className="hidden lg:block">
          <ul className="flex gap-16">
            {menu.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  <a
                    className={
                      router.pathname === item.href
                        ? "border-b border-primary"
                        : ""
                    }
                  >
                    {/* {item.name} */}
                    <h4
                      className={
                        router.pathname === item.href
                          ? "border-b border-primary"
                          : ""
                      }
                    >
                      {item.name}
                    </h4>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:block">
          <Button
            primary
            filled
            text="Connect"
            href="https://discord.gg/UAVuM68TZm"
          />
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="block lg:hidden fixed bg-dark w-full h-screen top-0 z-30 p-16 md:p-20 overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              transition: {
                duration: 0.4,
                ease: "easeInOut",
                delay: 0.5,
              },
              opacity: 1,
            }}
            className="absolute flex items-end justify-end right-6 top-12"
          >
            <Image
              src={closeMobile}
              alt="close"
              className="w-8 h-8 cursor-pointer p-4"
              onClick={() => setIsOpen(false)}
            />
          </motion.div>
          <ul className="flex flex-col gap-12 mt-12 justify-between">
            {menu.map((item, index) => (
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.2 },
                }}
                key={item.name}
              >
                <Link href={item.href}>
                  <a
                    className={
                      router.pathname === item.href
                        ? "border-b border-primary text-3xl"
                        : "text-4xl"
                    }
                  >
                    {/* {item.name} */}
                    <h4
                      className={
                        router.pathname === item.href
                          ? "border-b border-primary text-4xl"
                          : "text-4xl"
                      }
                    >
                      {item.name}
                    </h4>
                  </a>
                </Link>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 1 },
              }}
              className="bg-primary text-center py-5 rounded-lg"
            >
              <Link href="/contact">
                <a>
                  <h4 className="text-3xl md:text-4xl">Connect</h4>
                </a>
              </Link>
            </motion.li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
