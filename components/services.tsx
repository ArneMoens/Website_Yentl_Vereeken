import Image from "next/image"
import { Card } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      title: "Maatkasten",
      description:
        "Kasten op maat voor elke ruimte. Van inbouwkasten tot vrijstaande meubels, volledig afgestemd op uw wensen en interieur.",
      image: "/custom-built-in-wooden-cabinet-in-modern-belgian-h.jpg",
    },
    {
      title: "Keukens op maat",
      description:
        "Unieke keukens die perfect aansluiten bij uw levensstijl. Functioneel, duurzaam en met oog voor design.",
      image: "/custom-wooden-kitchen-with-modern-appliances-belgi.jpg",
    },
    {
      title: "Trappen",
      description:
        "Maatwerk trappen in verschillende stijlen. Van klassiek tot modern, altijd met aandacht voor veiligheid en esthetiek.",
      image: "/custom-wooden-staircase-in-belgian-home-interior.jpg",
    },
    {
      title: "Inbouwkasten",
      description:
        "Optimaal gebruik van beschikbare ruimte met slimme inbouwkasten. Perfect voor slaapkamers, zolders en nissen.",
      image: "/custom-built-in-wardrobes-belgian-bedroom.jpg",
    },
    {
      title: "Interieurafwerking",
      description:
        "Volledige interieurafwerking in hout. Lambrisering, plafondafwerking en decoratieve elementen voor een warm geheel.",
      image: "/wooden-wall-paneling-and-interior-finishing-belgiu.jpg",
    },
    {
      title: "Maatwerk meubilair",
      description:
        "Unieke meubels die perfect passen in uw interieur. Van bureaus tot boekenkasten, elk stuk is uniek.",
      image: "/custom-wooden-furniture-desk-and-shelving-belgium.jpg",
    },
  ]

  return (
    <section id="diensten" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wood-dark mb-6 text-balance">
            Onze schrijnwerk-diensten
          </h2>
          <p className="text-xl text-wood-dark/70 leading-relaxed">
            Van ontwerp tot realisatie. Wij verzorgen het volledige proces met oog voor detail en kwaliteit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} - Schrijnwerkerij Janssens`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-wood-dark mb-3">{service.title}</h3>
                <p className="text-wood-dark/70 leading-relaxed">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
