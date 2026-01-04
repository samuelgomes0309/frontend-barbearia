import { BoxProps, FlexProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

export interface UserProps {
	id: string;
	name: string;
	email: string;
	address: string | null;
	subscription?: SubscriptionProps | null;
}

export interface SubscriptionProps {
	id: string;
	status: string;
}

export interface SignInProps {
	email: string;
	password: string;
}

export interface SignUpProps {
	name: string;
	email: string;
	password: string;
}

export interface SidebarItemProps {
	name: string;
	icon: IconType;
	route: string;
}

export interface SidebarProps extends BoxProps {
	onclose: () => void;
}

export interface NavItemProps {
	icon: IconType;
	children: string;
	route: string;
}

export interface MobielNavProps extends FlexProps {
	onopen: () => void;
}

export interface UpdateUserProps {
	name: string;
	address: string;
}
