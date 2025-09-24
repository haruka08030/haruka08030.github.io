import React from 'react'

// This layout is needed for the root page (app/page.tsx) which only handles redirection.
// The actual layout for the content is in app/[lang]/layout.tsx.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
