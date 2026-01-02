"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to an API endpoint
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 md:p-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-wood-dark mb-6 text-center text-balance">
              Vraag een vrijblijvende offerte aan
            </h2>
            <p className="text-center text-wood-dark/70 mb-8 leading-relaxed">
              Vul het formulier in en wij nemen zo snel mogelijk contact met u op.
            </p>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-wood-medium rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-wood-dark mb-2">Bedankt voor uw aanvraag!</h3>
                <p className="text-wood-dark/70">We nemen zo snel mogelijk contact met u op.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-wood-dark font-medium">
                    Naam *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="Uw volledige naam"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-wood-dark font-medium">
                    E-mailadres *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="uw.email@voorbeeld.be"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-wood-dark font-medium">
                    Telefoonnummer *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="0470 12 34 56"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-wood-dark font-medium">
                    Bericht *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 min-h-32"
                    placeholder="Beschrijf uw project en wensen..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg font-medium">
                  Verstuur offerteaanvraag
                </Button>

                <p className="text-sm text-wood-dark/60 text-center">
                  Door dit formulier te versturen gaat u akkoord met onze privacyverklaring.
                </p>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
