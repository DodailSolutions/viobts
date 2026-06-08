import Image from "next/image"

const clients = [
  { name: "Wells Fargo", logo: "/images/clients/wells-fargo.png" },
  { name: "Virginia Dept of Health", logo: "/images/clients/vdh.png" },
  { name: "USAID", logo: "/images/clients/usaid.png" },
  { name: "Merck", logo: "/images/clients/merck.png" },
  { name: "FDA", logo: "/images/clients/fda.png" },
  { name: "Delta Dental", logo: "/images/clients/delta-dental.png" },
  { name: "Capital One", logo: "/images/clients/capital-one.png" },
  { name: "Advance Auto Parts", logo: "/images/clients/advance-auto-parts.png" },
]

function ClientLogo({ client }: { client: typeof clients[0] }) {
  return (
    <div className="flex items-center justify-center w-48 h-24 sm:w-60 sm:h-28 mx-2 sm:mx-3 px-6 sm:px-8 rounded-xl bg-white border border-border shadow-sm hover:border-accent/40 hover:shadow-card transition-all duration-300 group/card">
      <Image
        src={client.logo}
        alt={`${client.name} logo`}
        width={240}
        height={120}
        className="max-h-12 sm:max-h-14 w-auto object-contain transition-transform duration-300 group-hover/card:scale-105"
      />
    </div>
  )
}

export function ClientMarquee() {
  return (
    <section className="py-20 bg-surface border-y border-border overflow-hidden">
      <div className="container mb-12">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-medium text-accent tracking-wide uppercase mb-3">Our Clients</p>
          <h2 className="text-h2 font-display font-bold text-text-primary">
            Meet Our Clients
          </h2>
        </div>
      </div>

      {/* Marquee container */}
      <div className="relative w-full flex overflow-hidden group">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[...clients, ...clients].map((client, index) => (
            <ClientLogo key={index} client={client} />
          ))}
        </div>

        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  )
}
