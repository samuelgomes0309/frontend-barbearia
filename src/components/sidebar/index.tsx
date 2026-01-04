"use client";
import {
	MobielNavProps,
	NavItemProps,
	SidebarItemProps,
	SidebarProps,
} from "@/@types";
import {
	Box,
	Center,
	CloseButton,
	Drawer,
	Flex,
	IconButton,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiClipboard, FiMenu, FiScissors, FiSettings } from "react-icons/fi";

// Array de objetos que definem os itens do menu lateral
const linkItems: SidebarItemProps[] = [
	{ name: "Agenda", icon: FiScissors, route: "/dashboard" },
	{ name: "Cortes", icon: FiClipboard, route: "/haircut" },
	{ name: "Minha conta", icon: FiSettings, route: "/profile" },
];

export default function Sidebar({ children }: { children: React.ReactNode }) {
	//  Controle de abertura/fechamento do Drawer no mobile
	const { onClose, onOpen, open } = useDisclosure();
	return (
		<Box minHeight={"100vh"} background={"barber.900"}>
			{/* Sidebar fixa para desktop */}
			<SidebarContent
				onclose={() => onClose()}
				display={{ base: "none", md: "block" }}
			/>
			{/* Drawer usado apenas no mobile */}
			<Drawer.Root
				placement="start"
				skipAnimationOnMount={true}
				open={open}
				onOpenChange={(e) => (e.open ? onOpen() : onClose())}
			>
				<Drawer.Content animation={"none"}>
					<SidebarContent onclose={() => onClose()} />
				</Drawer.Content>
			</Drawer.Root>
			{/* Barra superior no mobile */}
			<MobileNav onopen={onOpen} display={{ base: "flex", md: "none" }} />
			<Box p={4} ml={{ base: 0, md: 60 }}>
				{children}
			</Box>
		</Box>
	);
}

//  Conteúdo da Sidebar (menu lateral) Reutilizado tanto no desktop quanto no Drawer mobile
const SidebarContent = ({ onclose, ...rest }: SidebarProps) => {
	return (
		<Box
			background={"barber.400"}
			borderRight={"1px"}
			borderRightColor={"gray.200"}
			_dark={{
				borderRightColor: "gray.700",
			}}
			width={{ base: "full", md: 60 }}
			position={"fixed"}
			height={"full"}
			py={4}
			{...rest}
		>
			<Flex
				height={20}
				alignItems={"center"}
				justifyContent={"space-between"}
				padding={4}
				mx={8}
			>
				<Link href={"/dashboard"}>
					<Flex cursor="pointer" userSelect="none" flexDirection="row">
						<Text
							fontSize="2xl"
							fontFamily="monospace"
							fontWeight="bold"
							color="white"
						>
							Barber
						</Text>
						<Text
							fontSize="2xl"
							fontFamily="monospace"
							fontWeight="bold"
							color="button.cta"
						>
							PRO
						</Text>
					</Flex>
				</Link>
				<CloseButton
					display={{ base: "flex", md: "none" }}
					onClick={() => onclose()}
					color={"white"}
					_hover={{ color: "#000" }}
				/>
			</Flex>
			{linkItems.map((item) => (
				<NavItem key={item.name} icon={item.icon} route={item.route}>
					{item.name}
				</NavItem>
			))}
		</Box>
	);
};

//   Item individual da navegação detecta a rota ativa para aplicar estilo
const NavItem = ({ children, icon, route, ...rest }: NavItemProps) => {
	const pathname = usePathname();
	// Verifica se a rota atual é a mesma do item ou uma sub-rota
	const isActive = pathname === route || pathname.startsWith(`${route}/`);
	return (
		<Link href={route} style={{ textDecoration: "none" }}>
			<Flex
				align="center"
				p="4"
				mx="4"
				borderRadius="lg"
				role="group"
				cursor="pointer"
				_hover={{
					bg: "barber.900",
					color: "white",
				}}
				color={isActive ? "white" : "gray.500"}
				{...rest}
			>
				{icon && (
					<Box
						mr={4}
						fontSize="16"
						as={icon}
						_groupHover={{
							color: "white",
						}}
					/>
				)}
				{children}
			</Flex>
		</Link>
	);
};

//  Barra superior exibida apenas no mobile Contém o botão para abrir o menu (Drawer)
const MobileNav = ({ onopen, ...rest }: MobielNavProps) => {
	return (
		<Flex
			ml={{ base: 0, md: 60 }}
			px={{ base: 4, md: 24 }}
			height="20"
			alignItems="center"
			bg={"barber.400"}
			borderBottomWidth={"1px"}
			borderBottomColor={"gray.500"}
			justifyContent="flex-start"
			{...rest}
		>
			<IconButton
				variant={"outline"}
				onClick={() => onopen()}
				aria-label="open menu"
				color={"white"}
				_hover={{ color: "#000" }}
			>
				<FiMenu />
			</IconButton>
			<Center w="full">
				<Flex cursor="pointer" userSelect="none" flexDirection="row">
					<Text
						fontSize="2xl"
						fontFamily="monospace"
						fontWeight="bold"
						color="white"
					>
						Barber
					</Text>
					<Text
						fontSize="2xl"
						fontFamily="monospace"
						fontWeight="bold"
						color="button.cta"
					>
						PRO
					</Text>
				</Flex>
			</Center>
		</Flex>
	);
};
