import { NextRequest, NextResponse } from "next/server";

// Função de middleware que roda antes da página carregar
export function middleware(request: NextRequest) {
	// Pega o token salvo nos cookies
	// Se não existir, o valor será undefined
	const token = request.cookies.get("@barberpro.token")?.value;
	// Pega o caminho atual da URL (ex: /login, /dashboard)
	const { pathname } = request.nextUrl;
	// Rotas que só usuários DESLOGADOS podem acessar
	const guestRoutes = ["/login", "/register"];
	// Rotas que só usuários LOGADOS podem acessar
	const privateRoutes = ["/dashboard"];
	// Se NÃO tiver token e tentar acessar uma rota privada
	if (!token && privateRoutes.some((route) => pathname.startsWith(route))) {
		// Redireciona o usuário para o login
		return NextResponse.redirect(new URL("/login", request.url));
	}
	// Se TIVER token e tentar acessar rota de visitante (login ou register)
	if (token && guestRoutes.some((route) => pathname.startsWith(route))) {
		// Redireciona o usuário para o dashboard
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}
	// Se nenhuma regra for acionada, deixa a requisição seguir normalmente
	return NextResponse.next();
}

// Configuração do middleware
export const config = {
	// Define em quais rotas o middleware será executado
	matcher: ["/dashboard/:path*", "/login", "/register"],
};
