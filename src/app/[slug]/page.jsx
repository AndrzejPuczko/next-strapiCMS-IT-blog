import Image from 'next/image'
import getCategoryColor from '@/helpers/get-category-color'
import ReactMarkdown from 'react-markdown'
import styles from './style.module.scss'
import fetchBlogs from '@/helpers/fetch-blogs'
import config from '@/config'

const BlogDetails = async props => {
	const blogs = await fetchBlogs(`&filters[slug][$eq]=${props.params.slug}`)

	if (blogs.data.length === 0) return null

	const blog = blogs.data[0]

	return (
		<main className="container pb-80">
			<div className="row mb-50">
				<div className="col col_9">
					<div className={`h6 mb-20 c-${getCategoryColor(blog.attributes.Category)}`}>{blog.attributes.Category}</div>
					<h2 className="mb-50">{blog.attributes.Title}</h2>
					<Image
						className={`${styles.featuredImage} mb-50`}
						src={`${config.api}${blog.attributes.FeaturedImage.data.attributes.url}`}
						alt="technologia blog"
						width="1280"
						height="520"
						priority
					/>
				</div>
			</div>
			<div className="row">
				<div className="col col_9">
					<ReactMarkdown>{blog.attributes.Content}</ReactMarkdown>
				</div>
			</div>
		</main>
	)
}

export const generateStaticParams = async () => {
	const blogs = await fetchBlogs()
	return blogs.data.map(blog => ({
		slug: blog.attributes.slug,
	}))
}

export default BlogDetails
