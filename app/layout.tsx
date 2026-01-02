import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
})

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: "Schrijnwerkerij Janssens | Maatwerk Schrijnwerk in Oost-Vlaanderen",
    description:
        "Op zoek naar een ervaren schrijnwerker in Oost-Vlaanderen? Schrijnwerkerij Janssens is gespecialiseerd in maatwerk: keukens, kasten, trappen en interieur.",
    generator: "v0.app",
    icons: {
        icon: [
            {
                url: "/icon-light-32x32.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/icon-dark-32x32.png",
                media: "(prefers-color-scheme: dark)",
            },
            {
                url: "/icon.svg",
                type: "image/svg+xml",
            },
        ],
        apple: "/apple-icon.png",
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="nl-BE" className={`${inter.variable} ${playfairDisplay.variable}`}>
        <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        </body>
        </html>
    )
}
