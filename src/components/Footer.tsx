import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => (
	<footer className='bg-gray-800 text-white py-6 px-4 sm:px-6 md:px-8'>
		<div className='max-w-7xl mx-auto'>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				<div className='flex flex-col items-start'>
					<span className='text-lg sm:text-xl md:text-2xl font-bold'>
						Eazy Delivery
					</span>
					<p className='mt-2 text-sm sm:text-base md:text-lg text-gray-400'>
						Your go-to app for quick and easy food delivery. We bring your
						favorite meals right to your doorstep.
					</p>
				</div>

				<div className='flex flex-col'>
					<h4 className='text-lg sm:text-xl md:text-2xl font-semibold mb-2'>
						Navigation
					</h4>
					<Link
						href='/about'
						className='text-sm sm:text-base md:text-lg text-gray-400 hover:text-white mt-1'
					>
						About Us
					</Link>
					<Link
						href='/contact'
						className='text-sm sm:text-base md:text-lg text-gray-400 hover:text-white mt-1'
					>
						Contact
					</Link>
					<Link
						href='/privacy'
						className='text-sm sm:text-base md:text-lg text-gray-400 hover:text-white mt-1'
					>
						Privacy Policy
					</Link>
					<Link
						href='/terms'
						className='text-sm sm:text-base md:text-lg text-gray-400 hover:text-white mt-1'
					>
						Terms of Service
					</Link>
				</div>

				<div className='flex flex-col'>
					<h4 className='text-lg sm:text-xl md:text-2xl font-semibold mb-2'>
						Follow Us
					</h4>
					<div className='flex space-x-4 mt-2'>
						<Link
							href='https://facebook.com'
							aria-label='Facebook'
							className='text-gray-400 hover:text-white'
						>
							<FaFacebook size={24} />
						</Link>
						<Link
							href='https://twitter.com'
							aria-label='Twitter'
							className='text-gray-400 hover:text-white'
						>
							<FaTwitter size={24} />
						</Link>
						<Link
							href='https://instagram.com'
							aria-label='Instagram'
							className='text-gray-400 hover:text-white'
						>
							<FaInstagram size={24} />
						</Link>
					</div>
				</div>
			</div>
			<div className='mt-8 border-t border-gray-700 pt-4'>
				<p className='text-sm sm:text-base md:text-lg text-gray-400 text-center'>
					&copy; 2024 Eazy Delivery. All rights reserved.
				</p>
			</div>
		</div>
	</footer>
)

export default Footer
