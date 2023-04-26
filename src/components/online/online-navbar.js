import React from 'react';
import {AppBar, Box, Button, Container, IconButton, Toolbar, Typography} from "@mui/material";
import Link from "next/link";
import {Menu as MenuIcon} from "@/icons/menu";
import PropTypes from "prop-types";
import {OnlineLogo} from "@/components/online/online-logo";

function OnlineNavbar(props) {
	const {
		onOpenSidebar,
	} = props;

	return (
		<AppBar
			elevation={0}
			sx={{
				backgroundColor: 'background.default',
				color: 'text.secondary'
			}}
		>
			<Container>
				<Toolbar
					disableGutters
					sx={{
						minHeight: {
							md: 96,
							xs: 72
						}
					}}
				>
					<Link
						href="/online"
					>
						<OnlineLogo
							sx={{
								height: {
									md: 40,
									xs: 32
								}
							}}
						/>
					</Link>
					<Button
						component={Link}
						href="/"
						variant="outlined"
						color="secondary"
						size="small"
						sx={{
							ml: 8,
							display: {
								md: "block",
								xs: "none"
							}
						}}
					>
						Offline
					</Button>
					<Box sx={{flexGrow: 1}}/>
					<Box
						sx={{
							alignItems: 'center',
							display: {
								md: 'flex',
								xs: 'none',
							}
						}}
					>
						<Typography
							component={Link}
							href="/about"
							color="secondary"
							sx={{
								textDecoration: "none",
								mr: 4
							}}
						>
							Biz haqimizda
						</Typography>
						<Typography
							component={Link}
							href="/contact"
							color="secondary"
							sx={{
								mr: 4,
								textDecoration: "none",
							}}
						>
							Bog&#39;lanish
						</Typography>
					</Box>
					<Typography
						component={Link}
						href="/authentication/login"
						color="secondary"
						sx={{
							mr: 2,
							textDecoration: "none"
						}}
					>
						Kirish
					</Typography>
					<IconButton
						color="inherit"
						onClick={() => onOpenSidebar?.()}
						sx={{
							display: {
								md: 'none',
							}
						}}
					>
						<MenuIcon fontSize="small"/>
					</IconButton>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

OnlineNavbar.propTypes = {
	onOpenSidebar: PropTypes.func,
}

export default OnlineNavbar;