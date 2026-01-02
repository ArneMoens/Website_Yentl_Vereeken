import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
    title: "Galerij - Onze Realisaties | Schrijnwerkerij Janssens",
    description:
        "Bekijk onze uitgebreide galerij met realisaties: keukens, kasten, trappen, deuren en ramen, en interieur schrijnwerk in Vlaams-Brabant.",
    openGraph: {
        title: "Galerij - Onze Realisaties | Schrijnwerkerij Janssens",
        description: "Ontdek onze vakmanschap in hout: keukens, kasten, trappen en meer",
    },
}

const galleryCategories = [
    {
        title: "Keukens",
        description: "Maatwerk keukens op maat van uw wensen",
        images: [
            { src: "/images/custom-kitchen-wood-modern.jpg", alt: "Moderne houten keuken op maat" },
            { src: "/images/kitchen-cabinets-oak-finish.jpg", alt: "Eikenhouten keukenkasten" },
            { src: "/images/kitchen-island-custom-carpentry.jpg", alt: "Keukeneiland op maat" },
            { src: "/images/modern-kitchen-walnut-design.jpg", alt: "Moderne keuken in notenhout" },
        ],
    },
    {
        title: "Kasten & Dressings",
        description: "Op maat gemaakte kasten voor optimale opbergruimte",
        images: [
            { src: "/images/built-in-wardrobe-bedroom.jpg", alt: "Ingebouwde kledingkast slaapkamer" },
            { src: "/images/custom-closet-sliding-doors.jpg", alt: "Dressing met schuifdeuren" },
            { src: "/images/built-in-bookcase-custom-wood.jpg", alt: "Ingebouwde boekenkast" },
            { src: "/images/wardrobe-interior-organization.jpg", alt: "Kast interieur indeling" },
        ],
    },
    {
        title: "Trappen",
        description: "Elegante houten trappen als blikvanger",
        images: [
            { src: "/images/wooden-staircase-oak-finish.jpg", alt: "Houten trap in eik" },
            { src: "/images/modern-stairs-glass-railing.jpg", alt: "Moderne trap met glazen leuning" },
            { src: "images//wooden-stairs-craftsmanship-detail.jpg", alt: "Detail vakmanschap houten trap" },
            { src: "/images/floating-wooden-stairs-modern.jpg", alt: "Zwevende houten trap" },
        ],
    },
    {
        title: "Deuren & Ramen",
        description: "Kwalitatieve houten deuren en raamkozijnen",
        images: [
            { src: "/images/custom-wooden-door-entrance.jpg", alt: "Houten voordeur op maat" },
            { src: "/images/interior-door-oak-modern.jpg", alt: "Moderne eikenhouten binnendeur" },
            { src: "/images/wooden-window-frames-traditional.jpg", alt: "Traditionele houten raamkozijnen" },
            { src: "/images/sliding-door-wood-glass.jpg", alt: "Schuifdeur hout en glas" },
        ],
    },
    {
        title: "Interieur Schrijnwerk",
        description: "Diverse interieurprojecten in hout",
        images: [
            { src: "/images/wooden-wall-paneling-modern-interior.jpg", alt: "Moderne houten wandbekleding" },
            { src: "/images/wooden-joinery-detail-furniture.jpg", alt: "Detail schrijnwerk meubels" },
            { src: "/images/custom-tv-cabinet-living-room.jpg", alt: "TV-meubel op maat" },
            { src: "/images/wooden-shelving-office-space.jpg", alt: "Houten rekken kantoorruimte" },
        ],
    },
]

export default function GalerijPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-background pt-20">
                {/* Header Section */}
                <section className="bg-primary/5 py-16">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 text-center">
                            Onze Realisaties
                        </h1>
                        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                            Ontdek ons vakmanschap door onze uitgebreide galerij. Van moderne keukens tot elegante trappen, elk
                            project getuigt van onze toewijding aan kwaliteit en detail.
                        </p>
                    </div>
                </section>

                {/* Gallery Categories */}
                <div className="container mx-auto px-4 py-16">
                    {galleryCategories.map((category, categoryIndex) => (
                        <section key={categoryIndex} className="mb-20 last:mb-0">
                            <div className="mb-8">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3">{category.title}</h2>
                                <p className="text-lg text-muted-foreground">{category.description}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.images.map((image, imageIndex) => (
                                    <Card
                                        key={imageIndex}
                                        className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300"
                                    >
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <img
                                                src={image.src || "/placeholder.svg"}
                                                alt={image.alt}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                                    <p className="text-white font-medium text-sm">{image.alt}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>

                            {categoryIndex < galleryCategories.length - 1 && <div className="mt-12 border-b border-border" />}
                        </section>
                    ))}
                </div>

                {/* CTA Section */}
                <section className="bg-primary/5 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-serif font-bold text-primary mb-4">Geïnspireerd door onze realisaties?</h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Laat ons uw project werkelijkheid maken. Neem contact op voor een vrijblijvende offerte.
                        </p>
                        <a
                            href="/#contact"
                            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                        >
                            Contacteer Ons
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
