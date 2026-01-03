'use client'

export default function WorkButton() {
  return (
    <button
      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      className="group flex items-center gap-4 text-neutral-900 hover:gap-6 transition-all duration-300"
    >
      <span>View Projects</span>
      <svg
        className="w-6 h-6 transition-transform group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </button>
  )
}