import { Check } from "lucide-react"

export function About() {
  const features = ["Meer dan 20 jaar ervaring", "Actief in Oost-Vlaanderen", "Duurzame materialen"]

  return (
    <section id="over-ons" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wood-dark mb-6 text-balance">
            Ervaren schrijnwerker met passie voor maatwerk
          </h2>
          <div className="prose prose-lg max-w-none text-wood-dark/80 leading-relaxed">
            <p className="text-xl mb-6">
              Schrijnwerkerij Janssens is een Belgische schrijnwerkerij gespecialiseerd in maatwerk in hout. Wij
              realiseren keukens, kasten, trappen en volledige interieurs op maat voor klanten in Oost-Vlaanderen en
              omstreken.
            </p>
            <p className="text-lg mb-8">
              Met een passie voor ambachtelijk vakmanschap en oog voor detail, transformeren wij uw wensen in unieke
              stukken die perfect aansluiten bij uw interieur. Elk project benaderen wij met dezelfde toewijding en zorg
              voor kwaliteit.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-wood-medium flex items-center justify-center flex-shrink-0 mt-1">
                  <Check size={16} className="text-cream" />
                </div>
                <span className="text-lg font-medium text-wood-dark">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
