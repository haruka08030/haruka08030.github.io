"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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
              Design × Research × Code. Exploring the intersection of thoughtful design and reliable engineering.
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
        <div className="mb-6">
          <h2 className="font-serif text-3xl md:text-4xl">Contact</h2>
          <p className="text-muted mt-2">I’m open to collaborations and interesting problems.</p>
        </div>
        <div className="prose">
          <p>
            Email: <a className="underline decoration-border underline-offset-4 hover:text-fg" href="mailto:haruka08030@gmail.com">haruka08030@gmail.com</a>
          </p>
        </div>
      </section>
    </div>
  )
}

