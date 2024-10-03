import { ReactNode } from 'react'
import { formatDate } from 'app/blog/utils'

interface BlogPostLayoutProps {
  title: string
  publishedAt: string
  children: ReactNode
}

export default function BlogPostLayout({ title, publishedAt, children }: BlogPostLayoutProps) {
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-gray-300 p-8 font-mono">
      <article className="max-w-3xl mx-auto text-yellow-100 style={{
          textShadow: '0 0 2px #fff, 0 0 3px #fff',
        }}">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#d87d4a] mb-2">{title}</h1>
          <time className="text-[#4ecdc4]">{formatDate(publishedAt)}</time>
        </header>
        <div className="prose prose-invert prose-lg max-w-none">
          {children}
        </div>
      </article>
    </div>
  )
}