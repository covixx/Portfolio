import BlogPostLayout from "app/components/blogpostlayout"
import { getBlogPosts } from 'app/blog/utils'

export default function Layout({ children, params }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <BlogPostLayout
      title={post.metadata.title}
      publishedAt={post.metadata.publishedAt}
    >
      {children}
    </BlogPostLayout>
  )
}