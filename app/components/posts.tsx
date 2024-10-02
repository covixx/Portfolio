import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="bg-[#1c1c1c] text-gray-300 p-6 font-mono">
      <h2 className="text-2xl  mb-4 text-[#d87d4a]">crazy ramblings</h2>
      <div className="space-y-2">
        {allBlogs
          .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
          .map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block hover:bg-[#3c3c3c] transition-colors duration-200 rounded p-2"
            >
              <div className="flex items-baseline">
                <span className="text-[#4ecdc4] w-24 flex-shrink-0">
                  {formatDate(post.metadata.publishedAt, false)}
                </span>
                <span className="text-yellow-100 mx-2">·························  </span>
                <span className="text-inherit flex-row justify-between">{post.metadata.title}</span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
