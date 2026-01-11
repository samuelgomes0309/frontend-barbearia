import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const token = request.cookies.get("@barberpro.token")?.value;
	const { pathname } = request.nextUrl;
	const guestRoutes = ["/login", "/register"];
	// 🔐 Rotas privadas (exceto /haircut/new)
	const privateRoutes = ["/dashboard", "/haircut"];
	// 🚫 Se NÃO tiver token e tentar acessar rota privada
	if (
		!token &&
		privateRoutes.some((route) => pathname.startsWith(route)) &&
		pathname !== "/haircut/new"
	) {
		return NextResponse.redirect(new URL("/login", request.url));
	}
	// 🔄 Se TIVER token e tentar acessar rota de visitante
	if (token && guestRoutes.some((route) => pathname.startsWith(route))) {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}
	return NextResponse.next();
}

export const config = {
	matcher: [
		"/dashboard/:path*",
		"/haircut/:path*",
		"/login",
		"/register",
		"/subscription",
		"/schedule",
	],
};
