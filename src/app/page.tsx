import { About } from "@/components/about";
import { Chapters } from "@/components/chapters";
import { Contact } from "@/components/contact";
import { Events } from "@/components/events";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Team } from "@/components/team";

export default function Home() {
  return (
    <>
      <Hero />

      <About />

      <Chapters />

      <Events />

      <Services />

      <Team />

      <Contact />
    </>
  );
}
