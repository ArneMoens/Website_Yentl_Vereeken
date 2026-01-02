import Image from "next/image"
import { Card } from "@/components/ui/card"

export function Projects() {
  const projects = [
    {
      title: "Maatkast in woning te Leuven",
      description:
        "Volledig op maat gemaakte inbouwkast voor een slaapkamer. Optimaal gebruik van de beschikbare ruimte met schuifdeuren in eik.",
      location: "Leuven",
      image: "/custom-wooden-wardrobe-with-sliding-doors-belgian-.jpg",
    },
    {
      title: "Keuken op maat in Vilvoorde",
      description:
        "Moderne keuken in notelaar met strakke lijnen. Inclusief kookeiland en maatwerk kasten tot het plafond.",
      location: "Vilvoorde",
      image: "/modern-custom-wooden-kitchen-with-island-vilvoorde.jpg",
    },
    {
      title: "Trappenproject in Tienen",
      description: "Klassieke eiken trap met gedraaide spijlen. Volledig geïntegreerd in het bestaande interieur.",
      location: "Tienen",
      image: "/classic-wooden-staircase-with-turned-balusters-bel.jpg",
    },
    {
      title: "Kantoormeubels in Aarschot",
      description: "Maatwerk kantoorinrichting met bureau, boekenkasten en opbergmeubels in donker eikenhout.",
      location: "Aarschot",
      image: "/custom-office-furniture-wooden-desk-and-bookshelve.jpg",
    },
    {
      title: "Volledige interieur in Rotselaar",
      description:
        "Complete interieurafwerking met lambrisering, inbouwkasten en maatwerk meubels voor een nieuwbouwwoning.",
      location: "Rotselaar",
      image: "/complete-wooden-interior-renovation-belgian-modern.jpg",
    },
    {
      title: "Dressing op maat in Haacht",
      description:
        "Luxe dressing met optimale indeling, zachte close systemen en LED-verlichting. Uitgevoerd in notenhout.",
      location: "Haacht",
      image: "/luxury-custom-walk-in-closet-with-led-lighting-bel.jpg",
    },
  ]

  return (
    <section id="realisaties" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wood-dark mb-6 text-balance">
            Realisaties van schrijnwerk op maat
          </h2>
          <p className="text-xl text-wood-dark/70 leading-relaxed">
            Ontdek enkele van onze recente projecten in Oost-Vlaanderen. Elk project is uniek en volledig afgestemd op de
            wensen van onze klanten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} - Maatwerk schrijnwerk door Schrijnwerkerij Janssens`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-wood-medium mb-2">{project.location}</div>
                <h3 className="font-serif text-xl font-bold text-wood-dark mb-3">{project.title}</h3>
                <p className="text-wood-dark/70 leading-relaxed">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
