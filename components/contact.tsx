import { Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-wood-dark text-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
            Contacteer jouw schrijnwerker in Vlaams-Brabant
          </h2>
          <p className="text-xl text-cream/80 leading-relaxed">
            Heeft u vragen of wilt u een vrijblijvende offerte? Neem gerust contact met ons op.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-wood-medium rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={28} className="text-cream" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">Telefoon</h3>
            <a href="tel:+32470123456" className="text-cream/80 hover:text-cream transition-colors text-lg">
              0470 12 34 56
            </a>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-wood-medium rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={28} className="text-cream" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">E-mail</h3>
            <a
              href="mailto:info@schrijnwerkerij-janssens.be"
              className="text-cream/80 hover:text-cream transition-colors text-lg break-all"
            >
              info@schrijnwerkerij-janssens.be
            </a>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-wood-medium rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={28} className="text-cream" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">Locatie</h3>
            <p className="text-cream/80 text-lg">Vlaams-Brabant, België</p>
          </div>
        </div>
      </div>
    </section>
  )
}
