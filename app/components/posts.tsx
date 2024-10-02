import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="bg-[#1c1c1c] text-gray-300 p-6 font-mono">
      <h2 className="text-2xl font-semibold mb-4 text-[#d87d4a]">crazy ramblings</h2>
      <div className="space-y-2">
        {allBlogs
          .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
          .map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block hover:bg-gray-800 transition-colors duration-200 rounded p-2"
            >
              <div className="flex items-baseline">
                <span className="text-[#d87d4a] w-24 flex-shrink-0">
                  {formatDate(post.metadata.publishedAt, false)}
                </span>
                <span className="text-[#d87d4a] mx-2">·························  </span>
                <span className="text-gray-100">{post.metadata.title}</span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
