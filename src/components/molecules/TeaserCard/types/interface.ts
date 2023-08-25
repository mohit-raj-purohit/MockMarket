import { ButtonComponentProps } from "../../../atoms/Button/Button";

export interface TeaserCardProps {
	backgroundImage?: string;
	title?: string;
	description?: string;
	cta?: ButtonComponentProps;
	isLoading?: boolean;
}
