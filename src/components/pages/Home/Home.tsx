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
		const title = category.toUpperCase();
		setCategoryTitle(title);
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
			<FlexCardGrid variation="full">
				<TeaserCard isLoading={!categories.length} {...getCategoryData(categories[0])} />
			</FlexCardGrid>
			<FlexCardGrid className="mt-8" variation="50-50">
				<TeaserCard isLoading={!categories.length} {...getCategoryData(categories[1])} />
				<TeaserCard isLoading={!categories.length} {...getCategoryData(categories[2])} />
			</FlexCardGrid>
			<ProductList title={categoryTitle} productList={categoryProducts} />
		</Container>
	);
};

export default Home;
