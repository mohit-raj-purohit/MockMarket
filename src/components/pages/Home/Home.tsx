import {FlexCardGrid} from '../../organisms';
import {Container, TeaserCard} from '../../molecules';
import useCategories from '../../../hooks/useCategories';
import { CATEGORY_PAGE_PATH } from '../../../constants';
const Home = () => {
	const {categories, loading: categoriesLoading} = useCategories();
	return (
		<Container className="py-10">
			<FlexCardGrid variation="full">
				<TeaserCard isLoading={categoriesLoading} {...categories[0]}>
					<TeaserCard.Action to={`${CATEGORY_PAGE_PATH}/${categories[0]?.id}`} variation='primary'>Shop now</TeaserCard.Action>
				</TeaserCard>
			</FlexCardGrid>
			<FlexCardGrid className="mt-8" variation="50-50">
				<TeaserCard isLoading={categoriesLoading} {...categories[1]}>
					<TeaserCard.Action to={`${CATEGORY_PAGE_PATH}/${categories[1]?.id}`} variation='secondary-light'>Shop now</TeaserCard.Action>
				</TeaserCard>
				<TeaserCard isLoading={categoriesLoading} {...categories[2]}>
					<TeaserCard.Action to={`${CATEGORY_PAGE_PATH}/${categories[2]?.id}`} variation='secondary-light'>Shop now</TeaserCard.Action>
				</TeaserCard>
			</FlexCardGrid>
			<FlexCardGrid className="mt-8" variation="full">
				<TeaserCard isLoading={categoriesLoading} {...categories[3]}>
					<TeaserCard.Action to={`${CATEGORY_PAGE_PATH}/${categories[3]?.id}`} variation='secondary-light'>Shop now</TeaserCard.Action>
				</TeaserCard>
			</FlexCardGrid>
		</Container>
	);
};

export default Home;
