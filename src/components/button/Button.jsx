import Link from 'next/link'
import styles from './button.module.scss'

export const IconTypes = {
	ARROW_RIGHT: 'ARROW_RIGHT',
}

const Button = props => {
	if (props.href) {
		return (
			<Link className={styles.button} href={props.href}>
				{props.children}
				<Button.Icon iconType={props.icon} />
			</Link>
		)
	}

	return <button className={styles.button}>{props.children}</button>
}

Button.Icon = ({ iconType }) => {
	if (iconType === 'ARROW_RIGHT') {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<path fill="currentColor" d="M16 8v-4l8 8-8 8v-4h-5v-8h5zm-7 0h-2v8h2v-8zm-4.014 0h-1.986v8h1.986v-8zm-3.986 0h-1v8h1v-8z" />
			</svg>
		)
	}
	return null
}

export default Button
