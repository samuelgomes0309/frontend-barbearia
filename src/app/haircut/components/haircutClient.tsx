"use client";
import { HaircutProps } from "@/@types";
import Sidebar from "@/components/sidebar";
import { Flex, Heading, Switch, Text } from "@chakra-ui/react";
import Link from "next/link";

interface HaircutClientProps {
	haircuts?: HaircutProps[];
}

export default function HaircutClient({ haircuts }: HaircutClientProps) {
	return (
		<Sidebar>
			<Flex
				py={6}
				direction={"column"}
				justifyItems={"flex-start"}
				w={"100%"}
				alignItems={"flex-start"}
			>
				<Flex
					w={"100%"}
					justifyContent={"space-between"}
					alignItems={"center"}
					maxW={700}
				>
					<Flex w={"80%"} gap={4} alignItems={"center"}>
						<Heading fontSize="2xl" fontWeight="bold" color={"orange.900"}>
							Modelos de cortes
						</Heading>
						<Link href="/haircut/new">
							<Flex
								background={"barber.400"}
								px={4}
								py={2}
								borderRadius={8}
								color={"white"}
								_hover={{ scale: 1.01 }}
							>
								<Text>Novo corte</Text>
							</Flex>
						</Link>
					</Flex>
					<Flex>
						<Switch.Root>
							<Switch.HiddenInput />
							<Switch.Control>
								<Switch.Thumb />
							</Switch.Control>
							<Switch.Label />
						</Switch.Root>
					</Flex>
				</Flex>
			</Flex>
		</Sidebar>
	);
}
