export interface ServiceInfo {
  name: string;
  description: string;
  image: string;
  href: string;
}

export const siteServices: ServiceInfo[] = [
  {
    name: "Soldering",
    description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce pellentesque justo id ipsum mollis dapibus.
        Aliquam pretium ex enim, id sagittis quam pulvinar commodo.
        Etiam convallis vulputate nisl vel tempor.
        Aliquam ut turpis eu justo ultricies volutpat.
        Integer a convallis ipsum. Integer id lacus commodo.
        `,
    image: "/images/soldering-logo.png",
    href: "/services/soldering",
  },
  {
    name: "Hardware Rentals",
    description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce pellentesque justo id ipsum mollis dapibus.
        Aliquam pretium ex enim, id sagittis quam pulvinar commodo.
        Etiam convallis vulputate nisl vel tempor.
        Aliquam ut turpis eu justo ultricies volutpat.
        Integer a convallis ipsum. Integer id lacus commodo.
        `,
    image: "/images/hardware-rentals-logo.png",
    href: "/services/hardware-rental",
  },
  {
    name: "DigiKey",
    description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce pellentesque justo id ipsum mollis dapibus.
        Aliquam pretium ex enim, id sagittis quam pulvinar commodo.
        Etiam convallis vulputate nisl vel tempor.
        Aliquam ut turpis eu justo ultricies volutpat.
        Integer a convallis ipsum. Integer id lacus commodo.
        `,
    image: "/images/digikey-logo.png",
    href: "/services/digikey",
  },
];
