import Image from 'next/image'
import getCategoryColor from '@/helpers/get-category-color'
import labels from '@/helpers/labels'
import styles from './style.module.scss'

const BlogDetails = () => {
	return (
		<main className="container pb-80">
			<div className="row mb-50">
				<div className="col col_9">
					<div className={`h6 mb-20 c-${getCategoryColor(labels.productReviews)}`}>{'Product reviews'}</div>
					<h2 className="mb-50">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
					<Image className={`${styles.featuredImage} mb-50`} src="/thumb.jpg" alt="technologia blog" width="1280" height="520" />
				</div>
			</div>
			<div className="row">
				<div className="col col_9">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim cumque magnam optio quibusdam at omnis dolorum cum et libero minus quae aperiam odio obcaecati placeat
						in, consectetur natus. IlloLorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim cumque magnam optio quibusdam at omnis dolorum cum et libero minus quae
						aperiam odio obcaecati placeat in, consectetur natus. Illo!!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam velit in laboriosam recusandae facere quas cumque, quasi, officiis similique arLorem ipsum dolor sit
						amet consectetur adipisicing elit. Ab enim cumque magnam optio quibusdam at omnis dolorum cum et libero minus quae aperiam odio obcaecati placeat in, consectetur natus.
						Illo!chitecto dignissimos fugit aperiam fuga dolorem iusto voluptatem quisquam delectus expedita! Pariatur quam quia fugiat dolore vitae dicta inventore, amet fugit,
						deserunt perferendis minus facere.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repellaLorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim cumque magnam optio quibusdam at
						omnis dolorum cum et libero minus quae aperiam odio obcaecati placeat in, consectetur natus. Illo!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim
						cumque magnam optio quibusdam at omnis dolorum cum et libero minus quae aperiam odio obcaecati placeat in, consectetur natus. Illo!t nostrum at eos cum velit inventore
						explicabo saepe iste expedita.
					</p>
				</div>
			</div>
		</main>
	)
}

export default BlogDetails
