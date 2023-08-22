import {ButtonComponentProps} from '../components/atoms/Button/Button';

interface categoryHomeType {
	key: string;
	title: string;
	description: string;
	backgroundImage: string;
	cta: ButtonComponentProps;
}

export const CATEGORIES_HOME_PAGE: categoryHomeType[] = [
	{
		key: 'electronics',
		title: 'Electronics',
		description:
			'Unveiling the world of circuits and innovation, from pocket-sized devices to intricate industrial systems.',
		backgroundImage:
			'https://images.unsplash.com/photo-1550009158-9ebf69173e03',
		cta: {
			type: 'link',
			variation: 'primary',
			buttonLabel: 'Shop Now',
			arrow: true,
		},
	},
	{
		key: 'jewelery',
		title: 'Jewellery',
		description:
			'A treasure trove of artistry, where precious metals and gemstones intertwine to create timeless adornments.',
		backgroundImage:
			'https://images.unsplash.com/photo-1628926379972-9843ad139a8c',
		cta: {
			type: 'link',
			variation: 'secondary',
			buttonLabel: 'Shop Now',
			arrow: true,
		},
	},
	{
		key: `men's clothing`,
		title: `Men's clothing`,
		description: `Redefining men's fashion with tailored classics and contemporary ensembles for every facet of life.`,
		backgroundImage:
			'https://images.unsplash.com/photo-1479064555552-3ef4979f8908',
		cta: {
			type: 'link',
			variation: 'secondary',
			buttonLabel: 'Shop Now',
			arrow: true,
		},
	},
	{
		key: `women's clothing`,
		title: `Women's clothing`,
		description: `Embracing diversity and style, offering elegant dresses to everyday wear that epitomize modern femininity.`,
		backgroundImage:
			'https://images.unsplash.com/photo-1516762689617-e1cffcef479d',
		cta: {
			type: 'link',
			variation: 'primary',
			buttonLabel: 'Shop Now',
			arrow: true,
		},
	},
];

export const getCategoryData = (category: string) => {
	return CATEGORIES_HOME_PAGE.filter((cat) => cat.key === category)[0];
};
