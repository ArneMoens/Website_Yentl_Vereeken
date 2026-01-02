"use client"

import type React from "react"

import Link from "next/link"

export function Footer() {
    const currentYear = new Date().getFullYear()

    const navItems = [
        { label: "Home", href: "#home" },
        { label: "Over ons", href: "#over-ons" },
        { label: "Diensten", href: "#diensten" },
        { label: "Realisaties", href: "#realisaties" },
        { label: "Contact", href: "#contact" },
    ]

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <footer className="bg-wood-dark text-cream py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-wood-medium rounded flex items-center justify-center">
                                <span className="text-cream font-bold text-xl">SJ</span>
                            </div>
                            <span className="font-serif text-xl font-bold">Schrijnwerkerij Janssens</span>
                        </div>
                        <p className="text-cream/70 leading-relaxed">
                            Schrijnwerk op maat in Oost-Vlaanderen. Ambachtelijke kwaliteit sinds 2004.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-serif text-lg font-bold mb-4">Navigatie</h3>
                        <nav className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-cream/70 hover:text-cream transition-colors"
                                    onClick={(e) => scrollToSection(e, item.href)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <h3 className="font-serif text-lg font-bold mb-4">Contact</h3>
                        <div className="flex flex-col gap-2 text-cream/70">
                            <a href="tel:+32470123456" className="hover:text-cream transition-colors">
                                0470 12 34 56
                            </a>
                            <a
                                href="mailto:info@schrijnwerkerij-janssens.be"
                                className="hover:text-cream transition-colors break-all"
                            >
                                info@schrijnwerkerij-janssens.be
                            </a>
                            <p>Oost-Vlaanderen, België</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-cream/20 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-cream/60 text-sm">
                            © {currentYear} Schrijnwerkerij Janssens. Alle rechten voorbehouden.
                        </p>
                        <div className="flex gap-6">
                            <Link href="#" className="text-cream/60 hover:text-cream text-sm transition-colors">
                                Privacyverklaring
                            </Link>
                            <Link href="#" className="text-cream/60 hover:text-cream text-sm transition-colors">
                                Algemene voorwaarden
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
