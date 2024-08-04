'use client'

import React, { useState } from 'react'
import { Menu } from '@/shared/data'
import ScrollNav from './ScrollNav'

type MenuProps = {
	menu: Menu[]
}

const MenuItems = ({ menu: menuItems }: MenuProps) => {
	const [searchQuery, setSearchQuery] = useState('')

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value.toLowerCase())
	}

	const filteredMenuItems = menuItems.map((menu) => ({
		...menu,
		items: menu.items.filter(
			(item) =>
				menu.category.toLowerCase().includes(searchQuery) ||
				item.name.toLowerCase().includes(searchQuery) ||
				item.description.toLowerCase().includes(searchQuery)
		),
	}))

	return (
		<div className='py-5'>
			<h2>Menu</h2>
			<div className='mb-4'>
				<input
					type='text'
					placeholder='Search for a dish...'
					value={searchQuery}
					onChange={handleSearchChange}
					className='w-full p-2 border rounded'
				/>
			</div>
			<ScrollNav
				categories={filteredMenuItems.map((menuItem) =>
					menuItem.items.length > 1 ? menuItem.category : ''
				)}
			/>
			{filteredMenuItems.map((menu) =>
				menu.items.length > 1 ? (
					<div
						key={menu.category.replaceAll(' ', '')}
						id={menu.category}
						className='mb-8'
					>
						<h3 className='text-2xl font-bold mb-4'>{menu.category}</h3>
						<div className='grid grid-cols-1 gap-x-3 gap-y-1 sm:grid-cols-3'>
							{menu.items.map((item) => (
								<div key={item.id} className='flex rounded-none shadow'>
									<img
										className='w-32 h-32 object-cover rounded-none'
										src={item.image}
										alt={item.name}
									/>
									<div className='ml-2 flex flex-col justify-between'>
										<div>
											<h4 className='font-bold'>{item.name}</h4>
											<p className='text-sm text-gray-700 line-clamp-3'>
												{item.description}
											</p>
											<p className='text-sm font-semibold text-green-600'>
												${item.price.toFixed(2)}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				) : null
			)}
		</div>
	)
}

export default MenuItems
