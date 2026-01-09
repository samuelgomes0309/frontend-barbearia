"use client";
import { AppointmentProps } from "@/@types";
import Sidebar from "@/components/sidebar";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import CardAppointment from "./cardAppointment";

interface DashboardClientProps {
	appointments: AppointmentProps[];
}

export default function DashboardClient({
	appointments,
}: DashboardClientProps) {
	// const isMobile = useMediaQuery(["(max-width: 700px)"]);
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
					maxW={700}
					mb={6}
					flexDirection={"column"}
					alignItems={"flex-start"}
					justifyContent={"flex-start"}
				>
					<Flex gap={4} justifyContent={"center"} alignItems={"center"}>
						<Heading fontSize="2xl" fontWeight="bold" color={"white"}>
							Agenda
						</Heading>
						<Link href="/schedule">
							<Flex
								background={"barber.400"}
								px={4}
								py={2}
								borderRadius={8}
								color={"white"}
								_hover={{ scale: 1.01 }}
							>
								<Text>Registrar</Text>
							</Flex>
						</Link>
					</Flex>
				</Flex>
				{appointments &&
					appointments.length > 0 &&
					appointments.map((appointment) => (
						<CardAppointment key={appointment.id} appointment={appointment} />
					))}
				{appointments.length === 0 && (
					<Text color={"white"}>Nenhum agendamento encontrado.</Text>
				)}
			</Flex>
		</Sidebar>
	);
}
