import Card from '@/components/card/Card'
import { IconTypes } from '@/components/button/Button'
import labels from '@/helpers/labels'
import config from '@/config'

const fetchBlogs = async () => {
	const reqOptions = {
		headers: {
			Authorization: `Bearer ${process.env.API_TOKEN}`,
		},
	}
	const request = await fetch(`${config.api}/api/blogs?populate=*&filters[isFeatured][$eq]=true`, reqOptions)
	const response = await request.json()

	return response
}

const Home = async () => {
	const blogs = await fetchBlogs()
	console.log(blogs.data)

	return ( 
		<div className="container pb-80">
			<Card
				label={labels.productReviews}
				title={blogs.data[0].attributes.Title}
				summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam perferendis dicta vel rem voluptate, consectetur unde ratione fuga libero, ducimus incidunt! Vitae unde
					quasi sae"
				href="#"
				btnIcon={IconTypes.ARROW_RIGHT}
				className="mb-30"
			/>

			<div className="row">
				<div className="col col_4 m-mw-100">
					<Card
						label={labels.opinion}
						title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
						summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam perferendis dicta vel rem voluptate, consectetur unde ratione fuga libero, ducimus incidunt! Vitae unde
					quasi sae"
						href="#"
						btnIcon={IconTypes.ARROW_RIGHT}
						className="mb-30"
					/>
				</div>
				<div className="col col_4 m-mw-100">
					<Card
						label={labels.productReviews}
						title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
						summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam perferendis dicta vel rem voluptate, consectetur unde ratione fuga libero, ducimus incidunt! Vitae unde
					quasi sae"
						href="#"
						btnIcon={IconTypes.ARROW_RIGHT}
						className="mb-30"
					/>
				</div>
				<div className="col col_4 m-mw-100">
					<Card
						label={labels.guide}
						title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
						summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam perferendis dicta vel rem voluptate, consectetur unde ratione fuga libero, ducimus incidunt! Vitae unde
					quasi sae"
						href="#"
						btnIcon={IconTypes.ARROW_RIGHT}
						className="mb-30"
					/>
				</div>
			</div>
		</div>
	)
}
export default Home
