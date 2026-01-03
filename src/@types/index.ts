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
