import Link from "next/link";

export default function Button({
  primary,
  secondary,
  filled,
  outlined,
  disabled = false,
  text,
  href,
}) {
  return (
    <>
      {primary ? (
        <>
          {filled ? (
            disabled ? (
              <Link href={href} passHref>
                <a
                  target="_blank"
                  className="bg-gray shadow-lg shadow-gray/50 px-16 py-5 text-dark text-xl rounded-3xl hover:cursor-not-allowed"
                >
                  {text}
                </a>
              </Link>
            ) : (
              <Link href={href} passHref>
                <a
                  target="_blank"
                  className=" bg-primary neon px-16 py-5 text-dark text-xl rounded-3xl hover:bg-primary/90"
                >
                  {text}
                </a>
              </Link>
            )
          ) : outlined ? (
            disabled ? (
              <Link href={href} passHref>
                <a
                  target="_blank"
                  className="bg-gray shadow-lg shadow-gray/50 px-16 py-5 text-dark text-xl rounded-3xl hover:cursor-not-allowed"
                >
                  {text}
                </a>
              </Link>
            ) : (
              <Link href={href} passHref>
                <a
                  target="_blank"
                  className="border-2 border-primary neon px-16 py-5 text-primary text-xl rounded-3xl hover:bg-black/90"
                >
                  {text}
                </a>
              </Link>
            )
          ) : null}
        </>
      ) : secondary ? (
        <>
          {filled ? (
            disabled ? (
              <Link href={href} passHref>
                <a
                  target="_blank"
                  className="bg-gray shadow-lg shadow-gray/50 px-16 py-5 text-dark text-xl rounded-3xl hover:cursor-not-allowed"
                >
                  {text}
                </a>
              </Link>
            ) : (
              <Link href={href} passHref>
                <a
                  target="_blank"
                  className=" bg-black shadow-lg shadow-black/50 px-16 py-5 text-white text-xl rounded-3xl hover:bg-white/10"
                >
                  {text}
                </a>
              </Link>
            )
          ) : outlined ? (
            disabled ? (
              <Link href={href} passHref>
                <a
                  target="_blank"
                  className="bg-gray shadow-lg shadow-gray/50 px-16 py-5 text-dark text-xl rounded-3xl hover:cursor-not-allowed"
                >
                  {text}
                </a>
              </Link>
            ) : (
              <Link href={href} passHref>
                <a
                  target="_blank"
                  className="border-2 border-white shadow-lg shadow-white/50 px-16 py-5 text-white text-xl rounded-3xl hover:bg-black"
                >
                  {text}
                </a>
              </Link>
            )
          ) : null}
        </>
      ) : null}
    </>
  );
}
