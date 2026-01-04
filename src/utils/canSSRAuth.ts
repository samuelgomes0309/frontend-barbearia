import { AuthTokenError } from "@/services/errors/AuthTokenError";
import {
	GetServerSideProps,
	GetServerSidePropsContext,
	GetServerSidePropsResult,
} from "next";
import { destroyCookie, parseCookies } from "nookies";

// Função que protege páginas que usam getServerSideProps (SSR)
// Ela recebe como parâmetro o getServerSideProps original da página
export function canSSRAuth<P>(fn: GetServerSideProps<P>) {
	// Retorna uma nova função no padrão que o Next.js espera
	return async (
		context: GetServerSidePropsContext
	): Promise<GetServerSidePropsResult<P>> => {
		// Lê todos os cookies enviados na requisição
		const cookies = parseCookies(context);
		// Recupera o token de autenticação salvo no cookie
		const token = cookies["@barberpro.token"];
		// Se não existir token, o usuário não está autenticado
		if (!token) {
			return {
				// Redireciona o usuário para a página de login
				redirect: {
					destination: "/login",
					permanent: false,
				},
			};
		}
		try {
			// Se existir token, tenta executar o
			// getServerSideProps original da página
			return await fn(context);
		} catch (error) {
			// Caso ocorra algum erro durante a execução,
			// verifica se o erro é do tipo AuthTokenError
			if (error instanceof AuthTokenError) {
				// Se for erro de token inválido ou expirado,
				// remove o cookie do token
				destroyCookie(context, "@barberpro.token");
				// E redireciona o usuário para o login
				return {
					redirect: {
						destination: "/login",
						permanent: false,
					},
				};
			}
			// Se não for um erro de autenticação,
			// relança o erro para que o Next.js trate
			throw error;
		}
	};
}
