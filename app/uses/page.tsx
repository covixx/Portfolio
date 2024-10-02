import { BlogPosts } from 'app/components/posts'
import Uses from 'app/components/uses'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#1c1c1c]">
      <section className="container mx-auto px-0 py-0">
        <h1 className="font-semibold text-2xl mb-0 tracking-tighter text-white"></h1>
        <Uses />
      </section>
    </div>
  )
}