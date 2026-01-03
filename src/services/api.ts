import axios from "axios";
import { parseCookies } from "nookies";
import { AuthTokenError } from "./errors/AuthTokenError";

export function setupAPICliente(context = undefined) {
	const cookies = parseCookies(context);
	const api = axios.create({
		baseURL: process.env.NEXT_PUBLIC_API_URL,
		headers: {
			Authorization: `Bearer ${cookies["@barberpro.token"]}`,
		},
	});
	// Criando uma interceptador de resposta para tratar erros de autenticação
	api.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			if (error.response.status === 401) {
				if (typeof window !== "undefined") {
					return Promise.reject(new AuthTokenError());
				}
			}
			return Promise.reject(error);
		}
	);
	return api;
}
