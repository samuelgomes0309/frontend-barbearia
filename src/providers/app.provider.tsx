"use client";

import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import { AuthProvider } from "@/contexts/AuthContext";
import { system } from "./chakra.system";

// Configuração do Emotion Cache para Chakra UI
const emotionCache = createCache({
	key: "css",
	prepend: true,
});

interface AppProviderProps {
	children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
	return (
		<CacheProvider value={emotionCache}>
			<ChakraProvider value={system}>
				<AuthProvider>{children}</AuthProvider>
			</ChakraProvider>
		</CacheProvider>
	);
}
