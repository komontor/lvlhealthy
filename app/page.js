import Image from "next/image";
import Navbar from "./components/Navbar";
import brosur from "@/public/assets/images/brosur.jpg";
import Footer from "./components/Footer";
import MobileFooter from "./components/MobileFooter";

export const metadata = {
  title: 'LVLHEALTHY | Anasayfa',
}


export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Image
          src={brosur}
          alt="Hero"
          className="flex object-cover pt-1 mt-28 md:mt-0"
          width={1920}
          height={1080}
          quality={100}
        />
        <Footer/>
        <MobileFooter/>
    </main>
  );
}
