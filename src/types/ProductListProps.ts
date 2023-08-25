import {Product} from './Product';

export interface ProductListProps {
	title: string;
	productList: Array<Product>;
	isLoading?: boolean;
}
