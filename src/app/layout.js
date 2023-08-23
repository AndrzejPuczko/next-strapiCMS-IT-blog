import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Początek przygody z technologią - Blog IT',
	description: 'Odkryj fascynujący świat technologii. Od Windows Server po hostowanie stron - zanurz się w najnowszych trendach i rozwiązaniach informatycznych!',
}

const RootLayout = ({ children }) => {
	return (
		<html lang="pl">
			<body className={inter.className}>{children}</body>
		</html>
	)
}

export default RootLayout