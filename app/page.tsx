"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="container pt-12 md:pt-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <motion.h1
              className="font-serif text-4xl md:text-6xl leading-tight"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Haruka – Portfolio
            </motion.h1>
            <p className="mt-4 text-lg text-muted max-w-prose">
              Economics × Finance × Programming
              <br />
              Economics student pursuing Bachelor&#39;s Degree and CPA.
            </p>
            <div className="mt-6 flex gap-3">
              <Button asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-md overflow-hidden border border-border">
            <Image src="/images/hero.svg" alt="Hero" fill priority sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container mt-20 md:mt-28">
        <div className="mb-8 md:mb-10">
          <h2 className="font-serif text-3xl md:text-4xl">Projects</h2>
          <p className="text-muted mt-2">Selected work presented simply.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="font-serif">Project {i}</CardTitle>
                <CardDescription>Short description goes here.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-[4/3] overflow-hidden rounded border border-border">
                  <Image src={`/images/project${i}.svg`} alt={`Project ${i}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mt-20 md:mt-28 mb-24">
        <div className="mb-8 md:mb-10 text-center md:text-left">
          <h2 className="font-serif text-3xl md:text-4xl">Get in touch</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Info card */}
          <Card className="h-max">
            <CardHeader>
              <CardTitle className="font-serif">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <a href="mailto:haruka08030@gmail.com" className="flex items-center gap-3 hover:text-fg transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>haruka08030@gmail.com</span>
                </a>
                <a
                  href="tel:+819000000000"
                  className="flex items-center gap-3 hover:text-fg transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>+1 (925) 293-6440</span>
                </a>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span>San Francisco Bay Area</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Form */}
          <Card>
            <CardContent className="pt-6">
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.currentTarget as HTMLFormElement
                  const data = new FormData(form)
                  const name = (data.get('name') as string) || ''
                  const from = (data.get('email') as string) || ''
                  const subject = (data.get('subject') as string) || ''
                  const message = (data.get('message') as string) || ''
                  const mailto = new URL(`mailto:haruka08030@gmail.com`)
                  const finalSubject = subject || 'Portfolio Contact'
                  const body = `${message}\n\n— ${name || 'Anonymous'} (${from || 'no email'})`
                  mailto.searchParams.set('subject', finalSubject)
                  mailto.searchParams.set('body', body)
                  window.location.href = mailto.toString()
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm">Name</label>
                    <input
                      name="name"
                      type="text"
                      className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-fg/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-fg/20"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-fg/20"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm">Message</label>
                  <textarea
                    name="message"
                    className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-fg/20 min-h-[160px]"
                    placeholder="Write your message..."
                  />
                </div>
                <div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
