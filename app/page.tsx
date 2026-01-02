import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
    title: "Schrijnwerkerij Janssens | Maatwerk Schrijnwerk in Oost-Vlaanderen",
    description:
        "Op zoek naar een ervaren schrijnwerker in Oost-Vlaanderen? Schrijnwerkerij Janssens is gespecialiseerd in maatwerk: keukens, kasten, trappen en interieur.",
    keywords: [
        "schrijnwerker",
        "schrijnwerkerij",
        "maatwerk",
        "Oost-Vlaanderen",
        "keukens op maat",
        "kasten",
        "trappen",
        "interieur",
    ],
    authors: [{ name: "Schrijnwerkerij Janssens" }],
    creator: "Schrijnwerkerij Janssens",
    publisher: "Schrijnwerkerij Janssens",
    alternates: {
        canonical: "https://www.schrijnwerkerij-janssens.be",
    },
    openGraph: {
        type: "website",
        locale: "nl_BE",
        url: "https://www.schrijnwerkerij-janssens.be",
        siteName: "Schrijnwerkerij Janssens",
        title: "Schrijnwerkerij Janssens | Maatwerk Schrijnwerk in Oost-Vlaanderen",
        description:
            "Op zoek naar een ervaren schrijnwerker in Oost-Vlaanderen? Schrijnwerkerij Janssens is gespecialiseerd in maatwerk: keukens, kasten, trappen en interieur.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Schrijnwerkerij Janssens - Maatwerk schrijnwerk",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Schrijnwerkerij Janssens | Maatwerk Schrijnwerk in Oost-Vlaanderen",
        description:
            "Op zoek naar een ervaren schrijnwerker in Oost-Vlaanderen? Schrijnwerkerij Janssens is gespecialiseerd in maatwerk: keukens, kasten, trappen en interieur.",
        images: ["/images/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
}

export default function Page() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        name: "Schrijnwerkerij Janssens",
        description: "Schrijnwerkerij gespecialiseerd in maatwerk schrijnwerk: keukens, kasten, trappen en interieur",
        url: "https://www.schrijnwerkerij-janssens.be",
        telephone: "+32470123456",
        email: "info@schrijnwerkerij-janssens.be",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Oost-Vlaanderen",
            addressCountry: "BE",
            addressRegion: "Oost-Vlaanderen",
        },
        areaServed: {
            "@type": "GeoCircle",
            geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 50.8798,
                longitude: 4.7005,
            },
            geoRadius: "50000",
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "12:00",
            },
        ],
        priceRange: "€€",
        image: "https://www.schrijnwerkerij-janssens.be/images/og-image.jpg",
        sameAs: ["https://www.facebook.com/schrijnwerkerijjanssens", "https://www.instagram.com/schrijnwerkerijjanssens"],
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Projects />
                <Gallery />
                <Contact />
                <ContactForm />
            </main>
            <Footer />
        </>
    )
}
