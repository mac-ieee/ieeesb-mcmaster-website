import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { Form } from "@heroui/form";
import Link from "next/link";

import { siteChapters } from "@/config/site.chapters";
import { siteServices } from "@/config/site.services";
import { DiscordIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";

const IEEE_LOGO = "/images/ieee-logo.png";
const MCMASTER_LOGO = "/images/mcmaster-logo.png";

const SECTION_BUTTON_STYLE =
  "border flex-1 flex flex-col rounded-xl p-2 drop-shadow-md bg-background hover:cursor-pointer hover:scale-105 transition-transform duration-300";

function Header() {
  return (
    <header className="flex flex-row items-center justify-between w-full">

      <div className="w-[100vw] bg-sky-500">
      <div className="text-2xl m-10 font-bold text-white">
      Welcome to the IEEE McMaster Student Branch
      </div>
      </div>
    
    </header>
  );
}

function Pictures() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex flex-col items-center gap-4">
        <img alt="IEEE Logo" className="w-1/2 border" src={IEEE_LOGO} />
        <h2 className="text-2xl font-bold">IEEE Logo</h2>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img alt="McMaster Logo" className="w-1/2 border" src={MCMASTER_LOGO} />
        <h2 className="text-2xl font-bold">McMaster Logo</h2>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section className="flex flex-col items-center gap-4" id="about">
      <div>
        <h2 className="text-2xl font-bold">About Us</h2>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          pellentesque justo id ipsum mollis dapibus. Aliquam pretium ex enim,
          id sagittis quam pulvinar commodo. Etiam convallis vulputate nisl vel
          tempor. Aliquam ut turpis eu justo ultricies volutpat. Integer a
          convallis ipsum. Integer id lacus commodo, rhoncus quam a, porta arcu.
          Proin nec velit vel nulla dictum ultricies. Suspendisse porttitor mi
          vitae aliquam blandit. Etiam ultricies magna eu neque semper sagittis.
          Nulla vestibulum, arcu ac vestibulum imperdiet, arcu metus finibus
          turpis, non mollis lectus metus sit amet libero. Fusce sed diam at dui
          iaculis lacinia. Praesent sit amet diam elementum, blandit turpis et,
          vestibulum ipsum. Suspendisse egestas orci et eros rhoncus, non
          vehicula odio efficitur. Aenean pellentesque tempor scelerisque.
          Phasellus vitae lobortis eros. Nullam in dictum risus, id pretium
          libero. Donec egestas iaculis ligula vitae lobortis. Proin bibendum
          massa non purus interdum, eu pharetra ipsum euismod. Nulla justo
          turpis, sollicitudin a posuere vitae, vehicula a est. Praesent
          ullamcorper eros non sem imperdiet, ut sodales sem accumsan. Curabitur
          lacinia, enim ac eleifend ultricies, est est tristique nulla, id
          blandit metus felis at urna. Duis et ultricies turpis, sed egestas
          augue.
        </div>
      </div>
    </section>
  );
}

function Activities() {
  return (
    <section className="flex flex-col items-center gap-4">
      <div>
        <h2 className="text-2xl font-bold">Activities and Events</h2>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          pellentesque justo id ipsum mollis dapibus. Aliquam pretium ex enim,
          id sagittis quam pulvinar commodo. Etiam convallis vulputate nisl vel
          tempor. Aliquam ut turpis eu justo ultricies volutpat. Integer a
          convallis ipsum. Integer id lacus commodo, rhoncus quam a, porta arcu.
          Proin nec velit vel nulla dictum ultricies. Suspendisse porttitor mi
          vitae aliquam blandit. Etiam ultricies magna eu neque semper sagittis.
          Nulla vestibulum, arcu ac vestibulum imperdiet, arcu metus finibus
          turpis, non mollis lectus metus sit amet libero. Fusce sed diam at dui
          iaculis lacinia. Praesent sit amet diam elementum, blandit turpis et,
          vestibulum ipsum. Suspendisse egestas orci et eros rhoncus, non
          vehicula odio efficitur. Aenean pellentesque tempor scelerisque.
          Phasellus vitae lobortis eros. Nullam in dictum risus, id pretium
          libero. Donec egestas iaculis ligula vitae lobortis. Proin bibendum
          massa non purus interdum, eu pharetra ipsum euismod. Nulla justo
          turpis, sollicitudin a posuere vitae, vehicula a est. Praesent
          ullamcorper eros non sem imperdiet, ut sodales sem accumsan. Curabitur
          lacinia, enim ac eleifend ultricies, est est tristique nulla, id
          blandit metus felis at urna. Duis et ultricies turpis, sed egestas
          augue.
        </div>
      </div>
    </section>
  );
}

