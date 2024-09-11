import Image from "next/image";
import Header from "@/components/global/header"
import Hero from "@/components/pages/home/hero"
import Service from "@/components/pages/home/service"
import Navbar from "@/components/global/navbar/index"

export default function Home() {
  return (
    <main>
    <Navbar/>
     
     <Hero/>
     <Service/>
    </main>
  );
}
