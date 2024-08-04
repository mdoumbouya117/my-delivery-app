'use client'

import React, { useState } from 'react'
import Card from './Card'
import SpecialityFilter from './SpecialitiesFilter'
import { useSearchParams } from 'next/navigation'

const revalidate = 5

const restaurants = [
	{
		id: '205961',
		image: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg',
		name: 'Italian Bistro',
		rating: 4.5,
		reviewCount: 214,
		bgColor: '#F5F5FF',
		location: 'Collingwood, Ontario',
		specialties: ['Italian', 'Pasta', 'Wine'],
	},
	{
		id: '958545',
		image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
		name: 'Sushi Place',
		rating: 4.7,
		reviewCount: 214,
		bgColor: '#DEE8FF',
		location: 'Collingwood, Ontario',
		specialties: ['Japanese', 'Sushi', 'Seafood'],
	},
	{
		id: '260922',
		image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
		name: 'Burger Joint',
		rating: 4.2,
		reviewCount: 214,
		bgColor: '#F5F5FF',
		location: 'Collingwood, Ontario',
		specialties: ['Burgers', 'Fries', 'Milkshakes'],
	},
	{
		id: '2290753',
		image: 'https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg',
		name: 'Burger Joint',
		rating: 4.2,
		reviewCount: 214,
		bgColor: '#F0F5F7',
		location: 'Collingwood, Ontario',
		specialties: ['Burgers', 'Fries', 'Milkshakes'],
	},
	{
		id: '1383776',
		image: 'https://images.pexels.com/photos/1383776/pexels-photo-1383776.jpeg',
		name: 'Burger Joint',
		rating: 4.8,
		reviewCount: 214,
		bgColor: '#F3EFF9',
		location: 'Collingwood, Ontario',
		specialties: ['Burgers', 'Fries', 'Milkshakes'],
	},
]

const specialities = [
	'All',
	'Italian',
	'Japanese',
	'Burgers',
	'Pasta',
	'Seafood',
	'Wine',
	'Fries',
	'Milkshakes',
]

const RestaurantList = () => {
	const searchParams = useSearchParams()
	const speciality = searchParams.get('speciality')
	const [selectedSpeciality, setSelectedSpeciality] = useState<string | null>(
		speciality || 'All'
	)

	const handleSpecialitySelect = (speciality: string) => {
		setSelectedSpeciality(speciality)
	}

	const filteredRestaurants = selectedSpeciality
		? restaurants.filter(
				(restaurant) =>
					restaurant.specialties.includes(selectedSpeciality) ||
					selectedSpeciality === 'All'
		  )
		: restaurants

	return (
		<div>
			<SpecialityFilter
				specialities={specialities}
				selectedSpeciality={selectedSpeciality}
				onSelect={handleSpecialitySelect}
			/>
			<div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
				{filteredRestaurants.map((restaurant, index) => (
					<Card
						id={restaurant.id}
						key={index}
						bgColor={restaurant.bgColor}
						image={restaurant.image}
						name={restaurant.name}
						rating={restaurant.rating}
						reviewCount={restaurant.reviewCount}
						specialties={restaurant.specialties}
						location={restaurant.location}
					/>
				))}
			</div>
		</div>
	)
}

export default RestaurantList
