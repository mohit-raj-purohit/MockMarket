import { Product } from "./Product";

export interface Category {
	id: string;
	title: string;
	description: string;
	backgroundImage: number;
	products?: Product[];
}
