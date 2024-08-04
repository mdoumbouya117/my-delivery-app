import Link from 'next/link'
import Image from 'next/image'
import ShoppingCartIcon from './icons/ShoppingCartIcon'

const Navbar = () => (
	<nav
		className='bg-white shadow-md text-black px-4 sm:px-6 md:px-8'
		role='navigation'
		aria-label='Main navigation'
	>
		<div className='flex justify-between h-16'>
			<div className='flex items-center'>
				<Link
					href='/'
					aria-label='Go to Eazy Delivery home page'
					className='flex items-center'
				>
					{/* <Image
                  className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
                  src='/next.svg'
                  alt='Next.js Logo'
                  width={180}
                  height={37}
                  priority
                /> */}
					<span className='text-lg sm:text-xl md:text-2xl font-bold text-gray-800'>
						Eazy Delivery
					</span>
				</Link>
			</div>
			<div className='flex items-center space-x-4'>
				<div
					className='relative cursor-pointer'
					aria-label='Shopping cart with 0 items'
				>
					<ShoppingCartIcon
						className='h-6 w-6 text-gray-800'
						aria-hidden='true'
					/>
					<span className='absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full'>
						0
					</span>
				</div>
				<Link
					href='/signin'
					aria-label='Sign in to your account'
					className='bg-primary px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
				>
					Sign In
				</Link>
			</div>
		</div>
	</nav>
)

export default Navbar
