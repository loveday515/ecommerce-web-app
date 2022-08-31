import {} from "@material-ui/core";
import {
	Facebook,
	Instagram,
	Twitter,
	Pinterest,
	Room,
	Phone,
	MailOutline,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

const Logo = styled.div``;

const Desc = styled.p`
	margin: 20px 0px;
`;

const SocialContainer = styled.div`
	display: flex;
`;

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
`;

const Title = styled.h3`
	margin-bottom: 30px;
`;

const List = styled.ul`
	margin: 0;
	padding: 0px;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;

// const Payment = styled.img`
// 	width: 100%;
// `;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>LAMA.</Logo>
				<Desc>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.
				</Desc>
				<SocialContainer>
					<SocialIcon color="3B5999">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="E4405F">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<Twitter />
					</SocialIcon>
					<SocialIcon color="E60023">
						<Pinterest />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Whishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{ marginRight: "10px" }} /> 622 Dixie Path, South
					Tobinchester
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: "10px" }} /> +234 4728 38 23
				</ContactItem>
				<ContactItem>
					<MailOutline style={{ marginRight: "10px" }} />
					contact@loveday.dev
				</ContactItem>
				{/* <Payment src="https://i.ibb.co/qfvn4z6/payment.png" /> */}
			</Right>
		</Container>
	);
};

export default Footer;
