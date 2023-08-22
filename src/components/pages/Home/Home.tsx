import {FlexCardGrid} from '../../organisms';
import {Container, FlexCard} from '../../molecules';
import {
	Product,
	getCategories,
	getCategoryData,
	getProductsByCategory,
} from '../../../services';
import {useEffect, useState} from 'react';
import {Heading, Image, Text} from '../../atoms';
import './Home.css';
const Home = () => {
	const [categories, setCategories] = useState<string[]>([]);
	const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);

	const handleCategoryChange = async (category: string) => {
		const products = await getProductsByCategory(category);
		setCategoryProducts(products);
	};

	useEffect(() => {
		const fetchCategories = async () => {
			const fetchedCategories = await getCategories();
			setCategories(fetchedCategories);
			handleCategoryChange(fetchedCategories[3]);
		};

		fetchCategories();
	}, []);

	return (
		<Container className="py-10">
			<FlexCardGrid
				variation="full"
				children1={<FlexCard {...getCategoryData(categories[0])} />}
			/>
			<FlexCardGrid
				className="mt-8"
				variation="50-50"
				children1={<FlexCard {...getCategoryData(categories[1])} />}
				children2={<FlexCard {...getCategoryData(categories[2])} />}
			/>

			<div className="mt-12">
				<Heading level="h2" className="text-gray-600">
					{categories.length && getCategoryData(categories[3]).title}
				</Heading>
				<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
					{categoryProducts.map((product, index) => (
						<div
							key={index}
							className="w-full bg-white max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
						>
							<div className="h-56 w-full p-3">
								<Image
									src={product.image}
									alt={product.title}
									className="w-full h-full object-contain mix-blend-multiply"
								/>
							</div>
							<div className="px-5 py-3">
								<Heading
									level="h5"
									className="text-gray-700 tracking-normal font-medium"
								>
									{product.title}
								</Heading>
								<Text
									tagType="span"
									className="text-gray-500 mt-2"
								>
									{product.price.toLocaleString('en-IN', {
										style: 'currency',
										currency: 'INR',
									})}
								</Text>
							</div>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
};

export default Home;
