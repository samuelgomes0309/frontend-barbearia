"use client";
import { SignInProps, SignUpProps, UserProps } from "@/@types";
import { api } from "@/services/apiClient";
import { useRouter } from "next/navigation";
import { destroyCookie, setCookie } from "nookies";
import { createContext, ReactNode, useState } from "react";

interface AuthContextData {
	user: UserProps;
	isAuthenticated: boolean;
	signIn: ({ email, password }: SignInProps) => Promise<void>;
	signUp: ({ email, name, password }: SignUpProps) => Promise<void>;
	signOut: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
	children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<UserProps>(null);
	const isAuthenticated = !!user;
	const router = useRouter();
	async function signIn({ email, password }: SignInProps) {
		if (!email || !password) {
			alert("Preencha todos os campos");
			return;
		}
		try {
			const response = await api.post("/sessions", {
				email,
				password,
			});
			const { id, name, token, address, subscription } = response.data;
			setUser({
				id,
				name,
				email,
				address,
				subscription,
			});
			// 60 *60 * 24 *30 = 30 dias
			setCookie(null, "@barberpro.token", token, {
				maxAge: 60 * 60 * 24 * 30,
				path: "/",
			});
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			router.push("/dashboard");
		} catch (error) {
			console.log("Erro ao acessar", error);
		}
	}
	async function signUp({ email, name, password }: SignUpProps) {
		if (!email || !name || !password) {
			alert("Preencha todos os campos");
			return;
		}
		try {
			await api.post("/users", {
				name,
				email,
				password,
			});
			router.push("/login");
		} catch (error) {
			console.log("Erro ao cadastrar o usuario", error);
		}
	}
	async function signOut() {
		destroyCookie(null, "@barberpro.token", { path: "/" });
		setUser(null);
		router.push("/login");
	}
	return (
		<AuthContext.Provider
			value={{ user, isAuthenticated, signIn, signUp, signOut }}
		>
			{children}
		</AuthContext.Provider>
	);
}
