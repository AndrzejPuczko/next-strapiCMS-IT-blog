import { Lato, Open_Sans } from 'next/font/google'
import '@/styles/styles.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const lato = Lato({
	subsets: ['latin'],
	weight: ['400', '700', '900'],
	variable: '--font-lato',
})
const openSans = Open_Sans({
	subsets: ['latin'],
	variable: '--font-open-sans',
})
export const metadata = {
	title: 'Początek przygody z technologią - Blog IT',
	description: 'Odkryj fascynujący świat technologii. Od Windows Server po hostowanie stron - zanurz się w najnowszych trendach i rozwiązaniach informatycznych!',
}

const RootLayout = ({ children }) => {
	return (
		<html lang="pl">
			<body className={`${openSans.className} ${openSans.variable} ${lato.variable}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
