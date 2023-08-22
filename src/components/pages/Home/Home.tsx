import {FlexCardGrid, ProductList} from '../../organisms';
import {Container, TeaserCard} from '../../molecules';
import {
	Product,
	getCategories,
	getCategoryData,
	getProductsByCategory,
} from '../../../services';
import {useEffect, useState} from 'react';
import './Home.css';
const Home = () => {
	const [categories, setCategories] = useState<string[]>([]);
	const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
	const [categoryTitle, setCategoryTitle] = useState<string>('');

	const handleCategoryChange = async (category: string) => {
		const products = await getProductsByCategory(category);
		setCategoryTitle(category);
		setCategoryProducts(products);
	};

	useEffect(() => {
		const fetchCategories = async () => {
			const fetchedCategories = await getCategories();
			setCategories(fetchedCategories);
			handleCategoryChange(fetchedCategories[1]);
		};

		fetchCategories();
	}, []);

	return (
		<Container className="py-10">
			<FlexCardGrid
				variation="full"
				children1={<TeaserCard {...getCategoryData(categories[0])} />}
			/>
			<FlexCardGrid
				className="mt-8"
				variation="50-50"
				children1={<TeaserCard {...getCategoryData(categories[1])} />}
				children2={<TeaserCard {...getCategoryData(categories[2])} />}
			/>
			<ProductList
				title={categoryTitle.toLocaleUpperCase()}
				productList={categoryProducts}
			/>
		</Container>
	);
};

export default Home;
