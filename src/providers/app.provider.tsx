"use client";

import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";

import { AuthProvider } from "@/contexts/AuthContext";
import { system } from "./chakra.system";

interface AppProviderProps {
	children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
	return (
		<CacheProvider>
			<ChakraProvider value={system}>
				<AuthProvider>{children}</AuthProvider>
			</ChakraProvider>
		</CacheProvider>
	);
}
