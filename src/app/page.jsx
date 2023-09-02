import Card from '@/components/card/Card'
import { IconTypes } from '@/components/button/Button'
import labels from '@/helpers/labels'
import config from '@/config'

const fetchBlogs = async params => {
	const reqOptions = {
		headers: {
			Authorization: `Bearer ${process.env.API_TOKEN}`,
		},
	}
	const request = await fetch(`${config.api}/api/blogs?populate=*${params}`, reqOptions)
	const response = await request.json()

	return response
}

const Home = async () => {
	const [featuredBlogs, blogs] = await Promise.all([await fetchBlogs('&filters[isFeatured][$eq]=true'), await fetchBlogs('&sort=createdAt:desc&filters[isFeatured][$eq]=false')])

	return (
		<div className="container pb-80">
			{featuredBlogs.data.map(featuredBlog => (
				<Card
					key={featuredBlog.id}
					label={featuredBlog.attributes.Category}
					title={featuredBlog.attributes.Title}
					summary={featuredBlog.attributes.Summary}
					href={`/${featuredBlog.attributes.slug}`}
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
