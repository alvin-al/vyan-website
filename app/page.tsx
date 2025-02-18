import About from "@/components/sections/About";
import ClientSaid from "@/components/sections/ClientSaid";
import Contact from "@/components/sections/Contact";
import Gallery from "@/components/sections/Gallery";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import PopularDestinations from "@/components/sections/PopularDestinations";
import Video from "@/components/sections/Video";

export default function Home() {
  return (
    <div className=''>
      <Header />
      <main className='grid gap-24'>
        <Hero />
        <Video />
        <About />
        <PopularDestinations />
        <ClientSaid />
        <Gallery />
        <Contact />
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'></footer>
    </div>
  );
}