function Chapters() {
  return (
    <section className="flex flex-col items-start gap-4">
      <div className="flex flex-row">
        <h2 className="text-2xl text-left font-bold flex-1">Chapters</h2>
      </div>
      <div className="md:flex-row flex-col flex md:space-x-4 md:space-y-0 space-y-2">
        {siteChapters.map((chapter, index) => (
          <Link
            key={index}
            className={SECTION_BUTTON_STYLE}
            href={chapter.href}
          >
            <h3 className="text-xl font-bold text-center">{chapter.name}</h3>
            <img
              alt={chapter.name}
              className="w-full border"
              src={chapter.image}
            />
            <div>{chapter.description}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="flex flex-col w-full gap-4">
      <div className="flex flex-row">
        <h2 className="text-2xl text-left font-bold flex-1">Services</h2>
      </div>
      <div className="md:flex-row flex-col flex md:space-x-4 md:space-y-0 space-y-2">
        {siteServices.map((service, index) => (
          <Link
            key={index}
            className={SECTION_BUTTON_STYLE}
            href={service.href}
          >
            <img
              alt={service.name}
              className="w-full border"
              src={service.image}
            />
            <h3 className="text-xl font-bold text-center">{service.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ContactUs() {
  return (
    <section className="flex flex-col w-full gap-4" id="contact">
      <div className="flex flex-row">
        <h2 className="text-2xl text-left font-bold flex-1">Contact Us</h2>
      </div>
      <div className="flex flex-row space-x-4  justify-center">
        <Link
          className="border flex flex-col rounded-xl p-2 drop-shadow-md bg-background hover:cursor-pointer hover:scale-105 transition-transform duration-300"
          href="https://discord.com/invite/5S5pBy46dW"
          target="_blank"
        >
          <DiscordIcon />
        </Link>

        <Link
          className="border flex flex-col rounded-xl p-2 drop-shadow-md bg-background hover:cursor-pointer hover:scale-105 transition-transform duration-300"
          href="https://www.linkedin.com/company/mcmasterieee/"
          target="_blank"
        >
          <LinkedInIcon />
        </Link>

        <Link
          className="border flex flex-col rounded-xl p-2 drop-shadow-md bg-background hover:cursor-pointer hover:scale-105 transition-transform duration-300"
          href="https://www.instagram.com/mcmaster_ieee/"
          target="_blank"
        >
          <InstagramIcon />
        </Link>
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl text-left font-bold flex-1">
          or Send Us a Message
        </h2>
        <div>
          <Form className="w-full flex flex-row space-y-4">
            <div className="flex flex-col flex-1 gap-4">
              <div className="flex flex-row gap-4">
                <Input
                  isRequired
                  label="Name"
                  labelPlacement="outside"
                  name="name"
                  placeholder="Enter your name"
                />

                <Input
                  isRequired
                  label="Email"
                  labelPlacement="outside"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>

              <Input
                isRequired
                label="Subject"
                labelPlacement="outside"
                name="Subject"
                placeholder="Enter the subject"
              />

              <Textarea
                label="Description"
                placeholder="Enter your description"
              />

              <div className="flex gap-4">
                <Button className="w-full" color="primary" type="submit">
                  Submit
                </Button>
                <Button type="reset" variant="bordered">
                  Reset
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-4 md:px-20">
      <Header />
      <Pictures />
      <div className="flex flex-col md:flex-row md:space-x-4">
        <AboutUs />
        <Activities />
      </div>
      <Chapters />
      <Services />
      <ContactUs />
    </section>
  );
}
