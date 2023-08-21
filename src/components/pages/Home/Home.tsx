import {FlexCardGrid} from '../../organisms';
import {Container, FlexCard} from '../../molecules';
const Home = () => {
	return (
		<Container className="py-10">
			<FlexCardGrid
				variation="full"
				children1={
					<FlexCard
						backgroundImage="https://images.unsplash.com/photo-1577655197620-704858b270ac"
						title="Sport Shoes"
						description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur."
						cta={{
							type: 'link',
							variation: 'primary',
							buttonLabel: 'Shop Now',
							arrow: true,
						}}
					/>
				}
			/>
			<FlexCardGrid
				className='mt-8'
				variation="50-50"
				children1={
					<FlexCard
						backgroundImage="https://images.unsplash.com/photo-1486401899868-0e435ed85128"
						title="Games"
						description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur."
						cta={{
							type: 'link',
							variation: 'secondary',
							buttonLabel: 'Shop Now',
							arrow: true,
						}}
					/>
				}
				children2={
					<FlexCard
						backgroundImage="https://images.unsplash.com/photo-1547949003-9792a18a2601"
						title="Bag Pack"
						description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur."
						cta={{
							type: 'link',
							variation: 'secondary',
							buttonLabel: 'Shop Now',
							arrow: true,
						}}
					/>
				}
			/>

			<div className="mt-8">
				<h3 className="text-gray-600 text-2xl font-medium">Fashions</h3>
				<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
					<div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
						<div
							className="flex items-end justify-end h-56 w-full bg-cover"
							style={{
								backgroundImage:
									'url("https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80")',
							}}
						>
							<button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
								<svg
									className="h-5 w-5"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
								</svg>
							</button>
						</div>
						<div className="px-5 py-3">
							<h3 className="text-gray-700 uppercase">Chanel</h3>
							<span className="text-gray-500 mt-2">$12</span>
						</div>
					</div>
					<div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
						<div
							className="flex items-end justify-end h-56 w-full bg-cover"
							style={{
								backgroundImage:
									'url("https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80")',
							}}
						>
							<button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
								<svg
									className="h-5 w-5"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
								</svg>
							</button>
						</div>
						<div className="px-5 py-3">
							<h3 className="text-gray-700 uppercase">Man Mix</h3>
							<span className="text-gray-500 mt-2">$12</span>
						</div>
					</div>
					<div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
						<div
							className="flex items-end justify-end h-56 w-full bg-cover"
							style={{
								backgroundImage:
									'url("https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80")',
							}}
						>
							<button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
								<svg
									className="h-5 w-5"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
								</svg>
							</button>
						</div>
						<div className="px-5 py-3">
							<h3 className="text-gray-700 uppercase">
								Classic watch
							</h3>
							<span className="text-gray-500 mt-2">$12</span>
						</div>
					</div>
					<div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
						<div
							className="flex items-end justify-end h-56 w-full bg-cover"
							style={{
								backgroundImage:
									'url("https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80")',
							}}
						>
							<button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
								<svg
									className="h-5 w-5"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
								</svg>
							</button>
						</div>
						<div className="px-5 py-3">
							<h3 className="text-gray-700 uppercase">
								woman mix
							</h3>
							<span className="text-gray-500 mt-2">$12</span>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Home;
