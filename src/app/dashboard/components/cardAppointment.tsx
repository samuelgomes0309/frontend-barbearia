import { AppointmentProps } from "@/@types";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import ModalAppointment from "./modalAppointment";

interface CardAppointmentProps {
	appointment: AppointmentProps;
}

export default function CardAppointment({ appointment }: CardAppointmentProps) {
	const [isMobile] = useMediaQuery(["(max-width: 700px)"]);
	const [modalVisible, setModalVisible] = useState(false);
	function handleOpenModal() {
		setModalVisible(true);
	}
	return (
		<Flex
			background={"barber.400"}
			w={"100%"}
			p={6}
			gap={4}
			borderRadius={8}
			color={"white"}
			maxW={700}
			mb={4}
			_hover={{ scale: 1.01 }}
			transition={"all"}
			transitionDuration={"0.2s"}
			cursor={"pointer"}
			onClick={handleOpenModal}
		>
			<Flex
				flexDirection={isMobile ? "column" : "row"}
				alignItems={isMobile ? "flex-start" : "center"}
				justifyContent={isMobile ? "flex-start" : "space-between"}
				w={"100%"}
				gap={2}
			>
				<Flex alignItems={"center"} gap={2} justifyContent={"center"}>
					<Box as={IoPersonSharp} fontSize={25} color={"white"} />
					<Text fontSize={"xl"} fontWeight={"bold"} truncate>
						{appointment.customer}
					</Text>
				</Flex>
				<Text truncate>{appointment.haircut.name}</Text>
				<Text minW={"fit-content"}>
					R$ {appointment.haircut.price.toFixed(2)}
				</Text>
			</Flex>
			{modalVisible && (
				<>
					<ModalAppointment
						appointment={appointment}
						setModalVisible={setModalVisible}
					/>
				</>
			)}
		</Flex>
	);
}
