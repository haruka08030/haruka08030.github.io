import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, MapPin, Phone, GraduationCap, School } from 'lucide-react'
import { getDictionary } from '@/lib/get-dictionary'
import { Locale } from '@/i18n-config'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import ContactForm from '@/components/contact-form'
import { projectsData } from '@/data/projects'
import ProjectSection from '@/components/project-section'

export default async function HomePage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)
  const d = dictionary.page
  const projects = projectsData[lang]

  return (
    <div>
      {/* Hero */}
      <section className="container pt-12 md:pt-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight">{d.hero.title}</h1>
            <p className="mt-4 text-lg text-muted max-w-prose">
              {d.hero.subtitle}
              <br />
              {d.hero.description}
            </p>
            <div className="mt-6 flex gap-3">
              <Button asChild>
                <Link href="#projects">{d.hero.viewProjects}</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">{d.hero.contact}</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-md overflow-hidden border border-border">
            <Image src="/images/hero.svg" alt="Hero" fill priority sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      {/* Projects */}
      <ProjectSection projects={projects} dictionary={d.projects} />

      {/* Education */}
      <section id="education" className="bg-white mt-20 md:mt-28">
        <div className="container py-20 md:py-28">
          <div className="mb-8 md:mb-10">
            <h2 className="font-serif text-3xl md:text-4xl">{d.education.title}</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
            {/* Community College */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-serif">
                  <GraduationCap className="h-5 w-5" />
                  {d.education.dvc.name}
                </CardTitle>
                <p className="mt-1 text-sm text-muted">{d.education.dvc.degree}</p>
                <CardDescription>{d.education.dvc.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>{d.education.dvc.major}</li>
                  <li>{d.education.dvc.gpa}</li>
                  <li>{d.education.dvc.description}</li>
                </ul>
              </CardContent>
            </Card>

            {/* High School */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-serif">
                  <School className="h-5 w-5" />
                  {d.education.pennfoster.name}
                </CardTitle>
                <p className="mt-1 text-sm text-muted">{d.education.pennfoster.degree}</p>
                <CardDescription>{d.education.pennfoster.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>{d.education.pennfoster.description}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-accent/5">
        <div className="container py-20 md:py-28">
          <div className="mb-8 md:mb-10 text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-4xl">{d.contact.title}</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Info card */}
            <Card className="h-max">
              <CardHeader>
                <CardTitle className="font-serif">{d.contact.infoTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <a href="mailto:haruka08030@gmail.com" className="flex items-center gap-3 hover:text-fg transition-colors">
                    <Mail className="h-5 w-5" />
                    <span>haruka08030@gmail.com</span>
                  </a>
                  <a href="tel:+15106345712" className="flex items-center gap-3 hover:text-fg transition-colors">
                    <Phone className="h-5 w-5" />
                    <span>+1 (510) 634-5712</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5" />
                    <span>{d.contact.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Form */}
            <Card>
              <CardContent className="pt-6">
                <ContactForm dictionary={d.contact.form} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}