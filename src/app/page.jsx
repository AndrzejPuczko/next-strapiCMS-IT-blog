import Card from '@/components/card/Card'
import { IconTypes } from '@/components/button/Button'
import config from '@/config'
import fetchBlogs from '@/helpers/fetch-blogs'


const Home = async () => {
	const [featuredBlogs, blogs] = await Promise.all([
		await fetchBlogs('&filters[isFeatured][$eq]=true'),
		await fetchBlogs('&sort=createdAt:desc&filters[isFeatured][$eq]=false&pagination[page]=1&pagination[pageSize]=3'),
	])

	return (
		<div className="container pb-80">
			{featuredBlogs.data.map(featuredBlog => (
				<Card
					key={featuredBlog.id}
					label={featuredBlog.attributes.Category}
					title={featuredBlog.attributes.Title}
					summary={featuredBlog.attributes.Summary}
					href={`/${featuredBlog.attributes.slug}`}
					imgSrc={`${config.api}${featuredBlog.attributes.FeaturedImage.data.attributes.url}`}
					imgAlt="Featured Image"
					btnIcon={IconTypes.ARROW_RIGHT}
					className="mb-30"
				/>
			))}

			<div className="row">
				{blogs.data.map(featuredBlog => (
					<div className="col col_4 m-mw-100" key={featuredBlog.id}>
						<Card
							key={featuredBlog.id}
							label={featuredBlog.attributes.Category}
							title={featuredBlog.attributes.Title}
							summary={featuredBlog.attributes.Summary}
							href={`/${featuredBlog.attributes.slug}`}
							imgSrc={`${config.api}${featuredBlog.attributes.Thumbnail.data.attributes.url}`}
							imgAlt="Featured Image"
							btnIcon={IconTypes.ARROW_RIGHT}
							className="mb-30"
						/>
					</div>
				))}
			</div>
		</div>
	)
}
export default Home
