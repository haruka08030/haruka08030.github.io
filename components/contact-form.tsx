'use client'

import { Button } from '@/components/ui/button'

// Define the type for the dictionary object to ensure type safety
type FormDictionary = {
  name: string
  namePlaceholder: string
  email: string
  emailPlaceholder: string
  subject: string
  subjectPlaceholder: string
  message: string
  messagePlaceholder: string
  submit: string
}

export default function ContactForm({ dictionary }: { dictionary: FormDictionary }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = (data.get('name') as string) || 'Anonymous'
    const from = (data.get('email') as string) || 'no email'
    const subject = (data.get('subject') as string) || 'Portfolio Contact'
    const message = data.get('message') as string

    if (!message) {
      alert('Message is required')
      return
    }

    const body = `${message}\n\n— ${name} (${from})`
    const mailto = new URL('mailto:haruka08030@gmail.com')
    mailto.searchParams.set('subject', subject)
    mailto.searchParams.set('body', body)
    window.location.href = mailto.toString()
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">{dictionary.name}</label>
          <input
            name="name"
            type="text"
            className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ring/50"
            placeholder={dictionary.namePlaceholder}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">{dictionary.email}</label>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ring/50"
            placeholder={dictionary.emailPlaceholder}
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">{dictionary.subject}</label>
        <input
          name="subject"
          type="text"
          className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ring/50"
          placeholder={dictionary.subjectPlaceholder}
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">{dictionary.message}</label>
        <textarea
          name="message"
          className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ring/50 min-h-[160px]"
          placeholder={dictionary.messagePlaceholder}
          required
        />
      </div>
      <div>
        <Button type="submit" className="w-full">
          {dictionary.submit}
        </Button>
      </div>
    </form>
  )
}
