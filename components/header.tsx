"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { label: "Home", href: "#home" },
        { label: "Over ons", href: "#over-ons" },
        { label: "Schrijnwerk op maat", href: "#diensten" },
        { label: "Realisaties", href: "#realisaties" },
        { label: "Galerij", href: "/galerij" },
        { label: "Contact", href: "#contact" },
    ]

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault()
            if (href === "#home") {
                window.scrollTo({ top: 0, behavior: "smooth" })
            } else {
                const element = document.querySelector(href)
                if (element) element.scrollIntoView({ behavior: "smooth" })
            }
            setIsMobileMenuOpen(false)
        }
        // Otherwise, allow Next.js Link to navigate normally
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-wood-dark/40 backdrop-blur-md ${
                isScrolled ? "shadow-lg" : ""
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link
                        href="#home"
                        className="flex items-center gap-2"
                        onClick={(e) => scrollToSection(e, "#home")}
                    >
                        <div className="w-10 h-10 bg-wood-medium rounded flex items-center justify-center">
                            <span className="text-cream font-bold text-xl">SJ</span>
                        </div>
                        <span className="font-serif text-xl font-bold text-cream">
                            Schrijnwerkerij Janssens
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-cream hover:text-wood-light transition-colors"
                                onClick={(e) => scrollToSection(e, item.href)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <Button asChild size="lg" className="font-medium">
                            <Link
                                href="#contact"
                                onClick={(e) => scrollToSection(e, "#contact")}
                            >
                                Offerte aanvragen
                            </Link>
                        </Button>
                    </div>

                    <button
                        className="md:hidden p-2 text-cream"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-background border-t border-border">
                    <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-base font-medium text-wood-dark hover:text-wood-medium transition-colors py-2"
                                onClick={(e) => scrollToSection(e, item.href)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Button asChild size="lg" className="w-full font-medium mt-2">
                            <Link
                                href="#contact"
                                onClick={(e) => scrollToSection(e, "#contact")}
                            >
                                Offerte aanvragen
                            </Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header
