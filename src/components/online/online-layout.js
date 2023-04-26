import React, {useState} from 'react';
import {styled} from "@mui/material";
import OnlineNavbar from "@/components/online/online-navbar";
import OnlineFooter from "@/components/online/online-footer";
import OnlineDrawer from "@/components/online/online-drawer";

const OnlineLayoutRoot = styled('div')(({theme}) => ({
	backgroundColor: theme.palette.background.default,
	height: '100%',
}));

function OnlineLayout(props) {
	const {children} = props;

	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<OnlineLayoutRoot
			sx={{
				paddingTop: {
					md: "96px",
					xs: "72px"
				}
			}}
		>
			<OnlineNavbar
				onOpenSidebar={() => setIsSidebarOpen(true)}
			/>
			<OnlineDrawer
				open={isSidebarOpen}
				onClose={() => setIsSidebarOpen(false)}
			/>
			{children}
			<OnlineFooter/>
		</OnlineLayoutRoot>
	);
}

export default OnlineLayout;