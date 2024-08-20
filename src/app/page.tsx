import Image from "next/image";
import Header from "@/components/global/header"
import Hero from "@/components/pages/home/hero"
import Service from "@/components/pages/home/service"

export default function Home() {
  return (
    <main>
     <Header/>
     <Hero/>
     <Service/>
    </main>
  );
}
