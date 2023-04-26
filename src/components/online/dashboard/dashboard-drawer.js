import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import {Box, Divider, Drawer, IconButton, List, ListItem, Typography, useMediaQuery} from "@mui/material";
import {Logo} from "@/components/global/logo";
import {Close as CloseIcon} from "@/icons/close";
import Link from "next/link";
import {useRouter} from "next/router";
import {dashboard} from "@/service/dashboard";
import ProfileAvatar from "@/components/global/profile-avatar";
import {useAuth} from "@/hooks/use-auth";
import toast from "react-hot-toast";

function DashboardDrawer(props) {
	const {
		onClose,
		open,
	} = props;
	const lgUp = useMediaQuery((theme) => theme.breakpoints.down('md'));
	const router = useRouter();

	const {
		user,
		logout
	} = useAuth();

	function handlePathChange() {
		if (!router.isReady) {
			return
		}

		if (open) onClose?.();
	}

	const handleLogout = async () => {
		if (open) onClose?.();
		try {
			await logout();
			router.push('/').catch(console.error);
		} catch (err) {
			console.error(err);
			toast.error('Unable to logout.');
		}
	};

	useEffect(handlePathChange,
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[router.isReady, router.asPath]);

	return (
		<Drawer
			anchor="top"
			open={lgUp && open}
			onClose={() => onClose?.()}
			sx={{
				zIndex: (theme) => theme.zIndex.appBar + 100,
			}}
			PaperProps={{
				sx: {
					borderBottomRightRadius: 10,
					borderBottomLeftRadius: 10,
					background: theme => theme.palette.background.default
				}
			}}

		>
			<Box
				sx={{
					pt: 3,
					px: 3,
					pb: 4
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<Logo
						sx={{
							width: 164
						}}
					/>
					<IconButton
						size="small"
						sx={{
							ml: "auto"
						}}
						onClick={() => onClose?.()}
					>
						<CloseIcon fontSize="small"/>
					</IconButton>
				</Box>
				<Box sx={{mt: 4, display: 'flex', alignItems: 'center'}}>
					<ProfileAvatar sx={{mr: 1}}/>
					<Typography>
						{user?.first_name} {user?.last_name}
					</Typography>
				</Box>
				<Divider sx={{mt: 2, borderColor: '#808080'}}/>
				<List
					sx={{
						mt: 1
					}}
				>
					{dashboard.drawer_navs.map(nav => (
						<ListItem
							key={nav.id}
							disablePadding
							sx={{
								mb: 2
							}}
						>
							<Typography
								component={Link}
								href="/contact"
								color="text.primary"
								sx={{
									textDecoration: "none",
								}}
							>
								{nav.name}
							</Typography>
						</ListItem>

					))}
					<Divider sx={{my: 2, borderColor: '#808080'}}/>
					<ListItem
						disablePadding
						onClick={handleLogout}
					>
						<Typography color="text.primary">
							Chiqish
						</Typography>
					</ListItem>
				</List>
			</Box>
		</Drawer>
	);
}

DashboardDrawer.propTypes = {
	onClose: PropTypes.func,
	open: PropTypes.bool,
}

export default DashboardDrawer;