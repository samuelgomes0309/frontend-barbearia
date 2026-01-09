"use client";
import { HaircutProps } from "@/@types";
import Sidebar from "@/components/sidebar";
import { Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

interface ScheduleClientProps {
	haircuts: HaircutProps[];
}

export default function ScheduleClient({ haircuts }: ScheduleClientProps) {
	const [name, setName] = useState("");
	return (
		<Sidebar>
			<Flex py={6} direction="column" w="100%" alignItems="flex-start" gap={6}>
				<Flex
					w="100%"
					justifyContent="space-between"
					alignItems="center"
					maxW={700}
				>
					<Flex w="80%" gap={4} alignItems="center">
						<Link href="/haircut">
							<Flex
								background="barber.400"
								px={4}
								py={2}
								borderRadius={8}
								color="white"
								_hover={{ scale: 1.01 }}
							>
								<Text>Voltar</Text>
							</Flex>
						</Link>
						<Heading fontSize="2xl" fontWeight="bold" color="orange.900">
							Novo agendamento
						</Heading>
					</Flex>
				</Flex>
				<Flex
					background="barber.400"
					w="100%"
					p={6}
					gap={4}
					direction="column"
					borderRadius={8}
					color="white"
					maxW={700}
				>
					<Input
						placeholder="Nome do cliente"
						background="barber.900"
						variant="subtle"
						size="lg"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Button
						background="button.cta"
						color="barber.400"
						size="lg"
						_hover={{
							background: "#fba931ee",
							color: "barber.1000",
							scale: 1.004,
						}}
					>
						Registrar
					</Button>
				</Flex>
			</Flex>
		</Sidebar>
	);
}
