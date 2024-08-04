import React, { useCallback } from 'react'

type ScrollNavProps = {
	categories: string[]
}

const ScrollNav = ({ categories }: ScrollNavProps) => {
	const scrolltoHash = useCallback(
		(element_id: string, offset: number = -70) => {
			const element = document.getElementById(element_id)
			if (element) {
				const offsetPosition = element.getBoundingClientRect().top + offset

				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth',
				})
			}
		},
		[]
	)

	return (
		<div className='flex overflow-x-auto space-x-4 pr-4 py-4 bg-white sticky top-0 z-10'>
			{categories.map((category, index) =>
				category ? (
					<button
						key={index}
						className='text-sm font-semibold py-2 px-4 rounded-full transition-colors duration-300 text-black bg-gray-200 hover:bg-indigo-600 hover:text-white'
						onClick={() => scrolltoHash(category.replaceAll(' ', ''))}
					>
						{category}
					</button>
				) : null
			)}
		</div>
	)
}

export default ScrollNav
