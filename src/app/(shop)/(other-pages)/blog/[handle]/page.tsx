import BlogPostCart from '@/components/blog-post-cart'
import { Divider } from '@/components/divider'
import { Heading } from '@/components/heading'
import { getBlogPosts, getBlogPostsByHandle } from '@/data'
import { Facebook02Icon, NewTwitterIcon, PinterestIcon, SentIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const socialShare = [
  { name: 'Facebook', href: '#', icon: Facebook02Icon },
  { name: 'Twitter', href: '#', icon: NewTwitterIcon },
  { name: 'Pinterest', href: '#', icon: PinterestIcon },
  { name: 'Email', href: '#', icon: SentIcon },
]

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }): Promise<Metadata> {
  const { handle } = await params
  const post = await getBlogPostsByHandle(handle)
  if (!post) {
    return {
      title: 'Blog',
      description:
        'Stay up-to-date with the latest industry news as our marketing teams finds new ways to re-purpose old CSS tricks articles.',
    }
  }
  const { title, excerpt } = post
  return { title, description: excerpt }
}

export default async function Page({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params
  const { featuredImage, author, content, date, title, timeToRead } = await getBlogPostsByHandle(handle)

  // only get the first 3 posts
  const relatedPosts = (await getBlogPosts()).slice(0, 3)

  return (
    <div className="container">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center py-14 text-center lg:py-16">
          <div className="mt-2.5 flex flex-wrap items-center justify-center gap-x-4 text-center text-sm">
            <span>
              By <span className="font-medium">{author.name}</span>
              <span className="ms-4">/</span>
            </span>
            <time dateTime={date}>
              {date}
              <span className="ms-4">/</span>
            </time>
            <span>{timeToRead}</span>
          </div>
          <Heading bigger level={1} className="mt-5 font-medium">
            {title}
          </Heading>

          <div className="mt-5 flex items-center gap-x-4">
            <div className="pe-2">
              <span className="">Share</span>
            </div>
            {socialShare.map((item) => (
              <Link key={item.name} href={item.href} className="text-zinc-600 hover:text-zinc-800">
                <span className="sr-only">{item.name}</span>
                <HugeiconsIcon icon={item.icon} size={20} color="text-zinc-800" strokeWidth={1.5} />
              </Link>
            ))}
          </div>
        </div>

        <Image
          alt={featuredImage.alt}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 60vw"
          src={featuredImage.src}
          width={featuredImage.width}
          height={featuredImage.height}
          className="mx-auto"
        />

        <div className="mx-auto prose mt-14 lg:prose-xl" dangerouslySetInnerHTML={{ __html: content }} />
      </div>

      <Divider className="my-14 sm:my-20 lg:my-24" />

      <div>
        <Heading>
          <span>מאמרים נוספים</span>
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:mx-0 xl:grid-cols-3">
          {relatedPosts.map((post) => (
            <BlogPostCart key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
