import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import RestaurantList from '@/components/RestaurantList'

const Home = () => (
	<div className='min-h-screen flex flex-col'>
		<main className='flex-grow px-4 sm:px-6 md:px-8'>
			<h1>Restaurants</h1>
			<RestaurantList />
		</main>
		<Footer />
	</div>
)

export default Home
