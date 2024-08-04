import React from 'react'
import classNames from 'classnames'

type ButtonVariant = 'primary' | 'secondary' | 'danger'
type ButtonSize = 'small' | 'medium' | 'large'

interface ButtonProps {
	children: React.ReactNode
	variant?: ButtonVariant
	size?: ButtonSize
	onClick?: () => void
	disabled?: boolean
	ariaLabel?: string
}

const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'primary',
	size = 'medium',
	onClick,
	disabled = false,
	ariaLabel = '',
}) => {
	const baseClasses =
		'inline-flex items-center justify-center font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out'

	const variantClasses: Record<ButtonVariant, string> = {
		primary: 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
		secondary:
			'text-blue-600 bg-blue-100 hover:bg-blue-200 focus:ring-blue-500',
		danger: 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500',
	}

	const sizeClasses: Record<ButtonSize, string> = {
		small: 'px-2.5 py-1.5 text-xs',
		medium: 'px-4 py-2 text-sm',
		large: 'px-6 py-3 text-base',
	}

	const classes = classNames(
		baseClasses,
		variantClasses[variant],
		sizeClasses[size],
		{ 'opacity-50 cursor-not-allowed': disabled }
	)

	return (
		<button
			type='button'
			className={classes}
			onClick={onClick}
			disabled={disabled}
			aria-label={ariaLabel}
		>
			{children}
		</button>
	)
}

export default Button
