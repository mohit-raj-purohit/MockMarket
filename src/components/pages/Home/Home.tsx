import {FlexCardGrid, ProductList} from '../../organisms';
import {Container, TeaserCard} from '../../molecules';
import useCategories from '../../../hooks/useCategories';
import {getCategoryData} from '../../../data/categoriesObj';
import useProductsForCategory from '../../../hooks/useProductsForCategory';
const Home = () => {
	const {categories, loading: categoriesLoading} = useCategories();
	const {products, loading: productsLoading} = useProductsForCategory(
		categories[3]
	);

	return (
		<Container className="py-10">
			<FlexCardGrid variation="full">
				<TeaserCard
					isLoading={categoriesLoading}
					{...getCategoryData(categories[0])}
				/>
			</FlexCardGrid>
			<FlexCardGrid className="mt-8" variation="50-50">
				<TeaserCard
					isLoading={categoriesLoading}
					{...getCategoryData(categories[1])}
				/>
				<TeaserCard
					isLoading={categoriesLoading}
					{...getCategoryData(categories[2])}
				/>
			</FlexCardGrid>
			<ProductList
				title={'test'}
				productList={products}
				isLoading={productsLoading}
			/>
		</Container>
	);
};

export default Home;
