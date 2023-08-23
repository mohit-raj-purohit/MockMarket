import {FlexCardGrid, ProductList} from '../../organisms';
import {Container, TeaserCard, TeaserCardSkeleton} from '../../molecules';
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

	const handleCategoryChange = async (category: string, limit: number = 4) => {
		const products = await getProductsByCategory(category, limit);
		setCategoryTitle(category);
		setCategoryProducts(products);
	};

	useEffect(() => {
		const fetchCategories = async () => {
			const fetchedCategories = await getCategories();
			setCategories(fetchedCategories);
			handleCategoryChange(fetchedCategories[3], 4);
		};

		fetchCategories();
	}, []);

	return (
		<Container className="py-10">
			<FlexCardGrid
				variation="full"
				children1={
					categories.length ? (
						<TeaserCard {...getCategoryData(categories[0])} />
					) : (
						<TeaserCardSkeleton />
					)
				}
			/>
			<FlexCardGrid
				className="mt-8"
				variation="50-50"
				children1={
					categories.length ? (
						<TeaserCard {...getCategoryData(categories[1])} />
					) : (
						<TeaserCardSkeleton />
					)
				}
				children2={
					categories.length ? (
						<TeaserCard {...getCategoryData(categories[2])} />
					) : (
						<TeaserCardSkeleton />
					)
				}
			/>
			<ProductList
				title={categoryTitle.toLocaleUpperCase()}
				productList={categoryProducts}
			/>
		</Container>
	);
};

export default Home;
