import { canSSRAuth } from "@/utils/canSSRAuth";
import { Flex, Text } from "@chakra-ui/react";

export default function Dashboard() {
	return (
		<Flex>
			<Text>Dashboard</Text>
		</Flex>
	);
}

// Protege a página de dashboard, permitindo acesso apenas  a usuários autenticados
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getServerSideProps = canSSRAuth(async (context) => {
	return {
		props: {},
	};
});
