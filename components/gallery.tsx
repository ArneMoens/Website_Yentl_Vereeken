import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Gallery() {
  const images = [
    {
      src: "/custom-wooden-cabinet-craftsmanship-detail-belgium.jpg",
      alt: "Detail van maatwerk kast in eikenhout",
    },
    {
      src: "/wooden-kitchen-cabinet-doors-quality-finish-belgiu.jpg",
      alt: "Afwerking van keukenkasten met hoogwaardige beslag",
    },
    {
      src: "/wooden-stairs-craftsmanship-detail.jpg",
      alt: "Detail van maatwerk houten trap",
    },
    {
      src: "/wooden-joinery-detail-furniture.jpg",
      alt: "Ambachtelijke houtverbinding in meubelstuk",
    },
    {
      src: "/built-in-bookcase-custom-wood.jpg",
      alt: "Ingebouwde boekenkasten op maat",
    },
    {
      src: "/wooden-wall-paneling-modern-interior.jpg",
      alt: "Houten lambrisering in modern interieur",
    },
  ]

  return (
    <section id="galerij" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wood-dark mb-6 text-balance">
            Inspiratie en vakmanschap
          </h2>
          <p className="text-xl text-wood-dark/70 leading-relaxed">
            Een selectie van ons ambachtelijk schrijnwerk. Elk project getuigt van onze passie voor kwaliteit en detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative h-80 overflow-hidden rounded-lg group">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild size="lg" className="bg-wood-medium hover:bg-wood-dark text-cream">
            <Link href="/galerij">Bekijk alle foto's</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
