import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#1c1c1c]">
      <section className="container mx-auto px-4 py-8">
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter text-white"></h1>
        <BlogPosts />
      </section>
    </div>
  )
}