import React, {useState} from 'react';
import {styled} from "@mui/material";
import OnlineFooter from "@/components/online/online-footer";
import DashboardNavbar from "@/components/online/dashboard/dashboard-navbar";
import DashboardDrawer from "@/components/online/dashboard/dashboard-drawer";

const DashboardLayoutRoot = styled('div')(({theme}) => ({
	backgroundColor: theme.palette.background.default,
	height: '100%',
}));

function OnlineLayout(props) {
	const {children} = props;

	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<DashboardLayoutRoot
			sx={{
				paddingTop: {
					md: "96px",
					xs: "72px"
				}
			}}
		>
			<DashboardNavbar
				onOpenSidebar={() => setIsSidebarOpen(true)}
			/>
			<DashboardDrawer
				open={isSidebarOpen}
				onClose={() => setIsSidebarOpen(false)}
			/>
			{children}
			<OnlineFooter/>
		</DashboardLayoutRoot>
	);
}

export default OnlineLayout;