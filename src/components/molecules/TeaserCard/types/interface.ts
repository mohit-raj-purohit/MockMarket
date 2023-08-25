import { ButtonComponentProps } from "../../../atoms/Button/Button";

export interface TeaserCardProps {
	backgroundImage?: string;
	title?: string;
	id: string;
	description?: string;
	cta?: ButtonComponentProps;
	isLoading?: boolean;
}
