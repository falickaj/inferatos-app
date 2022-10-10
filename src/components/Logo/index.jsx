import Image from "next/image";

// Logo Import
import LogoLight from "../../assets/logo/LogoLight.svg";
import LogoDark from "../../assets/logo/LogoDark.svg";

// Logotype Import
import LogotypeLight from "../../assets/logo/LogotypeLight.svg";
import LogotypeDark from "../../assets/logo/LogotypeDark.svg";

// Symbol Import
import SymbolLight from "../../assets/logo/SymbolLight.svg";
import SymbolDark from "../../assets/logo/SymbolDark.svg";

export default function Logo({ type, style }) {
  return (
    <>
      {style === "light" ? (
        <>
          {type === "logo" ? (
            <Image src={LogoLight} alt="Logo" width={200} />
          ) : type === "logotype" ? (
            <Image src={LogotypeLight} alt="Logotype" width={200} />
          ) : type === "symbol" ? (
            <Image src={SymbolLight} alt="Symbol" width={200} height={200} />
          ) : null}
        </>
      ) : style === "dark" ? (
        <>
          {type === "logo" ? (
            <Image src={LogoDark} alt="Logo" width={200} />
          ) : type === "logotype" ? (
            <Image src={LogotypeDark} alt="Logotype" width={200} />
          ) : type === "symbol" ? (
            <Image src={SymbolDark} alt="Symbol" width={200} />
          ) : null}
        </>
      ) : null}
    </>
  );
}
