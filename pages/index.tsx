import Image from "next/image";
import Home from "../pages/home";

export default function Index() {
  return (
    <>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <Home />
    </>
  );
}
