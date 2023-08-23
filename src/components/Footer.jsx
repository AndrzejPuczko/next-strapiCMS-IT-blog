const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer>
			<div className="container">
				<hr className="mb-30" />
				<p>&copy; Blog IT {currentYear}</p>
			</div>
		</footer>
	)
}

export default Footer
