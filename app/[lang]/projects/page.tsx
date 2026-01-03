import { getDictionary } from '@/lib/get-dictionary'
import { Locale, i18n } from '@/i18n-config'
import { projectsData } from '@/data/projects'
import ProjectSection from '@/components/project-section'
import { Fragment } from 'react'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function ProjectsPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)
  const d = dictionary.page
  const projects = projectsData[lang]

  return (
    <Fragment>
      <div className="container pt-12 md:pt-20">
        <h1 className="font-serif text-4xl md:text-6xl leading-tight">{d.projects.title}</h1>
      </div>
      <ProjectSection projects={projects} dictionary={d.projects} lang={lang} />
    </Fragment>
  )
}