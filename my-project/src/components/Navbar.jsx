import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/Logo.png'

const navigation = [
	{ name: 'Home', href: '#', current: true },
	{ name: 'Gallery', href: '#', current: false },
	{ name: 'About us', href: '#', current: false },
	{ name: 'How we help', href: '#', current: false },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
	return (
		<Disclosure as="nav" className="bg-white">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
								<div className="flex flex-shrink-0 items-center">
									<img
										className="h-8 w-auto"
										src={logo}
										alt="Your Company"
									/>
								</div>
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className={classNames(
											item.current ? 'underline text-black' : 'text-black hover:bg-gray-700 hover:underline',
											'rounded-md px-3 py-2 text-sm font-thin'
											)}
											aria-current={item.current ? 'page' : undefined}
										>
											{item.name}
										</a>
										))}
									</div>
								</div>
								<div className="hidden lg:block">
									<button className="py-2 px-3 text-white text-xs font-thin bg-green-700">Contact us</button>
								</div>
							</div>
						
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
						{navigation.map((item) => (
							<Disclosure.Button
							key={item.name}
							as="a"
							href={item.href}
							className={classNames(
								item.current ? 'underline text-black' : 'text-black hover:bg-gray-700 hover:underline',
								'block rounded-md px-3 py-2 text-base font-thin'
							)}
							aria-current={item.current ? 'page' : undefined}
							>
							{item.name}
							</Disclosure.Button>
						))}
						</div>
						<div className="space-y-1 px-2 pb-3 pt-2">
							<button className="py-2 px-3 text-white text-xs font-thin bg-green-700">Contact us</button>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}
