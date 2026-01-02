import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/professional-carpenter-workshop-with-custom-wooden.jpg"
          alt="Ambachtelijk schrijnwerk op maat door Schrijnwerkerij Janssens"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-wood-dark/90 via-wood-dark/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-cream mb-6 leading-tight text-balance">
            Schrijnwerker in Vlaams-Brabant voor maatwerk in hout
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 mb-8 leading-relaxed text-pretty">
            Ambachtelijk schrijnwerk op maat voor woningen en appartementen in Vlaams-Brabant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="#contact">
                Vraag je offerte aan <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-cream/10 backdrop-blur-sm border-cream text-cream hover:bg-cream hover:text-wood-dark"
            >
              <Link href="#realisaties">Bekijk onze realisaties</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-cream/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
